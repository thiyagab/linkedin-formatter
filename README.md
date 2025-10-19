# LinkedIn AI Post Formatter - Chrome Extension

## Overview

**LinkedIn AI Post Formatter** is a powerful Chrome extension that enhances your LinkedIn posting experience by injecting a customizable formatting toolbar directly into the LinkedIn post composer. It supports Unicode-based text styling (bold, italic, monospace, etc.), list formatting with customizable bullets, and AI-powered text polishing using providers like OpenAI, Google Gemini, or OpenRouter. The toolbar appears automatically when you select text in the LinkedIn post editor.

This extension uses Unicode Mathematical Alphanumeric Symbols for formatting, ensuring compatibility across platforms like LinkedIn, Twitter/X, Instagram, and more. It also handles reversal of existing Unicode formatting back to normal text.

**Version:** 7.0 (Content Script) / 1.4 (Manifest)

## Features

- **Text Formatting Styles:**
  - **Bold (𝐁):** Converts selected text to bold Unicode characters.
  - **Italic (𝐼):** Applies italic Unicode styling.
  - **Bold Italic (𝑩𝑰):** Combines bold and italic effects.
  - **Monospace (𝙼):** Renders text in monospace (code-like) Unicode.

- **List Formatting (☰ Dropdown):**
  - Add bullets to selected multi-line text:
    - • Standard bullet
    - 👉 Pointer arrow
    - ✅ Checkmark (success)
    - ✔ Simple check

- **AI Text Polishing (✨):**
  - Select text and click to polish for better grammar, flow, and clarity.
  - Sticks closely to original meaning; appends 3 relevant hashtags.
  - Supports multiple AI providers:
    - OpenAI (e.g., GPT-3.5-turbo)
    - Google Gemini (e.g., gemini-1.5-flash)
    - OpenRouter (e.g., Llama models)
  - Configure via settings (requires API key).

- **Smart Behaviors:**
  - Automatically detects and reverses existing Unicode formatting.
  - Fallback to clipboard copy if direct insertion fails.
  - Non-intrusive notifications for feedback.
  - Robust toolbar injection handles LinkedIn's dynamic overlays.

- **Settings (🔧):**
  - Configure AI provider, API key, and model name.
  - Stored locally in browser storage.

## Installation (Developer Mode)

1. Download or clone this repository and extract/unzip to a folder (e.g., `linkedin-formatter`).
 
2. Open Chrome and navigate to `chrome://extensions/`.

3. Enable **Developer mode** (toggle in the top-right corner).

4. Click **Load unpacked** and select the extracted folder.

5. The extension icon (if added) will appear in your toolbar, but it's primarily a content script—no popup needed.
 
6. Visit [LinkedIn.com](https://www.linkedin.com), click **Start a post** (or equivalent), and the toolbar should appear above the editor.
 
**Note:** Reload the extension in `chrome://extensions/` after any file changes.

## Usage

1. **Access the Toolbar:**
   - Log in to LinkedIn.
   - Click **Start a post**, **Write a post**, or open the post composer (e.g., from feed, profile, or messaging).
   - The toolbar (gray bar with buttons) injects automatically above the text editor when text is selected.
 
2. **Basic Formatting:**
   - Type or paste text into the LinkedIn editor.
   - Select the text you want to format.
   - Click a style button (e.g., 𝐁 for bold). The selected text updates in place.
   - If already formatted, clicking again reverts to normal text.

3. **List Formatting:**
   - Select multi-line text.
   - Click the ☰ (menu) button to open the dropdown.
   - Choose a bullet style; lines get prefixed (removes existing bullets).

4. **AI Polishing:**
   - Select text in the editor.
   - Click ✨ (Polish).
   - If not configured, open settings (🔧) first:
     - Choose provider (OpenAI/Gemini/OpenRouter).
     - Enter your API key (get from respective provider dashboards).
     - Optionally set model (defaults provided).
     - Click **Save**.
   - Polished text replaces selection; includes 3 hashtags at the end.
   - **Costs:** AI calls consume API credits—use responsibly.

5. **Troubleshooting:**
   - If toolbar doesn't appear: Refresh LinkedIn, ensure you're in a post composer, or check console (F12) for logs.
   - For AI errors: Verify API key and internet connection.

## Supported Platforms

- **Primary:** LinkedIn post composer (detects ql-editor dynamically).
- **Compatibility:** Unicode works on Twitter/X, Instagram, Facebook, Discord, etc.
- **Limitations:** Not all fonts/devices render Unicode perfectly; screen readers may ignore styling.

## API Configuration

- **OpenAI:** Get key from [platform.openai.com](https://platform.openai.com/api-keys). Default model: `gpt-3.5-turbo`.
- **Gemini:** Key from [aistudio.google.com](https://aistudio.google.com/app/apikey). Default: `gemini-1.5-flash`.
- **OpenRouter:** Key from [openrouter.ai](https://openrouter.ai/keys). Default: `meta-llama/llama-3.1-8b-instruct:free` (free tier available).

**Privacy Note:** API keys are stored locally; requests go directly to providers (no proxy).

## Files

- `manifest.json`: Extension configuration (v3 manifest, permissions for LinkedIn/AI APIs).
- `content.js`: Main script—handles injection, formatting, AI calls (v7.0).
- `styles.css`: Toolbar styling (minimal, inline mostly).
- `README.md`: This file.

## Notes & Caveats

- **Unicode Limitations:** Styling is visual only (not semantic HTML). Search engines/screen readers treat as plain text. Some characters (e.g., bold lowercase) may not render everywhere.
- **LinkedIn Changes:** If toolbar stops appearing, LinkedIn updated their DOM. Check console logs and update selectors in `content.js` (e.g., `.ql-editor`).
- **AI Usage:** Polishing may incur costs; test with free tiers. Prompts are fixed—customize in code if needed.
- **Security:** Extension requests minimal permissions. Review `manifest.json` before loading.
- **Development:** Logs prefixed with "LinkedIn AI Post Formatter" in console. No build step—edit files directly.
- **Updates:** For production, consider publishing to Chrome Web Store (add icons, descriptions).

## Contributing

Fork the repo, make changes, and submit a PR. Focus on new styles, AI providers, or robustness.

## License

MIT License—feel free to use/modify.

---

Built with ❤️ for better LinkedIn posts. Questions? Check console or update via developer tools.
