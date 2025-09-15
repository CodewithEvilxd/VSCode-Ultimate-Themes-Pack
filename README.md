# Privacy Guard Plus Extension

A VS Code extension that automatically detects recording software and masks API keys and secrets in code to protect secrets during live coding sessions.

## Features

- **Automatic Detection**: Monitors running processes to detect popular recording software like OBS Studio, Streamlabs, and XSplit.
- **Smart Secret Detection**: Automatically detects and masks high-entropy API keys and secrets in both `.env` files and code files using advanced detection rules
- **Granular .env Control**: In `.env` files, by default only masks detected secrets (keeps regular values like names, ports visible). Optionally, enable "Hide all environment variables" to mask all values
- **Manual Toggle**: Status bar button to manually enable/disable privacy guard
- **Configurable**: Customize detection settings and recording software list

## How It Works

1. **Process Detection**: The extension periodically scans running processes for known recording applications
2. **Auto-Activation**: When recording software is detected, it automatically enables privacy guard
3. **Secret Masking**:
   - Automatically detects and masks high-entropy API keys and secrets across both `.env` files and code files
   - `.env` files: By default, only detected secrets are masked. Use the status bar menu to enable "Hide all environment variables" and mask all values
   - Code files: High-entropy secrets assigned to sensitive identifiers are detected and only the secret substring is masked
4. **Visual Feedback**: Status bar shows current privacy guard state with eye icons

## Commands

- `Privacy Guard: Menu` (status bar) — opens a menu with:
  - Toggle Privacy Guard (on/off)
  - Hide all environment variables (checkbox)
- `Toggle Privacy Guard` - Manually toggle privacy guard on/off
- `Enable Privacy Guard` - Force enable privacy guard
- `Disable Privacy Guard` - Force disable privacy guard

## Configuration

Access these settings via VS Code Settings (search for "Privacy Guard"):

- `privacyGuard.autoDetect` (default: `true`) - Automatically detect recording software
- `privacyGuard.detectionInterval` (default: `5000`) - Detection interval in milliseconds
- `privacyGuard.recordingProcesses` - List of process names to detect as recording software (exact match, case-insensitive; `.exe`/`.app` stripped)

Default detected processes (tight to avoid false positives):
- OBS Studio (`obs`, `obs64`)
- Streamlabs (`streamlabs obs`, `streamlabs desktop`)
- XSplit (`xsplit`)

## Usage

1. Install and activate the extension
2. Open any `.env` file
3. Start your recording software (OBS, etc.)
4. The extension will automatically detect it and mask detected secrets in your files
5. Use the status bar button (eye icon) to open the menu and optionally enable "Hide all environment variables" for complete .env masking

## Development

To run the extension in development:

1. Clone this repository
2. Run `npm install`
3. Run `npm run compile` 
4. Press F5 to launch Extension Development Host
5. Open a `.env` file to test masking functionality

## File Types Supported

The extension automatically masks content in files with these patterns:
- `.env`
- `.env.local`
- `.env.development`
- `.env.production`
- `.env.test`
- Any file containing `.env.` in the name

Additionally, high-entropy secret detection runs across all open text documents to catch API keys and secrets in code assignments.

## Secret Detection Rules (Code)

The secret detector focuses on assignments where the assigned identifier contains one of: `secret`, `token`, `api[_.-]?key`, `credential`, or `auth`. It considers assignment tokens `:`, `=`, `:=`, `=>`, `,`, `(`, and `<-`, covering patterns such as:

- Variable/property assignments: `api_key = "..."`, `secret: value`, `token := value`, `object['auth'] = "..."`, `{"credential": "..."}`
- Function patterns: `o.set("auth", "...")`, `set_apikey("...")`

Values must pass high-entropy checks with advanced detection:
- Match a constrained charset/length with specific backslash rules
- Shannon entropy ≥ 3 and contain ≥ 2 digits
- Pass value and context banlists to reduce false positives

Masking is visual-only and targets only the matched secret substring.

## Privacy & Security

- The extension only scans process names, not process content
- No sensitive data is transmitted or stored
- Masking is visual only - your actual file content remains unchanged
- Works entirely locally within VS Code

## Status Bar

The status bar shows:
- `👁 Recording` - Privacy guard OFF
- `🙈 Recording` - Privacy guard ON (with warning background)

Click the status bar item to toggle privacy guard manually.
