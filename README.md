# Talifun Tokenizer Landing Page

A high-performance landing page for the Talifun Tokenizer, showcasing industry-leading throughput and latency benchmarks across Node.js, Python, and Rust.

## 🚀 Overview

This repository contains the source code for the Talifun Tokenizer landing page. The site is designed to demonstrate the performance advantages of Talifun's BPE (Byte Pair Encoding) tokenizer compared to other popular implementations like Tiktoken and Hugging Face Tokenizers.

## ✨ Key Features

- **Performance Benchmarks**: Interactive charts showing throughput (MB/s) and latency (ms) across different runtimes.
- **Modern UI/UX**: Premium design with glassmorphism effects, dark mode support, and smooth animations.
- **Dynamic Cascading Animations**: Staggered entrance animations for hero text and benchmark cards.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
- **Video Integration**: Launch walkthrough video section for deep-dive technical insights.

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd talifun-tokenizer-landingpage
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

### Build

Build the production-ready application:
```bash
npm run build
```
The output will be in the `dist` directory.

## 📜 Available Scripts

- `npm run dev`: Starts the Vite development server with hot module replacement (HMR).
- `npm run build`: Compiles and minifies the application for production.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs TypeScript type checking.
- `npm run clean`: Removes the `dist` directory.

## 📊 Benchmarks

The benchmark data is located in `src/data/benchmarks.ts`. Modification of these values will automatically update the charts on the landing page.

---

© 2026 Talifun Space. All rights reserved.
