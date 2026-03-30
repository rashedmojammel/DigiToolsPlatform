<div align="center">

<h1>🛠️ DigiTools</h1>

<p>A modern digital marketplace to discover, purchase, and manage premium tools — all in one place.</p>

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)
[![React Toastify](https://img.shields.io/badge/React--Toastify-FF6B6B?style=for-the-badge&logo=react&logoColor=white)](https://fkhadra.github.io/react-toastify/)
[![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)](https://www.json.org/)

</div>

---

## 📖 About

**DigiTools** is a clean and responsive digital product store built with React.js and Tailwind CSS. Browse a curated catalog of AI-powered tools, add them to your cart, and manage your purchases — all from a beautifully designed single-page interface.

---

## ✨ Features

### 🛒 Smart Shopping Cart
Add and remove products instantly with real-time cart count updates reflected in the navbar. State is managed directly in `App.jsx` and passed via props — no external state library needed.

### 🔔 Toast Notifications
Get instant feedback when adding a product to your cart with smooth, non-intrusive toast alerts powered by `react-toastify`. Toasts auto-dismiss after 2 seconds.

### 💳 Transparent Pricing
A clean 3-tier pricing section (Starter, Pro, Enterprise) with perfectly aligned buttons across all cards and a highlighted "Most Popular" badge on the Pro plan.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| React.js | UI & component architecture |
| JavaScript (ES6+) | App logic & interactivity |
| Tailwind CSS | Utility-first styling |
| DaisyUI | Pre-built UI components |
| React Toastify | Toast notifications |
| JSON | Product data source |

---

## 📦 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/digitools.git

# Install dependencies
npm install

# Start the dev server
npm run dev
```

---

## 📁 Project Structure

```
src/
├── assets/
│   └── Components/
│       ├── NavBar/
│       ├── DashboardCard/
│       ├── InfoCard/
│       ├── ProductSection/
│       │   ├── ProductSection.jsx
│       │   ├── AvailableProd.jsx
│       │   └── Cart.jsx
│       ├── PricingCard/
│       ├── GetStarted/
│       └── FooterSection/
├── App.jsx
└── main.jsx
public/
└── data.json
```