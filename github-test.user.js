// ==UserScript==
// @name         GitHub Tampermonkey Test Script
// @namespace    http://tampermonkey.net/
// @version      1.0.5
// @description  A test script to demonstrate GitHub hosting for Tampermonkey scripts
// @author       Your Name
// @match        https://www.github.com/*
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// @updateURL    https://raw.githubusercontent.com/pamies96-commits/tampermonkey_test/main/github-test.user.js
// @downloadURL  https://raw.githubusercontent.com/pamies96-commits/tampermonkey_test/main/github-test.user.js
// @homepageURL  https://github.com/pamies96-commits/tampermonkey_test
// @supportURL   https://github.com/pamies96-commits/tampermonkey_test/issues
// ==/UserScript==

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        bannerColor: '#28a745',
        bannerTextColor: '#ffffff',
        version: '1.0.5'
    };

    // Create a banner at the top of GitHub pages
    function createBanner() {
        const banner = document.createElement('div');
        banner.id = 'tampermonkey-test-banner';
        banner.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background-color: ${CONFIG.bannerColor};
            color: ${CONFIG.bannerTextColor};
            padding: 10px 20px;
            text-align: center;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
            font-size: 14px;
            font-weight: 600;
            z-index: 9999;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            cursor: pointer;
        `;
        
        banner.innerHTML = `
            ✅ Tampermonkey Test Script Active (v${CONFIG.version}) - Click to hide
        `;

        // Click to hide
        banner.addEventListener('click', function() {
            banner.style.display = 'none';
        });

        // Add banner to page
        document.body.insertBefore(banner, document.body.firstChild);

        // Adjust body padding to prevent content from being hidden
        document.body.style.paddingTop = '40px';

        console.log(`%c[Tampermonkey Test] Script loaded successfully (v${CONFIG.version})`, 
                   'color: #28a745; font-weight: bold;');
    }

    // Add a custom button to the GitHub header (if present)
    function addCustomButton() {
        const header = document.querySelector('header');
        if (!header) return;

        const button = document.createElement('button');
        button.textContent = '🧪 Test Script Active';
        button.style.cssText = `
            margin-left: 10px;
            padding: 5px 12px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.2s;
        `;

        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = '#218838';
        });

        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = '#28a745';
        });

        button.addEventListener('click', () => {
            alert(`GitHub Tampermonkey Test Script\n\nVersion: ${CONFIG.version}\nStatus: Active\n\nThis confirms your script is running from GitHub!`);
        });

        // Try to add to header
        const headerNav = header.querySelector('nav') || header;
        headerNav.appendChild(button);
    }

    // Wait for page to be ready
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                createBanner();
                addCustomButton();
            });
        } else {
            createBanner();
            addCustomButton();
        }
    }

    // Run the script
    init();

    // Log to console for verification
    console.log('%c════════════════════════════════════════', 'color: #28a745;');
    console.log('%c GitHub Tampermonkey Test Script', 'color: #28a745; font-size: 16px; font-weight: bold;');
    console.log('%c════════════════════════════════════════', 'color: #28a745;');
    console.log('Version:', CONFIG.version);
    console.log('Running on:', window.location.href);
    console.log('Script successfully loaded from GitHub!');
    console.log('%c════════════════════════════════════════', 'color: #28a745;');

})();
