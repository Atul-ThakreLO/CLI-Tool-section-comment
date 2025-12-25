# Section Comment Generator

A fast and efficient CLI tool for generating beautifully formatted section comments in your code. No more manually typing repetitive comment blocks - just run one command and get professional-looking section dividers instantly copied to your clipboard.

## ✨ Features

- 🎯 **One command** → Instant formatted comments
- 📋 **Auto clipboard copy** → Paste directly into your code
- 🎨 **Multiple styles** → Center, left, or right alignment
- ⚙️ **Fully customizable** → Width, characters, and alignment
- 🚀 **Cross-platform** → Works on Linux, macOS, and Windows
- ⚡ **Lightning fast** → Built with Node.js for speed

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Make executable and install globally
chmod +x section-comment.js
npm link

# Use anywhere
LG-Print "New Section"
```

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm

### Setup

1. **Clone or create the project**

   ```bash
   mkdir ~/tools/section-comment-tool
   cd ~/tools/section-comment-tool
   ```

2. **Initialize and install dependencies**

   ```bash
   npm init -y
   npm install clipboardy commander
   ```

3. **Save the script** as `section-comment.js` (or `sec.js`)

4. **Make executable and install globally**

   ```bash
   chmod +x section-comment.js
   npm link
   ```

5. **Start using**
   ```bash
   LG-Print "Your Section Name"
   ```

## 🎯 Usage

### Basic Usage

```bash
LG-Print "New Section"
```

**Output:**

```
////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////// New Section ////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

✓ Copied to clipboard!
```

### Advanced Options

```bash
LG-Print <text> [options]

Arguments:
  text                    Text for the section comment

Options:
  -V, --version          Display version number
  -w, --width <number>   Width of the comment block (default: 100)
  -c, --char <char>      Character to use for borders (default: /)
  -s, --style <style>    Text alignment: center|left|right (default: center)
  --no-clipboard         Don't copy to clipboard
  -h, --help            Display help information
```

## 🎨 Examples

### Different Widths

```bash
LG-Print "Short Section" -w 60
```

```
////////////////////////////////////////////////////////////
////////////////// Short Section /////////////////////////
////////////////////////////////////////////////////////////
```

### Different Characters

```bash
LG-Print "API Routes" -c "="
```

```
====================================================================================================
======================================== API Routes ===============================================
====================================================================================================
```

### Left Alignment

```bash
LG-Print "Database Setup" -s left
```

```
////////////////////////////////////////////////////////////////////////////////////////////////////
// Database Setup ////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
```

### Right Alignment

```bash
LG-Print "Helper Functions" -s right
```

```
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////// Helper Functions //
////////////////////////////////////////////////////////////////////////////////////////////////////
```

### Combined Options

```bash
LG-Print "Authentication Module" -w 80 -c "#" -s center
```

```
################################################################################
######################### Authentication Module ##############################
################################################################################
```

### Skip Clipboard

```bash
LG-Print "Debug Section" --no-clipboard
```

## 🛠️ Customization

### Change Command Name

Edit `package.json` to use a different command:

```json
{
  "bin": {
    "LG-Print": "./section-comment.js",
    "comment": "./section-comment.js",
    "divider": "./section-comment.js"
  }
}
```

### Add Shell Aliases

Add to your `~/.bashrc` or `~/.zshrc`:

```bash
# Short aliases for different styles
alias sec-left='LG-Print -s left'
alias sec-right='LG-Print -s right'
alias sec-equals='LG-Print -c "="'
alias sec-hash='LG-Print -c "#"'
alias sec-short='LG-Print -w 60'
```

## 🔧 Common Use Cases

### Code Organization

```bash
LG-Print "Imports and Dependencies"
LG-Print "Configuration"
LG-Print "Helper Functions"
LG-Print "Main Logic"
LG-Print "Export Statements"
```

### Project Sections

```bash
LG-Print "Database Models" -c "="
LG-Print "API Routes" -c "="
LG-Print "Middleware" -c "="
LG-Print "Error Handling" -c "="
```

### Debug Sections

```bash
LG-Print "TODO: Refactor This" -s left
LG-Print "FIXME: Bug in function" -s left
LG-Print "DEBUG: Testing Section" --no-clipboard
```

## 🐛 Troubleshooting

### Command Not Found

```bash
# Check if npm global bin is in PATH
npm config get prefix
echo $PATH

# Reinstall
npm unlink && npm link
```

### Clipboard Not Working

- **Linux**: Install `xclip` or `xsel`
  ```bash
  sudo apt install xclip
  # or
  sudo apt install xsel
  ```
- **macOS**: Should work out of the box
- **Windows**: Should work out of the box

### Permission Denied

```bash
chmod +x section-comment.js
```

### Module Not Found

```bash
npm install clipboardy commander
```

## 📁 Project Structure

```
section-comment-tool/
├── package.json           # Project configuration
├── section-comment.js     # Main script
├── README.md             # This file
└── node_modules/         # Dependencies
```

## 🤝 Contributing

Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

MIT License - Feel free to use this in your projects!

## 🎯 Why This Tool?

**Before:**

```javascript
// Manually typing this every time... 😫
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                        New Section                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
```

**After:**

```bash
LG-Print "New Section"  # Done! ✨
```

**Perfect for:**

- 📝 Organizing large code files
- 📋 Creating readable section dividers
- 🎯 Consistent comment formatting across projects
- ⚡ Saving time on repetitive tasks
- 👥 Team projects with consistent styling

---

**Made with ❤️ for developers who value clean, organized code.**
