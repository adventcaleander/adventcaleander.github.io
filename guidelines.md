
# Project Overview

**App Name**: Advent Calendar

**Description**:
A single-page web application that displays one new picture per day in a calendar format for the first 24 days of December. Each day’s picture includes a description and positive affirmation displayed in an animated pop-up. The app is hosted on GitHub Pages, with static assets bundled in the deployment.

## Key Features

1. **Daily Picture Unlock**: Each day, a new picture is unlocked.
2. **Countdown Timer**: Shows the time remaining until the next day’s unlock.
3. **Animations**: Each day’s content (picture, description, affirmation) pops up with animations.
4. **GitHub Pages Hosting**: Entirely self-contained, no external database or storage is required.

---

## Tech Stack

- **React**: Efficient for building SPAs with a component-based structure.
- **React Context API**: For managing global state, such as unlock status and current day.
- **Vite or Webpack**: For bundling assets, including images, directly into the app.
- **GitHub Actions** (Optional): For automated deployment to GitHub Pages.

---

## File and Data Structure

1. **Static Assets**:
   - Place the 24 images in a folder like `src/assets/images`.
   - Use a JSON file or JavaScript object to store metadata for each day, such as descriptions and affirmations.

2. **App State**:
   - Use React’s state and `Date` functions to control the daily unlock mechanism.
   - Store image paths, descriptions, and affirmations within the code or in a JSON file that gets imported at runtime.

### Example JSON Structure for Calendar Data (in `src/data/calendarData.json`)

```json
[
  {
    "day": 1,
    "image": "day1.jpg",
    "description": "A beautiful start to the season!",
    "affirmation": "Embrace the joy in each new day."
  },
  {
    "day": 2,
    "image": "day2.jpg",
    "description": "A little bit of sparkle.",
    "affirmation": "Let your light shine bright."
  }
  // Continue for each day up to day 24
]
```

---

## App Flow and Functionality

### Landing Page (Calendar View)

1. **Day Display**:
   - Display all 24 days as clickable boxes.
   - Only days up to the current date are clickable; future days show as locked.
   - Use the imported JSON data to populate each day’s image, description, and affirmation.

2. **Unlock Mechanism**:
   - Use JavaScript’s `Date` object to determine the current day.
   - Display only images and content up to the current day, with future days grayed out or locked.

3. **Countdown Timer**:
   - Calculate the time remaining until midnight to unlock the next day.
   - Display this countdown for future days and reset each day at midnight.

4. **Pop-Up Modal**:
   - When a day is clicked, a pop-up modal displays the image, description, and affirmation with animations.
   - Use CSS or libraries like Framer Motion for fade-in and scaling animations.

---

## Step-by-Step Implementation Guide

### Step 1: Project Setup

1. **Initialize the React Project**:
   - Create the React app using `create-react-app` or Vite.
   - Install dependencies like `react-router-dom` (if you plan to use routing) and `framer-motion` for animations.

2. **Set Up File Structure**:
   - Create a folder `src/assets/images` for images and add all 24 images.
   - Create a `src/data/calendarData.json` file containing descriptions, affirmations, and image paths.

3. **Component Structure**:
   - **Calendar Component**: Display the 24-day calendar grid.
   - **Day Component**: Render each day’s box, locked or unlocked based on the current date.
   - **Modal Component**: Shows image, description, and affirmation with animations.

### Step 2: Implement Calendar and Unlock Logic

1. **Date-Based Unlock**:
   - Use JavaScript’s `Date` object to get the current day of the month.
   - Render each day as clickable only if it’s on or before the current day.
   - Lock future days with a disabled style.

2. **Countdown Timer**:
   - Calculate the time remaining until midnight to unlock the next day.
   - Display this timer and update it every second.

3. **Modal Pop-Up for Each Day’s Content**:
   - On clicking an unlocked day, open a modal with the image, description, and affirmation.
   - Use Framer Motion for a fade-in and scale effect for the modal.

### Step 3: Bundling and Deployment

1. **Build the Project**:
   - Use `vite build` or `npm run build` to bundle the React app and all images.
   - Ensure all assets, including images, are correctly referenced in the code so they’re bundled into the final build.

2. **GitHub Pages Deployment**:
   - Push the code to the GitHub repository.
   - Enable GitHub Pages in the repo’s settings, choosing the `gh-pages` branch for deployment (or configure GitHub Actions to automate deployment).
   - If using GitHub Actions, add a workflow file for continuous deployment.

---

## Additional Considerations

1. **Responsive Design**:
   - Ensure the calendar layout adjusts to different screen sizes.
   - Use CSS Grid or Flexbox to make the calendar layout responsive.

2. **Code Security**:
   - No sensitive data is stored or exposed, as images and data are bundled directly into the app.
  
3. **Static Content Only**:
   - As a static app, it will be highly performant on GitHub Pages without the need for backend interactions.

---

This approach simplifies the app by bundling everything directly into the SPA, allowing it to be hosted on GitHub Pages without needing any external storage or backend, which keeps the deployment streamlined and cost-free. This setup also ensures that only users with access to the GitHub repository can modify the code or data, effectively securing the images and content.
