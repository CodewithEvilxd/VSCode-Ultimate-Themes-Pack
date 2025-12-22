/// <reference types="vscode" />

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

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

    let switchToEclipseDark = vscode.commands.registerCommand('multiBg.switchToEclipseDark', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Eclipse Dark', vscode.ConfigurationTarget.Global);
    });

    let switchToEclipseLight = vscode.commands.registerCommand('multiBg.switchToEclipseLight', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Eclipse Light', vscode.ConfigurationTarget.Global);
    });

    let switchToSpaceDark = vscode.commands.registerCommand('multiBg.switchToSpaceDark', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Space Dark', vscode.ConfigurationTarget.Global);
    });

    let switchToSpaceLight = vscode.commands.registerCommand('multiBg.switchToSpaceLight', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Space Light', vscode.ConfigurationTarget.Global);
    });

    let switchToCosmicDark = vscode.commands.registerCommand('multiBg.switchToCosmicDark', () => {
        ('Switching to Cosmic Dark theme');
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Cosmic Dark', vscode.ConfigurationTarget.Global);
    });

    let switchToElectricDreams = vscode.commands.registerCommand('multiBg.switchToElectricDreams', () => {
        ('Switching to Electric Dreams theme');
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Aurora Borealis', vscode.ConfigurationTarget.Global);
    });

    let switchToWinterIsComing = vscode.commands.registerCommand('multiBg.switchToWinterIsComing', () => {
        ('Switching to Winter Is Coming theme');
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Midnight Frost', vscode.ConfigurationTarget.Global);
    });

    let switchToCyberpunkNeon = vscode.commands.registerCommand('multiBg.switchToCyberpunkNeon', () => {
        ('Switching to Cyberpunk Neon theme');
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Cyberpunk Neon', vscode.ConfigurationTarget.Global);
    });

    let switchToOceanBreeze = vscode.commands.registerCommand('multiBg.switchToOceanBreeze', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Ocean Breeze', vscode.ConfigurationTarget.Global);
    });

    let switchToNeonCyberpunk = vscode.commands.registerCommand('multiBg.switchToNeonCyberpunk', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Neon Cyberpunk', vscode.ConfigurationTarget.Global);
    });

    let switchToDeepSpaceDark = vscode.commands.registerCommand('multiBg.switchToDeepSpaceDark', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Deep Space Dark', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🎉 Switched to Deep Space Dark Theme (NEW)! Experience the ultimate cosmic coding environment.');
    });

    let switchToDeepSpaceLight = vscode.commands.registerCommand('multiBg.switchToDeepSpaceLight', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Deep Space Light', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🌟 Switched to Deep Space Light Theme (NEW)! Experience the ultimate cosmic coding environment.');
    });

    let switchToPinkKitty = vscode.commands.registerCommand('multiBg.switchToPinkKitty', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Pink Kitty Theme', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🐱 Switched to Pink Kitty Theme (NEW)! Cute and adorable coding experience.');
    });

    let switchToJapaneseWave = vscode.commands.registerCommand('multiBg.switchToJapaneseWave', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Japanese Wave', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🌊 Switched to Japanese Wave Theme (NEW)! Japanese-inspired elegant coding experience.');
    });

    let switchToCosmicConsole = vscode.commands.registerCommand('multiBg.switchToCosmicConsole', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Cosmic Console', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🌌 Switched to Cosmic Console Theme (NEW)! Nebula-inspired console aesthetic.');
    });

    let switchToMidnightGlow = vscode.commands.registerCommand('multiBg.switchToMidnightGlow', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Midnight Glow', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🌙 Switched to Midnight Glow Theme (NEW)! Elegant dark theme with glowing accents.');
    });

    let switchToCalmDark = vscode.commands.registerCommand('multiBg.switchToCalmDark', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Calm Dark', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🌿 Switched to Calm Dark Theme (NEW)! Serene and soothing dark theme for focused coding.');
    });

    let switchToCalmLight = vscode.commands.registerCommand('multiBg.switchToCalmLight', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Calm Light', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('☀️ Switched to Calm Light Theme (NEW)! Bright and calming light theme for comfortable coding.');
    });

    let switchToPinkPixelCandyNebula = vscode.commands.registerCommand('multiBg.switchToPinkPixelCandyNebula', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Pink Pixel Candy Nebula', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🍭 Switched to Pink Pixel Candy Nebula Theme (NEW)! Sweet and vibrant nebula-inspired dark theme.');
    });

    let switchToSugarRushDark = vscode.commands.registerCommand('multiBg.switchToSugarRushDark', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Sugar Rush Dark', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🍬 Switched to Sugar Rush Dark Theme (NEW)! Electric and sugary dark theme with vibrant colors.');
    });

    let switchToPixelLabDark = vscode.commands.registerCommand('multiBg.switchToPixelLabDark', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Pixel Lab Dark', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🔬 Switched to Pixel Lab Dark Theme (NEW)! Clean and professional dark theme for laboratory-like coding.');
    });

    let switchToNimbusMintLight = vscode.commands.registerCommand('multiBg.switchToNimbusMintLight', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Nimbus Mint Light', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('☁️ Switched to Nimbus Mint Light Theme (NEW)! Clean and modern light theme with mint accents for comfortable coding.');
    });

    let switchToCloudMintNight = vscode.commands.registerCommand('multiBg.switchToCloudMintNight', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'CloudMint Night', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🌙 Switched to CloudMint Night Theme (NEW)! Modern dark theme with mint accents and clean aesthetics for focused coding.');
    });

    let switchToAmberLight = vscode.commands.registerCommand('multiBg.switchToAmberLight', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Amber Light', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🌅 Switched to Amber Light Theme (NEW)! Warm and inviting light theme with amber tones for comfortable coding.');
    });

    let switchToAzureHC = vscode.commands.registerCommand('multiBg.switchToAzureHC', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Azure Dark HC', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🔵 Switched to Azure Dark HC Theme (NEW)! High contrast dark theme with azure accents for enhanced visibility.');
    });

    let switchToDarkRosebyte = vscode.commands.registerCommand('multiBg.switchToDarkRosebyte', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'DarkRosebyte', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🌹 Switched to DarkRosebyte Theme (NEW)! Elegant dark theme with rose and crimson accents for sophisticated coding.');
    });

    let switchToAurumDusk = vscode.commands.registerCommand('multiBg.switchToAurumDusk', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Aurum Dusk', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🌅 Switched to Aurum Dusk Theme (NEW)! Warm golden dark theme with sunset-inspired colors for cozy coding.');
    });

    let switchToEmeraldMatrix = vscode.commands.registerCommand('multiBg.switchToEmeraldMatrix', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Emerald Matrix', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('💚 Switched to Emerald Matrix Theme (NEW)! Matrix-inspired dark theme with emerald green accents for immersive coding.');
    });

    let switchToEverNex = vscode.commands.registerCommand('multiBg.switchToEverNex', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'EverNex', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🌿 Switched to EverNex Theme (NEW)! Fresh green dark theme with vibrant accents for modern coding.');
    });

    let switchToLavenderGlow = vscode.commands.registerCommand('multiBg.switchToLavenderGlow', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Lavender Glow', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('💜 Switched to Lavender Glow Theme (NEW)! Elegant lavender light theme with purple accents for comfortable coding.');
    });

    let switchToMidnightAbyss = vscode.commands.registerCommand('multiBg.switchToMidnightAbyss', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Midnight Abyss', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🌊 Switched to Midnight Abyss Theme (NEW)! Deep ocean dark theme with blue accents for immersive coding.');
    });

    let switchToOceanAbyss = vscode.commands.registerCommand('multiBg.switchToOceanAbyss', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Ocean Abyss', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🌊 Switched to Ocean Abyss Theme (NEW)! Deep ocean high contrast light theme with blue accents for accessible coding.');
    });

    let switchToSkyBreeze = vscode.commands.registerCommand('multiBg.switchToSkyBreeze', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Sky Breeze', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🌤️ Switched to Sky Breeze Theme (NEW)! Refreshing sky blue light theme with calming blue accents for comfortable coding.');
    });

    let switchToPastelCyberwave = vscode.commands.registerCommand('multiBg.switchToPastelCyberwave', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Pastel Cyberwave', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🌈 Switched to Pastel Cyberwave Theme (NEW)! Soft cyberpunk dark theme with pastel neon accents for gentle futuristic coding.');
    });

    let switchToNeonOverdrive = vscode.commands.registerCommand('multiBg.switchToNeonOverdrive', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Neon Overdrive', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('⚡ Switched to Neon Overdrive Theme (NEW)! High-energy cyberpunk dark theme with vibrant neon accents for intense coding sessions.');
    });

    let switchToNuttyDark = vscode.commands.registerCommand('multiBg.switchToNuttyDark', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Nutty Dark', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🥜 Switched to Nutty Dark Theme! Nutty and delicious dark theme for coding.');
    });

    let switchToNuttyLight = vscode.commands.registerCommand('multiBg.switchToNuttyLight', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Nutty Light', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🥜 Switched to Nutty Light Theme! Nutty and delicious light theme for coding.');
    });

    let switchToDarkGreenJungle = vscode.commands.registerCommand('multiBg.switchToDarkGreenJungle', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Dark Green Jungle', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🌿 Switched to Dark Green Jungle Theme (NEW)! Immersive jungle-inspired dark theme for adventurous coding.');
    });

    let switchToBlackAndWhiteTV = vscode.commands.registerCommand('multiBg.switchToBlackAndWhiteTV', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Black and White TV', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('📺 Switched to Black and White TV Theme (NEW)! Vintage monochrome dark theme for classic coding.');
    });

    let switchToCanvasSoftLight = vscode.commands.registerCommand('multiBg.switchToCanvasSoftLight', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Canvas Soft Light', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🖼️ Switched to Canvas Soft Light Theme! Soft and elegant light theme for comfortable coding.');
    });

    let switchToCanvasIntelli = vscode.commands.registerCommand('multiBg.switchToCanvasIntelli', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Canvas Intelli', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🧠 Switched to Canvas Intelli Theme! Intelligent light theme for advanced coding.');
    });

    let switchToCodeCanvasLight = vscode.commands.registerCommand('multiBg.switchToCodeCanvasLight', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'CodeCanvas Light', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🎨 Switched to CodeCanvas Light Theme! Elegant light theme for creative coding.');
    });

    let switchToCodeCanvasIntelliLight = vscode.commands.registerCommand('multiBg.switchToCodeCanvasIntelliLight', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'CodeCanvas Intelli Light', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🧠 Switched to CodeCanvas Intelli Light Theme! Intelligent light theme for advanced coding.');
    });

    let switchToMapleDark = vscode.commands.registerCommand('multiBg.switchToMapleDark', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Maple Dark', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🍁 Switched to Maple Dark Theme! Colorful editor theme with medium brightness and low saturation.');
    });

    let switchToMapleLight = vscode.commands.registerCommand('multiBg.switchToMapleLight', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Maple Light', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🍁 Switched to Maple Light Theme! Colorful editor theme with medium brightness and low saturation.');
    });

    let switchToNeonGenesisDark = vscode.commands.registerCommand('multiBg.switchToNeonGenesisDark', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Neon Genesis Dark', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🌌 Switched to Neon Genesis Dark Theme! Eva Unit inspired dark theme with vibrant colors.');
    });

    let switchToNeonOrchidProtocol = vscode.commands.registerCommand('multiBg.switchToNeonOrchidProtocol', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Neon Orchid Protocol', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🌸 Switched to Neon Orchid Protocol Theme! Advanced Eva Unit inspired dark theme with enhanced syntax highlighting.');
    });

    let switchToSpiritwoodNight = vscode.commands.registerCommand('multiBg.switchToSpiritwoodNight', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Spiritwood Night', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🌲 Switched to Spiritwood Night Theme! Studio Ghibli inspired forest theme with magical colors.');
    });

    let switchToCandycoreNoir = vscode.commands.registerCommand('multiBg.switchToCandycoreNoir', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Candycore Noir', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🍬 Switched to Candycore Noir Theme! Sweet candy-inspired dark theme with vibrant colors.');
    });

    let switchToCoffeeSpaceCats = vscode.commands.registerCommand('multiBg.switchToCoffeeSpaceCats', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Coffee Space Cats', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('☕🐱 Switched to Coffee Space Cats Theme! Space cats and coffee-inspired dark theme with neon accents.');
    });

    let switchToCocoaEmber = vscode.commands.registerCommand('multiBg.switchToCocoaEmber', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Cocoa Ember', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🍫🔥 Switched to Cocoa Ember Theme! Chocolate and ember-inspired dark theme with warm colors.');
    });

    let switchToCyanDepths = vscode.commands.registerCommand('multiBg.switchToCyanDepths', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Cyan Depths', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🌊 Switched to Cyan Depths Theme! Deep ocean-inspired cyan dark theme.');
    });

    let switchToElementalSpectrum = vscode.commands.registerCommand('multiBg.switchToElementalSpectrum', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Elemental Spectrum', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🔥 Switched to Elemental Spectrum Theme! Pokemon-inspired color theme with elemental type colors.');
    });

    let switchToNothingOSDark = vscode.commands.registerCommand('multiBg.switchToNothingOSDark', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Nothing OS Dark', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('Switched to Nothing OS Dark Theme!');
    });

    let switchToNothingOSGlyphNew = vscode.commands.registerCommand('multiBg.switchToNothingOSGlyphNew', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Nothing OS Dark (Glyph)', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('Switched to Nothing OS Dark (Glyph) Theme!');
    });

    let switchToNothingOSGray = vscode.commands.registerCommand('multiBg.switchToNothingOSGray', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Nothing OS Gray', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('Switched to Nothing OS Gray Theme!');
    });

    let switchToNothingOSLight = vscode.commands.registerCommand('multiBg.switchToNothingOSLight', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Nothing OS Light', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('Switched to Nothing OS Light Theme!');
    });

    let switchToNothingOSSpecial = vscode.commands.registerCommand('multiBg.switchToNothingOSSpecial', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Nothing OS Special', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('Switched to Nothing OS Special Theme!');
    });

    let switchToBadHacker = vscode.commands.registerCommand('multiBg.switchToBadHacker', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Bad Hacker', vscode.ConfigurationTarget.Global);
    });

    let switchToSolsticeHibernal = vscode.commands.registerCommand('multiBg.switchToSolsticeHibernal', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Solstice Hibernal', vscode.ConfigurationTarget.Global);
    });

    let switchToSolsticeEstival = vscode.commands.registerCommand('multiBg.switchToSolsticeEstival', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Solstice Estival', vscode.ConfigurationTarget.Global);
    });

    let switchToMikuCode = vscode.commands.registerCommand('multiBg.switchToMikuCode', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Miku Code', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🎤 Switched to Miku Code Anime Theme! Experience the ultimate vocaloid coding environment.');
    });

    let switchToMikuCodeFusion = vscode.commands.registerCommand('multiBg.switchToMikuCodeFusion', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Miku Code Fusion', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🎤 Switched to Miku Code Fusion Anime Theme! Experience the enhanced vocaloid coding environment.');
    });

    let switchToMikuCodeFusionLight = vscode.commands.registerCommand('multiBg.switchToMikuCodeFusionLight', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Miku Code Fusion Light', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🎤 Switched to Miku Code Fusion Light Anime Theme! Experience the bright vocaloid coding environment.');
    });

    let switchToMikuCodeLight = vscode.commands.registerCommand('multiBg.switchToMikuCodeLight', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Miku Code Light', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🎤 Switched to Miku Code Light Anime Theme! Experience the light vocaloid coding environment.');
    });

    let switchToSherwoodForestSummer = vscode.commands.registerCommand('multiBg.switchToSherwoodForestSummer', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Sherwood Forest (Summer)', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🌲 Switched to Sherwood Forest (Summer) Theme! Experience the serene forest coding environment.');
    });

    let switchToKelpForestBold = vscode.commands.registerCommand('multiBg.switchToKelpForestBold', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Kelp Forest Bold', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🌊 Switched to Kelp Forest Bold Theme! Experience the deep ocean coding environment.');
    });

    let switchToKelpForestItalic = vscode.commands.registerCommand('multiBg.switchToKelpForestItalic', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Kelp Forest Italic', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🌊 Switched to Kelp Forest Italic Theme! Experience the elegant deep ocean coding environment.');
    });

    let switchToKelpForest = vscode.commands.registerCommand('multiBg.switchToKelpForest', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Kelp Forest', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🌊 Switched to Kelp Forest Theme! Experience the serene deep ocean coding environment.');
    });

    let switchToCyberpink137 = vscode.commands.registerCommand('multiBg.switchToCyberpink137', () => {
        vscode.workspace.getConfiguration('workbench').update('colorTheme', 'Cyberpink-137© Theme', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('💖 Switched to Cyberpink-137© Theme! Experience the ultimate cyberpunk pink coding environment.');
    });

    let switchToVitesseDarkIconTheme = vscode.commands.registerCommand('multiBg.switchToVitesseDarkIconTheme', () => {
        vscode.workspace.getConfiguration('workbench').update('iconTheme', 'vitesse-dark', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🚀 Switched to Vitesse Dark Icon Theme! Modern and clean dark icon set.');
    });

    let switchToVitesseLightIconTheme = vscode.commands.registerCommand('multiBg.switchToVitesseLightIconTheme', () => {
        vscode.workspace.getConfiguration('workbench').update('iconTheme', 'vitesse-light', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('☀️ Switched to Vitesse Light Icon Theme! Modern and clean light icon set.');
    });

    let switchToPixelCraftBlueIconTheme = vscode.commands.registerCommand('multiBg.switchToPixelCraftBlueIconTheme', () => {
        vscode.workspace.getConfiguration('workbench').update('iconTheme', 'pixel-craft-blue', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🔵 Switched to Pixel Craft Blue Icon Theme! Minimal blue-themed icon set.');
    });

    let switchToPixelCraftPurpleIconTheme = vscode.commands.registerCommand('multiBg.switchToPixelCraftPurpleIconTheme', () => {
        vscode.workspace.getConfiguration('workbench').update('iconTheme', 'pixel-craft-purple', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🟣 Switched to Pixel Craft Purple Icon Theme! Minimal purple-themed icon set.');
    });

    let switchToPixelCraftYellowIconTheme = vscode.commands.registerCommand('multiBg.switchToPixelCraftYellowIconTheme', () => {
        vscode.workspace.getConfiguration('workbench').update('iconTheme', 'pixel-craft-yellow', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🟡 Switched to Pixel Craft Yellow Icon Theme! Minimal yellow-themed icon set.');
    });

    let switchToMonoCraftIconTheme = vscode.commands.registerCommand('multiBg.switchToMonoCraftIconTheme', () => {
        vscode.workspace.getConfiguration('workbench').update('iconTheme', 'mono-craft', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('⚫ Switched to Mono Craft Icon Theme! Minimal monochrome icon set.');
    });

    let switchToBlockCraftIconTheme = vscode.commands.registerCommand('multiBg.switchToBlockCraftIconTheme', () => {
        vscode.workspace.getConfiguration('workbench').update('iconTheme', 'block-craft', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🧱 Switched to Block Craft Icon Theme! Pixelated development icon set.');
    });

    let switchToPixelArtIconTheme = vscode.commands.registerCommand('multiBg.switchToPixelArtIconTheme', () => {
        vscode.workspace.getConfiguration('workbench').update('iconTheme', 'pixel-art', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('🎨 Switched to Pixel Art Icon Theme! Retro pixel art icon set.');
    });

    let switchToUltimateIconTheme = vscode.commands.registerCommand('multiBg.switchToUltimateIconTheme', () => {
        vscode.workspace.getConfiguration('workbench').update('iconTheme', 'ultimate-icon-theme', vscode.ConfigurationTarget.Global);
    });

    let switchToMinimalIconTheme = vscode.commands.registerCommand('multiBg.switchToMinimalIconTheme', () => {
        vscode.workspace.getConfiguration('workbench').update('iconTheme', 'minimal-icon-theme', vscode.ConfigurationTarget.Global);
    });

    let switchToRetroPixelIconTheme = vscode.commands.registerCommand('multiBg.switchToRetroPixelIconTheme', () => {
        vscode.workspace.getConfiguration('workbench').update('iconTheme', 'retro-pixel-icon-theme', vscode.ConfigurationTarget.Global);
    });

    context.subscriptions.push(switchToHacker, switchToPink, switchToBlue, switchToDark, switchToNord, switchToTokyo, switchToDracula, switchToSolarized, switchToGruvbox, switchToGentleSepia, switchToLowBlueNight, switchToSoftContrast, switchToDuskyRose, switchToHighReadability, switchToOneDarkPro, switchToDragonBallGokuEyeSafe, switchToAyuMirage, switchToCatppuccinMocha, switchToEyeComfort, switchToMoonlight, switchToNightOwl, switchToNebulaPro, switchToRoseParadise, switchToOmnitrixCode, switchToNeonDreamCode, switchToEclipseDark, switchToEclipseLight, switchToSpaceDark, switchToSpaceLight, switchToCosmicDark, switchToElectricDreams, switchToWinterIsComing, switchToCyberpunkNeon, switchToOceanBreeze, switchToNeonCyberpunk, switchToDeepSpaceDark, switchToDeepSpaceLight, switchToPinkKitty, switchToJapaneseWave, switchToCosmicConsole, switchToMidnightGlow, switchToCalmDark, switchToCalmLight, switchToPinkPixelCandyNebula, switchToSugarRushDark, switchToPixelLabDark, switchToNimbusMintLight, switchToCloudMintNight, switchToAmberLight, switchToAzureHC, switchToDarkRosebyte, switchToAurumDusk, switchToEmeraldMatrix, switchToEverNex, switchToLavenderGlow, switchToMidnightAbyss, switchToOceanAbyss, switchToSkyBreeze, switchToPastelCyberwave, switchToNeonOverdrive, switchToNuttyDark, switchToNuttyLight, switchToDarkGreenJungle, switchToBlackAndWhiteTV, switchToCanvasSoftLight, switchToCanvasIntelli, switchToCodeCanvasLight, switchToCodeCanvasIntelliLight, switchToMapleDark, switchToMapleLight, switchToNeonGenesisDark, switchToNeonOrchidProtocol, switchToSpiritwoodNight, switchToCandycoreNoir, switchToCoffeeSpaceCats, switchToCocoaEmber, switchToCyanDepths, switchToElementalSpectrum, switchToNothingOSGlyphNew, switchToNothingOSGray, switchToNothingOSLight, switchToNothingOSSpecial, switchToBadHacker, switchToSolsticeHibernal, switchToSolsticeEstival, switchToMikuCode, switchToMikuCodeFusion, switchToMikuCodeFusionLight, switchToMikuCodeLight, switchToSherwoodForestSummer, switchToKelpForestBold, switchToKelpForestItalic, switchToKelpForest, switchToCyberpink137, switchToVitesseDarkIconTheme, switchToVitesseLightIconTheme, switchToPixelCraftBlueIconTheme, switchToPixelCraftPurpleIconTheme, switchToPixelCraftYellowIconTheme, switchToMonoCraftIconTheme, switchToBlockCraftIconTheme, switchToPixelArtIconTheme, switchToUltimateIconTheme, switchToMinimalIconTheme, switchToRetroPixelIconTheme);
}

export function deactivate() {}