# Tampermonkey GitHub Test Script

A simple test script to demonstrate how to host and auto-update Tampermonkey scripts via GitHub.

## What This Script Does

When installed, this script will:
- ✅ Add a green banner at the top of any GitHub page
- 🧪 Add a test button to the GitHub header
- 📝 Log confirmation messages to the browser console
- 🔄 Support automatic updates from GitHub

## Installation

### Quick Install
1. Install [Tampermonkey](https://www.tampermonkey.net/) extension in your browser
2. Click this link: **[Install Script](https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/github-test.user.js)**
3. Click "Install" when Tampermonkey prompts you

### Manual Install
1. Copy the contents of `github-test.user.js`
2. Open Tampermonkey dashboard
3. Click "+" to create new script
4. Paste the code
5. Save (Ctrl+S or Cmd+S)

## Setup Instructions for Your Repository

1. **Create a new GitHub repository**
   ```bash
   mkdir tampermonkey-scripts
   cd tampermonkey-scripts
   git init
   ```

2. **Add the script file**
   - Copy `github-test.user.js` to your repository
   - **Important**: Update these lines in the script:
     ```javascript
     // @updateURL    https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/github-test.user.js
     // @downloadURL  https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/github-test.user.js
     // @homepageURL  https://github.com/YOUR_USERNAME/YOUR_REPO
     // @supportURL   https://github.com/YOUR_USERNAME/YOUR_REPO/issues
     ```
     Replace `YOUR_USERNAME` and `YOUR_REPO` with your actual GitHub username and repository name.

3. **Commit and push**
   ```bash
   git add github-test.user.js README.md
   git commit -m "Add test Tampermonkey script"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

4. **Test the installation**
   - Navigate to: `https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/github-test.user.js`
   - Your browser should prompt you to install the script via Tampermonkey
   - Visit github.com to see the script in action!

## Testing Auto-Updates

To test the auto-update feature:

1. **Update the version number** in your script:
   ```javascript
   // @version      1.0.1  // Changed from 1.0.0
   ```

2. **Make a visible change** (e.g., change banner color):
   ```javascript
   bannerColor: '#0366d6',  // Changed from '#28a745'
   ```

3. **Commit and push** to GitHub

4. **Trigger update check** in Tampermonkey:
   - Open Tampermonkey dashboard
   - Go to "Installed userscripts"
   - Click "Last updated" column to check for updates
   - Or wait for automatic check (default: every 24 hours)

## How It Works

### Direct Installation
- Tampermonkey detects `.user.js` files from URLs
- When you click a raw GitHub URL ending in `.user.js`, Tampermonkey intercepts it
- The script headers tell Tampermonkey how to install and configure it

### Auto-Updates
- `@updateURL` points to the raw script on GitHub
- `@downloadURL` provides the download location
- Tampermonkey periodically checks the `@version` number
- If the version on GitHub is newer, it prompts to update

### Version Control Benefits
- Track changes over time with git history
- Accept contributions via pull requests
- Users can report issues on GitHub
- Easy to maintain and distribute

## Script Headers Explained

```javascript
// @name         - Display name in Tampermonkey
// @namespace    - Unique identifier (prevent conflicts)
// @version      - Semantic versioning for updates
// @description  - What the script does
// @author       - Script creator
// @match        - Which pages the script runs on
// @icon         - Icon displayed in Tampermonkey
// @grant        - Permissions requested (none = no special permissions)
// @updateURL    - Where to check for updates
// @downloadURL  - Where to download updates
// @homepageURL  - Link to script homepage
// @supportURL   - Where to report issues
```

## Customization

Feel free to modify:
- **Banner color**: Change `bannerColor` in CONFIG
- **Version number**: Update `@version` header
- **Target sites**: Modify `@match` patterns
- **Functionality**: Add your own features!

## Troubleshooting

**Script not installing:**
- Ensure the filename ends with `.user.js`
- Check that the URL is the "raw" GitHub URL
- Verify Tampermonkey is installed and enabled

**Updates not working:**
- Check that `@updateURL` and `@downloadURL` are correct
- Verify the version number is higher than installed version
- Try manually checking for updates in Tampermonkey

**Script not running:**
- Check the `@match` patterns include your target URL
- Open browser console (F12) to check for errors
- Ensure Tampermonkey is enabled for the site

## License

MIT License - Feel free to use and modify!

## Contributing

Pull requests welcome! Please update the version number and add a description of your changes.
