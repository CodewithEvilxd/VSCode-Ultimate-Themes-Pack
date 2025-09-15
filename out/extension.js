"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const streamingDetector_1 = require("./streamingDetector");
const envMasker_1 = require("./envMasker");
const secretMasker_1 = require("./secretMasker");
let recordingDetector;
let envMasker;
let secretMasker;
let statusBarItem;
let isPrivacyGuardEnabled = false;
let hideAllEnvVariables = false;
function activate(context) {
    console.log('Privacy Guard extension is now active!');
    // Initialize components
    recordingDetector = new streamingDetector_1.StreamingDetector();
    envMasker = new envMasker_1.EnvMasker();
    secretMasker = new secretMasker_1.SecretMasker();
    // Create status bar item
    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.command = 'privacyGuard.menu';
    context.subscriptions.push(statusBarItem);
    // Register commands
    const toggleCommand = vscode.commands.registerCommand('privacyGuard.toggle', () => {
        togglePrivacyGuard();
    });
    const menuCommand = vscode.commands.registerCommand('privacyGuard.menu', async () => {
        await showStatusBarMenu();
    });
    const enableCommand = vscode.commands.registerCommand('privacyGuard.enable', () => {
        setPrivacyGuard(true);
    });
    const disableCommand = vscode.commands.registerCommand('privacyGuard.disable', () => {
        setPrivacyGuard(false);
    });
    context.subscriptions.push(toggleCommand, enableCommand, disableCommand, menuCommand);
    // Listen for configuration changes
    const configListener = vscode.workspace.onDidChangeConfiguration(event => {
        if (event.affectsConfiguration('privacyGuard')) {
            recordingDetector.updateConfiguration();
        }
    });
    context.subscriptions.push(configListener);
    // Listen for document changes
    const documentListener = vscode.workspace.onDidOpenTextDocument(document => {
        if (isPrivacyGuardEnabled) {
            applyMaskingForDocument(document);
        }
    });
    const activeEditorListener = vscode.window.onDidChangeActiveTextEditor(editor => {
        if (isPrivacyGuardEnabled && editor) {
            applyMaskingForDocument(editor.document);
        }
    });
    const changeListener = vscode.workspace.onDidChangeTextDocument(event => {
        if (isPrivacyGuardEnabled) {
            applyMaskingForDocument(event.document);
        }
    });
    context.subscriptions.push(documentListener, activeEditorListener, changeListener);
    // Initialize status bar
    updateStatusBar();
    // Start recording detection if auto-detect is enabled
    const config = vscode.workspace.getConfiguration('privacyGuard');
    if (config.get('autoDetect', true)) {
        // Run initial detection to set proper state
        recordingDetector.checkStreamingStatus().then(isStreaming => {
            if (isStreaming) {
                setPrivacyGuard(true);
                vscode.window.showInformationMessage('Recording software detected - Privacy Guard enabled');
            }
            // Start continuous detection
            recordingDetector.startDetection((isStreamingNow) => {
                if (isStreamingNow !== isPrivacyGuardEnabled) {
                    setPrivacyGuard(isStreamingNow);
                    if (isStreamingNow) {
                        vscode.window.showInformationMessage('Recording software detected - Privacy Guard enabled');
                    }
                    else {
                        vscode.window.showInformationMessage('Recording software stopped - Privacy Guard disabled');
                    }
                }
            });
        });
    }
}
exports.activate = activate;
function togglePrivacyGuard() {
    setPrivacyGuard(!isPrivacyGuardEnabled);
}
function setPrivacyGuard(enabled) {
    isPrivacyGuardEnabled = enabled;
    if (enabled) {
        // Apply masking to all open documents
        vscode.workspace.textDocuments.forEach(document => {
            applyMaskingForDocument(document);
        });
    }
    else {
        // Unmask all files
        envMasker.unmaskAll();
        secretMasker.unmaskAll();
    }
    updateStatusBar();
}
function applyMaskingForDocument(document) {
    // Always run secret masker to catch high-entropy/API keys in any file (including .env)
    secretMasker.maskDocument(document);
    // Optionally mask all values in .env files if user enabled it
    if (hideAllEnvVariables) {
        envMasker.maskDocument(document);
    }
    else {
        // Ensure any existing env masks are cleared if user turned the option off
        envMasker.unmaskDocument(document);
    }
}
async function showStatusBarMenu() {
    const privacyLabel = isPrivacyGuardEnabled ? 'Disable Privacy Guard' : 'Enable Privacy Guard';
    const hideAllLabel = `${hideAllEnvVariables ? '$(check)' : '$(circle-large-outline)'} Hide all environment variables`;
    const items = [
        { id: 'toggleStreaming', label: `$(eye${isPrivacyGuardEnabled ? '' : '-closed'}) ${privacyLabel}` },
        { id: 'toggleHideAllEnv', label: hideAllLabel }
    ];
    const picked = await vscode.window.showQuickPick(items, {
        placeHolder: 'Privacy Guard options',
        canPickMany: false
    });
    if (!picked)
        return;
    if (picked.id === 'toggleStreaming') {
        togglePrivacyGuard();
    }
    else if (picked.id === 'toggleHideAllEnv') {
        hideAllEnvVariables = !hideAllEnvVariables;
        if (isPrivacyGuardEnabled) {
            // Re-apply env masking as per the new preference
            if (hideAllEnvVariables) {
                vscode.workspace.textDocuments.forEach(doc => envMasker.maskDocument(doc));
            }
            else {
                envMasker.unmaskAll();
            }
        }
        updateStatusBar();
    }
}
function updateStatusBar() {
    if (isPrivacyGuardEnabled) {
        const envSuffix = hideAllEnvVariables ? ' (env: all)' : '';
        statusBarItem.text = `$(eye-closed) Recording${envSuffix}`;
        statusBarItem.tooltip = 'Privacy Guard: ON - Click to open menu';
        statusBarItem.backgroundColor = new vscode.ThemeColor('statusBarItem.warningBackground');
    }
    else {
        statusBarItem.text = '$(eye) Recording';
        statusBarItem.tooltip = 'Privacy Guard: OFF - Click to open menu';
        statusBarItem.backgroundColor = undefined;
    }
    statusBarItem.show();
}
function deactivate() {
    if (recordingDetector) {
        recordingDetector.stopDetection();
    }
    if (envMasker) {
        envMasker.dispose();
    }
    if (secretMasker) {
        secretMasker.dispose();
    }
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map