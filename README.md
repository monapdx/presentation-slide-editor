# Presentation Slide Editor

A lightweight, browser-based slide editor built with React and Vite.
Design slides visually in your browser and export them as `.pptx` files — no backend required.

Live Demo: https://monapdx.github.io/presentation-slide-editor/

---

## ✨ Features

* Drag-and-position slide elements
* Canvas-based editing interface
* Client-side PowerPoint (.pptx) export
* No server or database required
* Deployable as a static site (GitHub Pages ready)

---

## 🧠 Tech Stack

* React
* Vite
* JavaScript
* Client-side PPTX generation
* GitHub Pages deployment

---

## 🚀 Getting Started (Local Development)

Clone the repository:

```bash
git clone https://github.com/monapdx/presentation-slide-editor.git
cd presentation-slide-editor
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in your terminal.

---

## 🏗 Build for Production

```bash
npm run build
```

The production-ready output will be generated in the `dist/` directory.

---

## 🌐 Deployment (GitHub Pages)

This project is configured for GitHub Pages using GitHub Actions.

Key configuration:

```js
// vite.config.js
base: "/presentation-slide-editor/"
```

When pushing to `main`, the GitHub Action builds the project and deploys the contents of `dist/` to GitHub Pages automatically.

Live URL format:

```
https://<username>.github.io/presentation-slide-editor/
```

---

## 📦 Project Structure

```
src/
 ├── App.jsx
 ├── CanvasEditor.jsx
 ├── main.jsx
 ├── store.js
 ├── exportPptx.js
 ├── useImage.js
 └── styles.css

index.html
vite.config.js
package.json
```

---

## 🎯 Project Goals

This project demonstrates:

* Client-side document generation
* Canvas-style editing interfaces
* Static-site deployment workflows
* Modern React + Vite setup
* Browser-based creative tooling

---

## 🛠 Future Improvements

* Multi-slide management
* Text styling controls
* Image upload & resizing tools
* Slide templates
* Autosave functionality
* Drag-and-drop UI refinements

---

## 📄 License

MIT License.

---

## 🙌 Contributions

Pull requests and suggestions are welcome.
If you build something interesting with it, feel free to share.

---
