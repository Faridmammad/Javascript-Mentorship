# 🚀 JavaScript Introduction

Welcome to the **Beginner Level** of our JavaScript Mentorship Program!  
In this lesson, we'll cover the basics of JavaScript — what it is, why it's important, and how to write your first lines of code.

---

## 📌 What is JavaScript?

**JavaScript (JS)** is a high-level, dynamic, and versatile programming language primarily used to make web pages interactive. It runs in the browser and allows you to:

- Respond to user actions (clicks, typing, etc.)
- Update content dynamically
- Control multimedia
- Animate elements
- Communicate with servers (via APIs)

> 💡 Fun Fact: JavaScript is **NOT** related to Java. The name was a marketing decision in the 1990s!

---

## 🌐 Where Does JavaScript Run?

JavaScript can run in many environments:

- **Web Browsers** (Chrome, Firefox, Safari, etc.) — most common
- **Servers** (using Node.js)
- **Mobile Apps** (React Native, etc.)
- **Desktop Apps** (Electron)

For now, we’ll focus on **browser-based JavaScript**.

---

## ✅ How to Write JavaScript

There are three main ways to include JavaScript in a web page:

### 1. Inline (not recommended for large code)
```html
<button onclick="alert('Hello!')">Click me</button>
```

### 2. Internal Script (inside HTML)
```html
<script>
  console.log("Hello from internal script!");
</script>
```

### 3. External Script (recommended)
Create a file called script.js:
```javascript
console.log("Hello from external file!");
```


Then link it in your HTML:
```html
<script src="script.js"></script>
```

> **Note:** ✅ Best Practice: Always use external scripts for better organization and reusability.