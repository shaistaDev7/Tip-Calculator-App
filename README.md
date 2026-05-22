# Tip Calculator

A responsive web application that calculates tip amounts and splits the total bill among multiple people. 

## Features

- Live calculation of:
  - Tip Amount
  - Grand Total
  - Per-Person Share
- Preset tip percentage buttons (10%, 15%, 20%)
- Custom tip percentage input
- Inline validation messages
- Reset button
- Responsive design for desktop and mobile devices

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)

## How to Run

### Option 1: Open Directly

1. Download or clone the repository.
2. Open the project folder.
3. Double-click `index.html`.

The application will open in your default web browser.

## Project Structure

tip-calculator/

├── index.html

├── style.css

├── script.js

├── README.md

└── ANSWERS.md

## Validation Rules

- Bill amount must be greater than 0.
- Tip percentage must be between 0 and 100.
- Number of people must be a positive integer greater than or equal to 1.

## Edge Cases Handled

- Empty inputs
- Negative values
- Zero people
- Invalid numeric values
- Very large numbers
- Live updates without page reloads


