<div align="center">
  <h1>🛠️ DigiTools</h1>
  <p>A modern digital marketplace to discover, purchase, and manage premium tools — all in one place.</p>
</div>

---

## 📖 About

DigiTools is a clean and responsive digital product store built with React.js and Tailwind CSS. Browse a curated catalog of AI-powered tools, add them to your cart, and manage your purchases — all from a beautifully designed single-page interface.

---

## 📸 Screenshots

**Hero Section**
![Hero]
<img width="1568" height="708" alt="image" src="https://github.com/user-attachments/assets/97ab3f16-cd93-4c6a-b67a-aa1e97ffde9e" />
**Product Catalog**
<img width="1568" height="709" alt="image" src="https://github.com/user-attachments/assets/1a2d04f8-146e-41ad-ab68-a99ce83a4557" />
**Shopping Cart**
<img width="1568" height="682" alt="image" src="https://github.com/user-attachments/assets/a0d64f09-6f7d-4a72-97ec-9a281dccf0eb" />
**Pricing Plans**
<img width="1568" height="617" alt="image" src="https://github.com/user-attachments/assets/fa5cb2fe-91f9-44df-aceb-e060f944dea6" />
**CTA & Footer**
<img width="1568" height="708" alt="image" src="https://github.com/user-attachments/assets/f394a1d9-f17d-4e95-9077-a667ed31995c" />


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
