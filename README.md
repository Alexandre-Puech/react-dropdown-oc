# react-dropdown-oc

## 📖 Présentation (Français)

**react-dropdown-oc** est une bibliothèque React légère et personnalisable pour créer des menus déroulants élégants et accessibles. Elle facilite l'intégration de listes déroulantes dans vos applications React avec une API simple et flexible.

### 🚀 Fonctionnalités

- Facile à utiliser et à intégrer
- Personnalisation complète du style
- Accessibilité (support clavier et ARIA)
- Support des listes dynamiques
- Gestion des événements (onChange, onOpen, onClose)

### 🛠️ Installation

```bash
npm install react-dropdown-oc
```

ou

```bash
yarn add react-dropdown-oc
```

### ⚡ Utilisation de base

```jsx
import Dropdown from "react-dropdown-oc";

const options = [
  { value: "apple", label: "Pomme" },
  { value: "banana", label: "Banane" },
  { value: "orange", label: "Orange" },
];

function App() {
  return (
    <Dropdown
      options={options}
      onChange={(selected) => console.log(selected)}
      placeholder="Sélectionnez un fruit"
    />
  );
}
```

### 🎨 Personnalisation

import "react-dropdown-oc-ap/styles/dropdown.css" pour le style de base.
Vous pouvez personnaliser le style via des props ou en surchargeant les classes CSS.

---

# react-dropdown-oc

## 📖 Overview (English)

**react-dropdown-oc** is a lightweight and customizable React library for creating stylish and accessible dropdown menus. It makes it easy to integrate dropdown lists into your React applications with a simple and flexible API.

### 🚀 Features

- Easy to use and integrate
- Fully customizable styling
- Accessibility (keyboard and ARIA support)
- Dynamic list support
- Event handling (onChange, onOpen, onClose)

### 🛠️ Installation

```bash
npm install react-dropdown-oc
```

or

```bash
yarn add react-dropdown-oc
```

### ⚡ Basic Usage

```jsx
import Dropdown from "react-dropdown-oc";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
];

function App() {
  return (
    <Dropdown
      options={options}
      onChange={(selected) => console.log(selected)}
      placeholder="Select a fruit"
    />
  );
}
```

### 🎨 Customization

import "react-dropdown-oc-ap/styles/dropdown.css" for base style.
You can customize the style via props or by overriding CSS classes.
