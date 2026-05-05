# Kotlin Crash Course

> A hands-on, chapter-by-chapter guide for JavaScript and Python developers who want to build Android apps with Kotlin.

[**🚀 Start the Course**](https://gagangulyani.github.io/kotlin-crash-course/) &nbsp;·&nbsp; [**⭐ GitHub Repo**](https://github.com/gagangulyani/kotlin-crash-course)

---

## What's Inside

A multi-file, interactive crash course with **7 progressive chapters**. Each chapter includes:

- **Detailed explanations** with real-world context
- **Multiple code examples** for every concept (syntax-highlighted with highlight.js)
- **JavaScript & Python comparisons** — expandable side-by-side boxes showing how Kotlin differs
- **Try-it-yourself exercises** with hidden hints
- **Concept check quizzes** with instant feedback
- **Progressive difficulty** — each chapter builds on the previous

---

## Course Chapters

| # | Chapter | Topics | Est. Time |
|---|---------|--------|-----------|
| 1 | [Basics & Types](ch01-basics.html) | `val`/`var`, type inference, strings, ranges | 15 min |
| 2 | [Functions](ch02-functions.html) | Parameters, defaults, named args, lambdas, higher-order | 20 min |
| 3 | [Null Safety](ch03-nullsafety.html) | Nullable types, `?.`, `?:`, `!!`, `let`, smart cast | 20 min |
| 4 | [Collections](ch04-collections.html) | List, Set, Map, `map`, `filter`, `reduce`, ranges | 20 min |
| 5 | [Classes & OOP](ch05-oop.html) | Data classes, sealed classes, inheritance, extensions | 25 min |
| 6 | [Coroutines](ch06-coroutines.html) | `suspend`, `launch`, `async`, `Flow`, cancellation | 25 min |
| 7 | [Android & Compose](ch07-android.html) | Jetpack Compose, ViewModel, StateFlow, navigation | 25 min |

---

## Features

| Feature | Description |
|---------|-------------|
| 🌙 Dark Mode UI | Clean dark theme optimized for long reading sessions |
| 🔍 JS/Python Comparisons | Side-by-side expandable boxes comparing syntax |
| 📝 Interactive Exercises | Code-it-yourself challenges with hints |
| 🧠 Concept Checks | Inline quizzes to verify understanding |
| 📊 Progress Tracking | LocalStorage-based progress bar and chapter completion |
| 📋 Copy Code | One-click copy on every code block |
| 🎹 Keyboard Navigation | `← →` arrow keys to jump between chapters |
| 📱 Responsive | Sidebar on desktop, hamburger menu on mobile |
| ⚡ Zero Build Step | Plain HTML/CSS/JS — works anywhere |

---

## Who Is This For?

- JavaScript/Python developers switching to Kotlin
- Web developers diving into Android
- Anyone who wants a structured, hands-on Kotlin reference

---

## How to Use Locally

```bash
git clone https://github.com/gagangulyani/kotlin-crash-course.git
cd kotlin-crash-course
# Open index.html in your browser
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

Or serve with any static file server:
```bash
npx serve .     # if you have Node.js
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

---

## Project Structure

```
kotlin-crash-course/
├── index.html              # Landing page with chapter overview
├── css/
│   └── style.css           # Shared dark theme styles
├── js/
│   └── main.js             # Navigation, progress, quiz logic
├── ch01-basics.html        # Chapter 1: Basics & Types
├── ch02-functions.html     # Chapter 2: Functions
├── ch03-nullsafety.html    # Chapter 3: Null Safety
├── ch04-collections.html   # Chapter 4: Collections
├── ch05-oop.html           # Chapter 5: Classes & OOP
├── ch06-coroutines.html    # Chapter 6: Coroutines
├── ch07-android.html       # Chapter 7: Android & Compose
└── README.md
```

---

## Tools You'll Need for Practice

- **Android Studio** — [developer.android.com/studio](https://developer.android.com/studio)
- **Kotlin Playground** — [play.kotlinlang.org](https://play.kotlinlang.org)

---

## Contributing

Found a typo, unclear explanation, or want to add a chapter? Open an issue or PR!

---

Built with 💜 for Kotlin learners.
