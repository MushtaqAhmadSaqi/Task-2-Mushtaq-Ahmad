# DecodeLabs Full Stack Project 1: Responsive Frontend Interface

Welcome to my **Responsive Frontend Interface** project! This is my very first task for the DecodeLabs Industrial Training Kit (Batch 2026). I built this project to learn the basics of responsive web design from scratch, without relying on any external CSS frameworks like Tailwind or Bootstrap.

## Project Overview

This project is a fully responsive landing page designed with a **Mobile-First paradigm**. My goal was to create a clean, user-friendly interface that looks great on any device while applying modern UI/UX design principles and a warm, grounded aesthetic.

## Features

- **Mobile-First Architecture**: Starts with a single-column layout and elegantly expands using `min-width` media queries for tablets (768px) and desktops (1024px).
- **Semantic HTML5**: Utilizes landmark elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`) to ensure accessibility and SEO readiness.
- **Fluid Typography**: Employs CSS `clamp()` functions to dynamically scale text sizes based on the viewport width, ensuring readability on all devices.
- **Modern Layouts**: Uses **CSS Grid** for macro-level structural layouts and **Flexbox** for micro-level component alignment.
- **Custom 2025 Aesthetics Palette**:
  - Mocha Mousse (`#A5856F`)
  - Ethereal Blue (`#A0D4E0`)
  - Moonlit Grey (`#F2F0EA`)

## Technologies Used

- HTML5
- CSS3 (Variables, Grid, Flexbox, Media Queries, Container Queries)
- Vanilla JavaScript (for mobile menu interactivity)

## How to View the Project

1. Clone or download this repository.
2. Open the `index.html` file in your preferred modern web browser.
3. Resize the browser window to see the responsive breakpoints in action:
   - Mobile: < 768px (Hamburger menu, stacked content)
   - Tablet: 768px - 1023px (Two-column layout adjustments)
   - Desktop: >= 1024px (Full top navigation, side panel layout)

## Architecture Specifications

- **Nav Container**: 50px height
- **Hero Section**: 360px height
- **Main Content Grid**: Scales intelligently alongside the informational sidebar panel.

---

*Built with passion by Mushtaq Ahmad.*
