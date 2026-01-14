# Day 6: Color Flipper

## Description

A simple web application built as part of the JavaScript 30 Days challenge. This project creates a color flipper that generates and applies random hex colors to the page background upon clicking a button. The app ensures that each new color is different from the previous one to provide a varied experience.

## Features

- **Random Hex Color Generation**: Generates a random 6-digit hexadecimal color code.
- **Dynamic Background Change**: Updates the page background color instantly on button click.
- **Color Display**: Shows the current background color code in the UI.
- **Title Color Sync**: Changes the navigation title color to match the new background color.
- **No Repeat Colors**: Prevents the same color from being selected consecutively.

## Technologies Used

- **HTML5**: For the basic structure of the web page.
- **CSS3**: For styling, including custom fonts (Roboto and Open Sans), responsive layout, and button hover effects.
- **JavaScript (ES6)**: For the logic to generate random colors and handle user interactions.

## How to Run

1. Navigate to the `day_6` folder.
2. Open `index.html` in any modern web browser.
3. Click the "click me" button to generate and apply a new random background color.

## File Structure

- `index.html`: The main HTML file containing the page structure, including the header, main content area with color display, and the interactive button.
- `style.css`: The CSS file responsible for the visual styling, including font definitions, color variables, layout, and animations.
- `day6.js`: The JavaScript file that handles the color generation logic, event listeners, and DOM manipulations.
- `fonts/`: Directory containing custom font files (Roboto and Open Sans in WOFF2 format) for enhanced typography.

## Code Explanation

### HTML (`index.html`)
- Defines a simple page layout with a fixed header containing the app title.
- Includes a main section with a display for the current background color and a button to trigger color changes.
- Links to the CSS stylesheet and JavaScript file.

### CSS (`style.css`)
- Imports custom fonts for Roboto and Open Sans.
- Uses CSS variables for consistent theming (font sizes, families, colors).
- Styles the header with a shadow for depth.
- Centers the main content vertically and horizontally.
- Applies styling to the color display box and button, including hover effects.

### JavaScript (`day6.js`)
- Defines an array of hexadecimal digits (0-9, A-F).
- Selects DOM elements: the button, color display span, and navigation title.
- Implements a `getRandomNum()` function to generate random indices for the hex array.
- Creates a `generateColor()` function that builds a random hex color string by concatenating 6 random hex digits.
- Adds an event listener to the button that:
  - Generates a new color.
  - Uses a do-while loop to ensure the new color differs from the previous one.
  - Applies the new color to the body background.
  - Updates the color display text.
  - Changes the navigation title color to the new color.
  - Stores the new color as the old color for the next iteration.

This project demonstrates basic DOM manipulation, event handling, and random number generation in JavaScript, while incorporating clean CSS design principles.
