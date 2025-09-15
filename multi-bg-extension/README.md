# VSCode Ultimate Themes Pack

[![VS Code Marketplace](https://img.shields.io/badge/VS%20Code-Marketplace-blue)](https://marketplace.visualstudio.com/publishers/SecureDev01)
[![Version](https://img.shields.io/badge/version-0.0.4-green)](https://marketplace.visualstudio.com/items?itemName=SecureDev01.vscode-multi-themes)
[![License](https://img.shields.io/badge/license-MIT-blue)](https://github.com/codewithevilxd/vscode-multi-themes/blob/main/LICENSE)

A comprehensive collection of **9 professionally designed themes** for Visual Studio Code, featuring stunning dark and light color schemes with rich syntax highlighting. Perfect for developers who want to enhance their coding experience with beautiful, eye-catching themes.

## ✨ Features

### 🎨 **9 Professional Themes**
- **🚀 Hacker Theme**: Classic dark theme with black background and vibrant green text for a cyberpunk aesthetic
- **🌸 Pink Theme**: Beautiful light theme with pastel pink background for a fun, vibrant coding experience
- **🌊 Blue Theme**: Elegant dark theme with ocean blue background for a cool, professional feel
- **🌙 Enhanced Dark Theme**: Modern dark theme with comprehensive color coverage and rich syntax highlighting
- **❄️ Nord Dark Theme**: Clean and minimal Arctic-inspired theme with soft blue and gray tones
- **🌃 Tokyo Night Theme**: Beautiful dark theme with purple and blue tones inspired by Tokyo's night skyline
- **🧛 Dracula Pro Theme**: Sophisticated dark theme with purple accents for an elegant, mysterious atmosphere
- **☀️ Solarized Dark Theme**: Scientifically calibrated theme optimized for readability and eye comfort
- **🌾 Gruvbox Dark Theme**: Warm, earthy theme with retro color palette for a cozy coding environment

### ⚡ **Quick Theme Switching**
- Instant theme switching via Command Palette
- Keyboard shortcuts support
- One-click theme selection
- Persistent theme preferences

### 🎯 **Rich Syntax Highlighting**
- Carefully crafted color schemes for all programming languages
- Optimized contrast ratios for better readability
- Consistent highlighting across all themes
- Support for modern language features

## 📦 Installation

### From VS Code Marketplace (Recommended)
1. Open Visual Studio Code
2. Press `Ctrl+Shift+X` (or `Cmd+Shift+X` on Mac) to open Extensions
3. Search for "VSCode Ultimate Themes Pack"
4. Click **Install**
5. Reload VS Code if prompted

### Manual Installation
1. Download the latest `.vsix` file from [Releases](https://github.com/codewithevilxd/vscode-multi-themes/releases)
2. In VS Code, press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
3. Type "Extensions: Install from VSIX" and select the downloaded file
4. Reload VS Code

## 🚀 Usage

### Quick Theme Switching (Recommended)
1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open Command Palette
2. Type "Switch to" and select your desired theme:
   - `Switch to Hacker Theme`
   - `Switch to Pink Theme`
   - `Switch to Blue Theme`
   - `Switch to Enhanced Dark Theme`
   - `Switch to Nord Dark Theme`
   - `Switch to Tokyo Night Theme`
   - `Switch to Dracula Pro Theme`
   - `Switch to Solarized Dark Theme`
   - `Switch to Gruvbox Dark Theme`

### Manual Selection
1. Go to **File** → **Preferences** → **Color Theme** (or **Settings** → **Color Theme**)
2. Select your preferred theme from the dropdown list
3. The theme will be applied immediately

### Keyboard Shortcuts
You can assign custom keyboard shortcuts to theme switching commands:
1. Press `Ctrl+K Ctrl+S` to open Keyboard Shortcuts
2. Search for "Switch to" commands
3. Assign your preferred key combinations

## 🎨 Theme Gallery

### Dark Themes

#### 🚀 Hacker Theme
- **Background**: Pure black (#000000)
- **Text**: Bright green (#00ff00)
- **Comments**: Dark green (#00aa00)
- **Strings**: Yellow (#ffff00)
- **Keywords**: Red (#ff0000)
- **Best for**: Cyberpunk enthusiasts, terminal lovers

#### 🌊 Blue Theme
- **Background**: Deep ocean blue (#001122)
- **Text**: Light blue (#aaddff)
- **Comments**: Medium blue (#5588aa)
- **Strings**: Cyan (#00ffff)
- **Keywords**: Bright blue (#0088ff)
- **Best for**: Professional developers, calm environments

#### 🌙 Enhanced Dark Theme
- **Background**: Rich dark gray (#1e1e1e)
- **Text**: Light gray (#d4d4d4)
- **Comments**: Medium gray (#6a9955)
- **Strings**: Orange (#ce9178)
- **Keywords**: Blue (#569cd6)
- **Best for**: Modern development, comprehensive syntax highlighting

#### ❄️ Nord Dark Theme
- **Background**: Arctic blue-gray (#2e3440)
- **Text**: Clean white (#d8dee9)
- **Comments**: Soft gray (#616e87)
- **Strings**: Fresh green (#a3be8c)
- **Keywords**: Soft blue (#81a1c1)
- **Best for**: Minimalists, eye comfort, Scandinavian design

#### 🌃 Tokyo Night Theme
- **Background**: Deep purple-blue (#1a1b26)
- **Text**: Soft blue (#c0caf5)
- **Comments**: Muted purple (#565f89)
- **Strings**: Bright green (#9ece6a)
- **Keywords**: Purple (#bb9af7)
- **Best for**: Night owls, urban aesthetics, purple lovers

#### 🧛 Dracula Pro Theme
- **Background**: Dark purple (#282a36)
- **Text**: Bright white (#f8f8f2)
- **Comments**: Gray (#6272a4)
- **Strings**: Yellow (#f1fa8c)
- **Keywords**: Pink (#ff79c6)
- **Best for**: Gothic enthusiasts, purple themes, Dracula fans

#### ☀️ Solarized Dark Theme
- **Background**: Dark blue-gray (#002b36)
- **Text**: Light gray (#93a1a1)
- **Comments**: Medium gray (#586e75)
- **Strings**: Cyan (#2aa198)
- **Keywords**: Green (#859900)
- **Best for**: Scientific accuracy, optimal contrast, accessibility

#### 🌾 Gruvbox Dark Theme
- **Background**: Warm brown (#282828)
- **Text**: Cream (#ebdbb2)
- **Comments**: Olive (#928374)
- **Strings**: Bright green (#b8bb26)
- **Keywords**: Red-orange (#fb4934)
- **Best for**: Retro computing, warm colors, Linux enthusiasts

### Light Themes

#### 🌸 Pink Theme
- **Background**: Soft pink (#fff0f5)
- **Text**: Dark gray (#2d2d2d)
- **Comments**: Medium gray (#6a9955)
- **Strings**: Purple (#ce9178)
- **Keywords**: Blue (#569cd6)
- **Best for**: Creative coders, pastel lovers, light environments

## 🔧 Development

### Prerequisites
- **Node.js**: 14.x or higher
- **VS Code**: 1.75.0 or higher
- **TypeScript**: 4.x or higher

### Setup
```bash
# Clone the repository
git clone https://github.com/codewithevilxd/vscode-multi-themes.git
cd vscode-multi-themes

# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Package for distribution
npx @vscode/vsce package
```

### Development Commands
```bash
# Watch mode for development
npm run watch

# Compile TypeScript
npm run compile

# Package extension
npx @vscode/vsce package

# Publish to marketplace
npx @vscode/vsce publish
```

### Project Structure
```
vscode-multi-themes/
├── src/
│   └── extension.ts          # Main extension logic
├── themes/                   # Theme definition files
│   ├── hacker-color-theme.json
│   ├── pink-color-theme.json
│   ├── blue-color-theme.json
│   ├── dark-color-theme.json
│   ├── nord-dark-theme.json
│   ├── tokyo-night-theme.json
│   ├── dracula-pro-theme.json
│   ├── solarized-dark-theme.json
│   └── gruvbox-dark-theme.json
├── out/                     # Compiled JavaScript
├── package.json             # Extension manifest
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## 📋 Requirements

- **Visual Studio Code**: ^1.75.0 or higher
- **Platform**: Windows 10+, macOS 10.15+, Linux
- **Memory**: 100MB free RAM
- **Storage**: 5MB free disk space

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute
- 🐛 **Report Bugs**: Found an issue? [Open an issue](https://github.com/codewithevilxd/vscode-multi-themes/issues)
- 💡 **Suggest Features**: Have an idea? [Start a discussion](https://github.com/codewithevilxd/vscode-multi-themes/discussions)
- 🎨 **Create Themes**: Design new themes and submit a PR
- 📖 **Improve Documentation**: Help make our docs better
- 🌟 **Star the Repo**: Show your support!

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-theme`
3. **Make** your changes and test thoroughly
4. **Commit** your changes: `git commit -m 'Add amazing new theme'`
5. **Push** to your branch: `git push origin feature/amazing-theme`
6. **Open** a Pull Request

### Guidelines
- Follow the existing theme structure and naming conventions
- Test your themes in multiple programming languages
- Ensure proper contrast ratios for accessibility
- Update documentation for any new features
- Add screenshots for new themes

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](../LICENSE) file for details.

**TL;DR**: You can use, modify, and distribute this project freely, but please include the original license.

## 🙏 Acknowledgments

- **VS Code Community**: For inspiration and feedback
- **Theme Designers**: For creating beautiful color schemes
- **Contributors**: For their valuable contributions
- **Open Source Community**: For making development tools accessible

### Special Thanks
- Inspired by popular VS Code themes like Dracula, Nord, and Tokyo Night
- Thanks to all beta testers and early adopters
- Gratitude to the VS Code team for an amazing platform

## 📞 Support

### Getting Help
- 📧 **Email**: [support@securedev01.com](mailto:support@securedev01.com)
- 💬 **GitHub Issues**: [Report bugs or request features](https://github.com/codewithevilxd/vscode-multi-themes/issues)
- 💭 **GitHub Discussions**: [Ask questions and share ideas](https://github.com/codewithevilxd/vscode-multi-themes/discussions)
- 📖 **Documentation**: [Read the full docs](https://github.com/codewithevilxd/vscode-multi-themes/wiki)

### Common Issues
- **Theme not applying**: Try reloading VS Code (`Ctrl+Shift+P` → "Developer: Reload Window")
- **Commands not showing**: Ensure the extension is properly installed and enabled
- **Performance issues**: Some themes may render differently on older hardware

## 📊 Statistics

- **📦 Downloads**: 1,000+ (Marketplace)
- **⭐ Stars**: 50+ (GitHub)
- **🎨 Themes**: 9 professional themes
- **🌍 Languages**: English
- **🔧 Compatibility**: VS Code 1.75.0+

## 🚀 Roadmap

### Upcoming Features
- [ ] **More Themes**: Additional color schemes based on user requests
- [ ] **Custom Theme Builder**: GUI tool for creating custom themes
- [ ] **Theme Variants**: Light/dark variants for existing themes
- [ ] **Accessibility Improvements**: Better contrast and readability options
- [ ] **Theme Presets**: Curated theme combinations for different use cases

### Recent Updates
- ✅ **v0.0.4**: Added 5 new professional themes (Nord, Tokyo Night, Dracula Pro, Solarized, Gruvbox)
- ✅ **v0.0.3**: Enhanced Pink theme with improved color palette
- ✅ **v0.0.2**: Fixed activation events and improved packaging
- ✅ **v0.0.1**: Initial release with 4 core themes

---

## 🎉 Enjoy Coding with Style!

**VSCode Ultimate Themes Pack** - Transform your coding experience with beautiful, professional themes designed for developers by developers.

### Quick Start
1. Install the extension
2. Open Command Palette (`Ctrl+Shift+P`)
3. Type "Switch to" and pick your favorite theme
4. Happy coding! 🚀

---

**Made with ❤️ by [SecureDev01](https://github.com/codewithevilxd)**