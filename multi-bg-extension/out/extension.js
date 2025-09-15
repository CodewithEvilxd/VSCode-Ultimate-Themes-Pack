"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    console.log('Multi Background Themes extension is now active!');
    let switchToHacker = vscode.commands.registerCommand('multiBg.switchToHacker', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Hacker Theme', vscode.ConfigurationTarget.Global);
    });
    let switchToPink = vscode.commands.registerCommand('multiBg.switchToPink', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Pink Theme', vscode.ConfigurationTarget.Global);
    });
    let switchToBlue = vscode.commands.registerCommand('multiBg.switchToBlue', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Blue Theme', vscode.ConfigurationTarget.Global);
    });
    let switchToDark = vscode.commands.registerCommand('multiBg.switchToDark', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Enhanced Dark Theme', vscode.ConfigurationTarget.Global);
    });
    let switchToNord = vscode.commands.registerCommand('multiBg.switchToNord', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Nord Dark', vscode.ConfigurationTarget.Global);
    });
    let switchToTokyo = vscode.commands.registerCommand('multiBg.switchToTokyo', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Tokyo Night', vscode.ConfigurationTarget.Global);
    });
    let switchToDracula = vscode.commands.registerCommand('multiBg.switchToDracula', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Dracula Pro', vscode.ConfigurationTarget.Global);
    });
    let switchToSolarized = vscode.commands.registerCommand('multiBg.switchToSolarized', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Solarized Dark', vscode.ConfigurationTarget.Global);
    });
    let switchToGruvbox = vscode.commands.registerCommand('multiBg.switchToGruvbox', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Gruvbox Dark', vscode.ConfigurationTarget.Global);
    });
    let switchToGentleSepia = vscode.commands.registerCommand('multiBg.switchToGentleSepia', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Gentle Sepia', vscode.ConfigurationTarget.Global);
    });
    let switchToLowBlueNight = vscode.commands.registerCommand('multiBg.switchToLowBlueNight', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'LowBlue Night', vscode.ConfigurationTarget.Global);
    });
    let switchToSoftContrast = vscode.commands.registerCommand('multiBg.switchToSoftContrast', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Soft Contrast', vscode.ConfigurationTarget.Global);
    });
    let switchToDuskyRose = vscode.commands.registerCommand('multiBg.switchToDuskyRose', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Dusky Rose Dark', vscode.ConfigurationTarget.Global);
    });
    let switchToHighReadability = vscode.commands.registerCommand('multiBg.switchToHighReadability', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'High Readability Contrast', vscode.ConfigurationTarget.Global);
    });
    context.subscriptions.push(switchToHacker, switchToPink, switchToBlue, switchToDark, switchToNord, switchToTokyo, switchToDracula, switchToSolarized, switchToGruvbox, switchToGentleSepia, switchToLowBlueNight, switchToSoftContrast, switchToDuskyRose, switchToHighReadability);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map