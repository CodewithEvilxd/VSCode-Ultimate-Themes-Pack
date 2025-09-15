import * as vscode from 'vscode';
import { SecretFinding } from './secretDetector';

export interface CustomMaskingRule {
    id: string;
    name: string;
    pattern: string;
    flags: string;
    description: string;
    enabled: boolean;
    priority: number;
    maskStyle: 'dots' | 'custom' | 'blur';
    customMaskText?: string;
}

export class CustomRulesEngine {
    private rules: CustomMaskingRule[] = [];
    private compiledRules: { rule: CustomMaskingRule; regex: RegExp }[] = [];

    constructor() {
        this.loadRules();
        this.compileRules();
    }

    private loadRules(): void {
        const config = vscode.workspace.getConfiguration('privacyGuard');
        const customRules = config.get('customMaskingRules', []) as CustomMaskingRule[];

        // Default rules if none configured
        if (customRules.length === 0) {
            this.rules = this.getDefaultRules();
        } else {
            this.rules = customRules;
        }
    }

    private getDefaultRules(): CustomMaskingRule[] {
        return [
            {
                id: 'slack-tokens',
                name: 'Slack Bot Tokens',
                pattern: 'xoxb-[0-9]+-[0-9]+-[a-zA-Z0-9]+',
                flags: 'g',
                description: 'Detect Slack bot tokens',
                enabled: true,
                priority: 1,
                maskStyle: 'dots'
            },
            {
                id: 'stripe-keys',
                name: 'Stripe API Keys',
                pattern: 'sk_(test|live)_[a-zA-Z0-9]{24}',
                flags: 'g',
                description: 'Detect Stripe secret keys',
                enabled: true,
                priority: 2,
                maskStyle: 'custom',
                customMaskText: '[STRIPE_KEY]'
            },
            {
                id: 'github-tokens',
                name: 'GitHub Personal Access Tokens',
                pattern: 'ghp_[a-zA-Z0-9]{36}',
                flags: 'g',
                description: 'Detect GitHub PATs',
                enabled: true,
                priority: 3,
                maskStyle: 'dots'
            }
        ];
    }

    private compileRules(): void {
        this.compiledRules = this.rules
            .filter(rule => rule.enabled)
            .sort((a, b) => b.priority - a.priority)
            .map(rule => ({
                rule,
                regex: new RegExp(rule.pattern, rule.flags)
            }));
    }

    findCustomSecrets(document: vscode.TextDocument): SecretFinding[] {
        const findings: SecretFinding[] = [];
        const text = document.getText();

        for (const { rule, regex } of this.compiledRules) {
            let match;
            while ((match = regex.exec(text)) !== null) {
                const startPos = document.positionAt(match.index);
                const endPos = document.positionAt(match.index + match[0].length);

                findings.push({
                    range: new vscode.Range(startPos, endPos),
                    value: match[0],
                    assignedIdentifier: rule.name,
                    source: `custom-rule-${rule.id}`
                });
            }
        }

        return findings;
    }

    getMaskDecoration(rule: CustomMaskingRule): vscode.TextEditorDecorationType {
        const baseOptions: vscode.DecorationRenderOptions = {
            backgroundColor: new vscode.ThemeColor('editor.background'),
            color: new vscode.ThemeColor('editor.background')
        };

        switch (rule.maskStyle) {
            case 'custom':
                return vscode.window.createTextEditorDecorationType({
                    ...baseOptions,
                    after: {
                        contentText: rule.customMaskText || '••••••••••••',
                        color: new vscode.ThemeColor('editorCodeLens.foreground')
                    }
                });
            case 'blur':
                return vscode.window.createTextEditorDecorationType({
                    ...baseOptions,
                    textDecoration: 'blur(2px)'
                });
            case 'dots':
            default:
                return vscode.window.createTextEditorDecorationType({
                    ...baseOptions,
                    after: {
                        contentText: '••••••••••••',
                        color: new vscode.ThemeColor('editorCodeLens.foreground')
                    }
                });
        }
    }

    updateRules(newRules: CustomMaskingRule[]): void {
        this.rules = newRules;
        this.compileRules();

        // Save to configuration
        const config = vscode.workspace.getConfiguration('privacyGuard');
        config.update('customMaskingRules', this.rules, vscode.ConfigurationTarget.Global);
    }

    getRules(): CustomMaskingRule[] {
        return [...this.rules];
    }

    addRule(rule: CustomMaskingRule): void {
        // Ensure unique ID
        const existingIds = this.rules.map(r => r.id);
        if (existingIds.includes(rule.id)) {
            rule.id = `${rule.id}_${Date.now()}`;
        }

        this.rules.push(rule);
        this.updateRules(this.rules);
    }

    removeRule(ruleId: string): void {
        this.rules = this.rules.filter(r => r.id !== ruleId);
        this.updateRules(this.rules);
    }

    validateRule(rule: CustomMaskingRule): { valid: boolean; error?: string } {
        try {
            new RegExp(rule.pattern, rule.flags);
            return { valid: true };
        } catch (error) {
            return { valid: false, error: error instanceof Error ? error.message : 'Invalid regex' };
        }
    }
}