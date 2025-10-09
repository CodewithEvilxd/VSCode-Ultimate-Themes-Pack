/// <reference types="vscode" />

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
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

    let switchToOneDarkPro = vscode.commands.registerCommand('multiBg.switchToOneDarkPro', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'One Dark Pro', vscode.ConfigurationTarget.Global);
    });

    let switchToDragonBallGokuEyeSafe = vscode.commands.registerCommand('multiBg.switchToDragonBallGokuEyeSafe', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Dragon Ball Z Goku Power (Eye-Safe)', vscode.ConfigurationTarget.Global);
    });

    let switchToAyuMirage = vscode.commands.registerCommand('multiBg.switchToAyuMirage', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Ayu Mirage Comfort', vscode.ConfigurationTarget.Global);
    });

    let switchToCatppuccinMocha = vscode.commands.registerCommand('multiBg.switchToCatppuccinMocha', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Catppuccin Mocha Eye Care', vscode.ConfigurationTarget.Global);
    });

    let switchToEyeComfort = vscode.commands.registerCommand('multiBg.switchToEyeComfort', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Eye Comfort Dark Pro', vscode.ConfigurationTarget.Global);
    });

    let switchToMoonlight = vscode.commands.registerCommand('multiBg.switchToMoonlight', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Moonlight Soft', vscode.ConfigurationTarget.Global);
    });

    let switchToNightOwl = vscode.commands.registerCommand('multiBg.switchToNightOwl', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Night Owl Comfort', vscode.ConfigurationTarget.Global);
    });

    let switchToNebulaPro = vscode.commands.registerCommand('multiBg.switchToNebulaPro', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Nebula Pro Dark', vscode.ConfigurationTarget.Global);
    });

    let switchToRoseParadise = vscode.commands.registerCommand('multiBg.switchToRoseParadise', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Rose Paradise', vscode.ConfigurationTarget.Global);
    });

    let switchToOmnitrixCode = vscode.commands.registerCommand('multiBg.switchToOmnitrixCode', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Omnitrix Code', vscode.ConfigurationTarget.Global);
    });

    let switchToNeonDreamCode = vscode.commands.registerCommand('multiBg.switchToNeonDreamCode', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Neon Dream Code', vscode.ConfigurationTarget.Global);
    });

    context.subscriptions.push(switchToHacker, switchToPink, switchToBlue, switchToDark, switchToNord, switchToTokyo, switchToDracula, switchToSolarized, switchToGruvbox, switchToGentleSepia, switchToLowBlueNight, switchToSoftContrast, switchToDuskyRose, switchToHighReadability, switchToOneDarkPro, switchToDragonBallGokuEyeSafe, switchToAyuMirage, switchToCatppuccinMocha, switchToEyeComfort, switchToMoonlight, switchToNightOwl, switchToNebulaPro, switchToRoseParadise, switchToOmnitrixCode, switchToNeonDreamCode);
}

export function deactivate() {}