
# Spiel Master - Deployment Guide

This guide explains how to run this project locally and deploy it to GitHub Pages using your portable Node.js setup.

## 🚀 Prerequisites (CMD Setup)

Since you are using a portable version of Node.js, set your path first:

1. Open **VS Code**.
2. Open **Terminal** (CMD).
3. Run:
   ```cmd
   set PATH=C:\Users\jcruspero\Documents\node-v24.13.0-win-x64;%PATH%
   ```

---

## 🛠️ Local Installation

1. **Install Dependencies**
   ```cmd
   npm install
   ```

2. **Setup Environment Keys**
   - Create a file named `.env.local` in the root folder.
   - Add your Gemini API Key inside it:
     ```
     GEMINI_API_KEY=your_actual_api_key_here
     ```

3. **Run the App**
   ```cmd
   npm run dev
   ```

---

## 🌐 Deploying to GitHub Pages

### Step 1: Push Code
In your VS Code Terminal (CMD):

```cmd
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/Spiel-Master.git
git push -u origin main
```

### Step 2: Configure API Key (IMPORTANT)
Since `.env.local` is ignored for security, you must add the key to GitHub Secrets manually.

1. Go to your Repository on GitHub.
2. Click **Settings** > **Secrets and variables** > **Actions**.
3. Click **New repository secret**.
4. **Name:** `API_KEY`
5. **Secret:** Paste your Gemini API Key (starts with `AIza...`).
6. Click **Add secret**.

### Step 3: Trigger Deployment
1. Go to **Actions** tab.
2. If the build failed previously, click on it and select **Re-run jobs**.
3. Once green, go to **Settings** > **Pages**.
4. Set Branch to `gh-pages` and folder to `/ (root)`.
5. Save.
