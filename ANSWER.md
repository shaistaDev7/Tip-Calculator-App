# ANSWERS.md

## 1. How to Run

### Requirements

A modern web browser such as:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

### Steps

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in a web browser.

---

## 2. Stack & Design Choices

### Why I Chose This Stack

I used HTML, CSS, and JavaScript because the requirements can be use any stack and I mostly use HTML, CSS and Javascript for frontended. This keeps the project lightweight, easy to run, and easy to review.

### Design Decision #1: Two-Column Desktop Layout

On larger screens, the application uses a two-column layout where the inputs are displayed on the left and the results are displayed on the right.

This allows users to see the calculations update while entering information without needing to scroll between inputs and results.

### Design Decision #2: Active Tip Selection State

The preset tip buttons visually highlight the currently selected percentage.

This provides immediate feedback to the user about which tip value is being applied and reduces the chance of confusion when switching between preset tips and a custom tip percentage.

---

## 3. Responsive & Accessibility

### Responsive Behavior

#### Mobile (360px width)

- The layout changes to a single-column design.
- Input fields and result cards stack vertically.
- Buttons expand to fit the available width.
- Content remains readable without horizontal scrolling.

#### Desktop (1440px width)

- Inputs and results are displayed side-by-side.
- More screen space is used efficiently.
- Users can view both data entry and calculations simultaneously.

---

## 4. AI Usage

I used ChatGPT during development for guidance 
### Areas Where AI Was Used

1. Understanding the assessment requirements.
2. Removing some erros in HTML/CSS.
3. Reviewing JavaScript validation logic.

---

## 5. Honest Gap

The application is functionally complete but the visual design could be improved.I would:

- Improve the visual design system with better spacing and typography.
- Add subtle transitions and animations.
- Improve handling of extremely large numeric values and currency formatting.
