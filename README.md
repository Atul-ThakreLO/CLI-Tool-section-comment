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
sec "New Section"
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
   sec "Your Section Name"
   ```

## 🎯 Usage

### Basic Usage
```bash
sec "New Section"
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
sec <text> [options]

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
sec "Short Section" -w 60
```
```
////////////////////////////////////////////////////////////
////////////////// Short Section /////////////////////////
////////////////////////////////////////////////////////////
```

### Different Characters
```bash
sec "API Routes" -c "="
```
```
====================================================================================================
======================================== API Routes ===============================================
====================================================================================================
```

### Left Alignment
```bash
sec "Database Setup" -s left
```
```
////////////////////////////////////////////////////////////////////////////////////////////////////
// Database Setup ////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
```

### Right Alignment
```bash
sec "Helper Functions" -s right
```
```
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////// Helper Functions //
////////////////////////////////////////////////////////////////////////////////////////////////////
```

### Combined Options
```bash
sec "Authentication Module" -w 80 -c "#" -s center
```
```
################################################################################
######################### Authentication Module ##############################
################################################################################
```

### Skip Clipboard
```bash
sec "Debug Section" --no-clipboard
```

## 🛠️ Customization

### Change Command Name

Edit `package.json` to use a different command:

```json
{
  "bin": {
    "sec": "./section-comment.js",
    "comment": "./section-comment.js",
    "divider": "./section-comment.js"
  }
}
```

### Add Shell Aliases

Add to your `~/.bashrc` or `~/.zshrc`:

```bash
# Short aliases for different styles
alias sec-left='sec -s left'
alias sec-right='sec -s right'
alias sec-equals='sec -c "="'
alias sec-hash='sec -c "#"'
alias sec-short='sec -w 60'
```

## 🔧 Common Use Cases

### Code Organization
```bash
sec "Imports and Dependencies"
sec "Configuration"  
sec "Helper Functions"
sec "Main Logic"
sec "Export Statements"
```

### Project Sections
```bash
sec "Database Models" -c "="
sec "API Routes" -c "="
sec "Middleware" -c "="
sec "Error Handling" -c "="
```

### Debug Sections
```bash
sec "TODO: Refactor This" -s left
sec "FIXME: Bug in function" -s left
sec "DEBUG: Testing Section" --no-clipboard
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
sec "New Section"  # Done! ✨
```

**Perfect for:**
- 📝 Organizing large code files
- 📋 Creating readable section dividers  
- 🎯 Consistent comment formatting across projects
- ⚡ Saving time on repetitive tasks
- 👥 Team projects with consistent styling

---

**Made with ❤️ for developers who value clean, organized code.**