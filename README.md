# Presentation Slide Editor

<svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#fafafa; border-radius:8px; font-family:sans-serif;">
  <!-- Background Gradient -->
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4f46e5"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="rgba(0,0,0,0.2)"/>
    </filter>
  </defs>

  <!-- Hero Rectangle -->
  <rect x="0" y="0" width="800" height="400" fill="url(#bgGrad)" rx="12"/>

  <!-- Title -->
  <text x="50" y="80" fill="#fff" font-size="36" font-weight="700">Presentation Slide Editor</text>
  <text x="50" y="120" fill="#e0e7ff" font-size="18">
    Built with React + Konva + pptxgenjs
  </text>

  <!-- Mock UI Card -->
  <rect x="50" y="160" width="320" height="200" fill="#fff" rx="10" filter="url(#shadow)"/>
  <rect x="70" y="185" width="280" height="30" rx="5" fill="#f3f4f6"/>
  <rect x="70" y="225" width="200" height="18" rx="4" fill="#e5e7eb"/>
  <rect x="70" y="255" width="260" height="18" rx="4" fill="#e5e7eb"/>
  <rect x="70" y="285" width="180" height="18" rx="4" fill="#e5e7eb"/>

  <!-- PPTX Icon -->
  <g transform="translate(450,180)">
    <rect width="90" height="110" rx="12" fill="#ffb300"/>
    <text x="45" y="70" font-size="48" font-weight="700" fill="#fff" text-anchor="middle">PPT</text>
    <text x="45" y="95" font-size="14" fill="#fff" text-anchor="middle">EXPORT</text>
  </g>

  <!-- Feature Points -->
  <text x="450" y="140" fill="#fff" font-size="20" font-weight="600">Features</text>
  <text x="450" y="180" fill="#e0e7ff" font-size="16">• Visual slide editor</text>
  <text x="450" y="210" fill="#e0e7ff" font-size="16">• React + Zustand state</text>
  <text x="450" y="240" fill="#e0e7ff" font-size="16">• Export to .PPTX</text>
  <text x="450" y="270" fill="#e0e7ff" font-size="16">• Drag/Drop + Konva</text>

  <!-- Footer -->
  <text x="50" y="370" fill="#d1d5db" font-size="14">
    Open Source · MIT · GitHub.com/monapdx/presentation-slide-editor
  </text>
</svg>

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
