import * as vscode from 'vscode';
import { GenericSecretDetector, SecretFinding } from './secretDetector';
import { CustomRulesEngine } from './customRulesEngine';

export class SecretMasker {
    private maskDecorationType: vscode.TextEditorDecorationType;
    private maskedRanges: Map<string, vscode.Range[]> = new Map();
    private detector: GenericSecretDetector;
    private customRulesEngine: CustomRulesEngine;
    private customDecorationTypes: Map<string, vscode.TextEditorDecorationType> = new Map();

    constructor() {
        this.detector = new GenericSecretDetector();
        this.customRulesEngine = new CustomRulesEngine();
        this.maskDecorationType = vscode.window.createTextEditorDecorationType({
            backgroundColor: new vscode.ThemeColor('editor.background'),
            color: new vscode.ThemeColor('editor.background'),
            after: {
                contentText: '••••••••••••',
                color: new vscode.ThemeColor('editorCodeLens.foreground')
            }
        });
    }

    maskDocument(document: vscode.TextDocument): void {
        const editor = vscode.window.visibleTextEditors.find(e => e.document === document);
        if (!editor) return;

        // Run built-in detector on the document to find secret ranges
        const builtInFindings = this.detector.findInDocument(document);

        // Run custom rules engine
        const customFindings = this.customRulesEngine.findCustomSecrets(document);

        // Combine all findings
        const allFindings = [...builtInFindings, ...customFindings];

        // Group findings by masking style for custom rules
        const standardRanges: vscode.Range[] = [];
        const customRangesByRule: Map<string, vscode.Range[]> = new Map();

        for (const finding of allFindings) {
            if (finding.source.startsWith('custom-rule-')) {
                const ruleId = finding.source.replace('custom-rule-', '');
                if (!customRangesByRule.has(ruleId)) {
                    customRangesByRule.set(ruleId, []);
                }
                customRangesByRule.get(ruleId)!.push(finding.range);
            } else {
                standardRanges.push(finding.range);
            }
        }

        // Apply standard masking
        this.maskedRanges.set(document.uri.toString(), [...standardRanges, ...Array.from(customRangesByRule.values()).flat()]);
        editor.setDecorations(this.maskDecorationType, standardRanges);

        // Apply custom rule masking
        for (const [ruleId, ranges] of customRangesByRule) {
            const rules = this.customRulesEngine.getRules();
            const rule = rules.find(r => r.id === ruleId);
            if (rule) {
                let decorationType = this.customDecorationTypes.get(ruleId);
                if (!decorationType) {
                    decorationType = this.customRulesEngine.getMaskDecoration(rule);
                    this.customDecorationTypes.set(ruleId, decorationType);
                }
                editor.setDecorations(decorationType, ranges);
            }
        }
    }

    unmaskDocument(document: vscode.TextDocument): void {
        const editor = vscode.window.visibleTextEditors.find(e => e.document === document);
        if (editor) {
            editor.setDecorations(this.maskDecorationType, []);
            // Clear all custom decorations
            for (const decorationType of this.customDecorationTypes.values()) {
                editor.setDecorations(decorationType, []);
            }
        }
        this.maskedRanges.delete(document.uri.toString());
    }

    unmaskAll(): void {
        vscode.window.visibleTextEditors.forEach(editor => {
            editor.setDecorations(this.maskDecorationType, []);
            // Clear all custom decorations
            for (const decorationType of this.customDecorationTypes.values()) {
                editor.setDecorations(decorationType, []);
            }
        });
        this.maskedRanges.clear();
    }

    dispose(): void {
        this.maskDecorationType.dispose();
        // Dispose all custom decoration types
        for (const decorationType of this.customDecorationTypes.values()) {
            decorationType.dispose();
        }
        this.customDecorationTypes.clear();
        this.maskedRanges.clear();
    }
}

