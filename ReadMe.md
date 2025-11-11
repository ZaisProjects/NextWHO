# 🎡 NextWHO – Spinner Game

## Overview
**NextWHO** is a fun, browser-based web app that randomly selects a player’s name and a task using an animated spinning wheel.  
It’s built entirely with **HTML, CSS, JavaScript**, and **Bootstrap 5**, designed to make team games, classroom activities, or party dares more engaging.  
The wheel comes alive with vibrant color segments, sound effects, and a precise pointer — all while remembering your data using **localStorage**.

---

## User Preferences
**Preferred communication style:** Simple, everyday language.

---

## System Architecture

### Frontend Architecture
- **Framework:** Vanilla JavaScript (ES6)
- **UI Framework:** Bootstrap 5 for responsive design
- **Styling:** Custom CSS for animations, gradients, and wheel visuals
- **Layout:** Single-page app (HTML + JS)
- **Interactivity:** JavaScript event-driven logic (click to spin, dynamic DOM updates)
- **Sound System:** HTML `<audio>` API for start and end sounds
- **Storage Handling:** Browser `localStorage` for persisting player names and tasks

### Backend Architecture
*(No server required – purely client-side)*  
- **Execution Environment:** Browser-based JavaScript
- **Logic Management:** ES6 modular structure for readability
- **Animation Handling:** CSS transitions controlled by JavaScript for smooth spins
- **Audio Control:** Immediate play triggers synced with user interaction

---

## Database Layer
- **Type:** Local browser storage
- **Technology:** `localStorage` API
- **Stored Collections:**
  - `roller_names_v1`: Stores the array of player names
  - `roller_tasks_v1`: Stores the array of task descriptions
- **Persistence:** Data remains saved even after refreshing or closing the tab
- **Storage Format:** JSON stringified arrays

---

## Key Components

### Data Models
- **Names:** Array of player names, stored and displayed as color-coded badges
- **Tasks:** Array of task descriptions, stored and displayed similarly
- **Selection Logic:** Randomly selects one name/task and highlights its wheel segment

### Frontend Components
- **Wheel Display:** Circular conic-gradient segments for each player/task
- **Pointer:** Sharp, triangular pointer pointing directly toward the selected segment
- **Name & Task Lists:** Interactive badges for easy add/remove
- **Selected Output:** Displays selected name/task in matching color
- **Buttons:** “🎡 Spin Name” and “🎯 Spin Task” trigger spin animations
- **Sound Effects:** Play at spin start and stop for immersive feedback

---

## Data Flow
1. **User Input:** Player names and tasks are entered in input fields  
2. **Storage:** Data is saved in `localStorage`  
3. **Wheel Generation:** The wheel dynamically updates to match the number of entries  
4. **Spin Trigger:** When “Spin” is clicked, JS calculates a random index and rotates the wheel  
5. **Selection:** When the wheel stops, the pointer highlights the winning segment  
6. **Result Display:** The chosen name/task is shown in the result box  
7. **Persistence:** Data remains stored locally for next use  

---

## External Dependencies

### Core Dependencies
- **Bootstrap 5:** For layout and styling
- **JavaScript (ES6):** Core logic, events, and animation handling
- **HTML5 Audio API:** For playing spin and end sounds
- **LocalStorage API:** For saving and restoring player/task data

### Development Tools
- **Browser Developer Tools:** For debugging and visual inspection
- **Preloaded Audio Files:** Hosted via Google Sounds for quick integration
- **CSS Transitions:** For wheel rotation animation

---

## Deployment Strategy

### Development Environment
- **Runtime:** Pure client-side (no Node.js or backend needed)
- **Hot Reloading:** Browser auto-refresh upon file save
- **Storage:** Uses `localStorage` to persist between sessions

### Production Build
- **Hosting Options:** GitHub Pages, Netlify, or any static web host
- **Frontend Assets:** Single `index.html` file with embedded CSS and JS
- **No Database or Server:** Self-contained web app

### Configuration
- **Environment:** Works offline and online
- **Audio Preload:** Sounds preloaded for instant playback
- **Storage Keys:**
  - `roller_names_v1`
  - `roller_tasks_v1`

---

## Summary
**NextWHO - Spinner ** is a colorful, fast, and interactive randomizer built using **HTML**, **CSS**, **Bootstrap**, and **JavaScript**.  
It delivers:

- 🎨 Dynamic, animated spinning wheel  
- 🔊 Real-time sound feedback  
- 💾 Persistent data with localStorage  
- 🧭 Sharp pointer alignment  
- 📱 Fully responsive mobile layout  

All packed in a single lightweight web page — no backend, no database setup, just open and play!

---
