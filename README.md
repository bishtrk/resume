
# 🚀 DevResume - Modern Static Portfolio

A high-end, Bento-style developer portfolio. This project is configured to be a **Static Site**, meaning it can be hosted for free on GitHub Pages with no backend required.

## 🛠 How to Deploy to GitHub (The Easy Way)

This project includes a **GitHub Action** that builds and deploys your site automatically.

1. **Create a Repository**: Create a new, public repository on GitHub (e.g., `my-resume`).
2. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial resume"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - Go to your repository on GitHub.com.
   - Click **Settings** (top tab).
   - Click **Pages** (left sidebar).
   - Under **Build and deployment > Source**, change the dropdown to **GitHub Actions**.
4. **Watch it go live**:
   - Click the **Actions** tab at the top of your repo. 
   - You'll see a workflow named "Deploy to GitHub Pages" running.
   - Once it turns green, your site is live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## 💻 Local Development & Manual Build

If you want to generate the static files manually on your computer:

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Build the Static Site**:
   ```bash
   npm run build
   ```
3. **The Result**: 
   - A folder named `dist/` will be created. 
   - This `dist/` folder **IS** your static website. You can upload its contents to any host (Netlify, Vercel, or manual GitHub upload).

## 📄 Customizing your Resume
All your information is stored in `constants.ts`. Simply edit that file to update your experience, projects, and skills.
