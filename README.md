
# Spiel Master - Deployment Guide

This guide explains how to run this project locally and deploy it to GitHub Pages.

## 🚀 Prerequisites

1.  **Node.js**: Ensure Node.js is installed and in your PATH.
2.  **API Key**: You need a valid Google Gemini API Key.

## 🛠️ Local Installation

1.  **Install Dependencies**
    ```cmd
    npm install
    ```
    *Note: If you encounter errors about `gh-pages`, run: `npm install gh-pages --save-dev`*

2.  **Setup Environment**
    Create a `.env.local` file in the root:
    ```
    GEMINI_API_KEY=your_api_key_here
    ```

3.  **Run Locally**
    ```cmd
    npm run dev
    ```

## 🌐 Deploying to GitHub Pages

### Option 1: Manual Deploy (from PC)
If you want to run `npm run deploy` from your computer:

1.  **Install Deploy Tool** (One-time setup):
    ```cmd
    npm install gh-pages --save-dev
    ```

2.  **Deploy**:
    ```cmd
    npm run deploy
    ```
    This will build the project and push the `dist` folder to the `gh-pages` branch.

### Option 2: Automatic Deploy (GitHub Actions)
This is the recommended way as it keeps your API keys secure.

1.  **Push Code**:
    ```cmd
    git add .
    git commit -m "Update"
    git push origin main
    ```

2.  **Configure Secret**:
    Go to GitHub Repo -> Settings -> Secrets and variables -> Actions.
    Add `API_KEY` with your Gemini Key.

3.  **Check Actions**:
    Go to the "Actions" tab in GitHub to see the build progress.



# npm install

# npm run build

# npx gh-pages -d dist