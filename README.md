# Dopify

## Overview

Dopify is a reward-driven productivity web application designed to help users stay motivated while completing tasks. Instead of treating productivity as a list of obligations, Dopify encourages users to associate meaningful rewards with completed tasks, creating positive reinforcement and helping build sustainable productivity habits.

Users can create tasks, assign deadlines, attach personal rewards, track active tasks, mark tasks as completed, and view detailed task information through a clean, modern interface.


## Problem Statement

Many traditional to-do list applications focus solely on task tracking without addressing one of the biggest productivity challenges: motivation.

People often struggle to stay consistent because tasks feel like endless responsibilities with no immediate reward. Dopify solves this problem by combining task management with a reward system that encourages users to celebrate progress and maintain momentum.

### Key Problems Solved

- Reduces procrastination through reward-based motivation
- Makes productivity feel more engaging and enjoyable
- Encourages habit-building through positive reinforcement
- Provides a clean and intuitive task management experience
- Helps users balance work with self-care rewards


## Features

### Create Tasks

Users can create tasks through a guided multi-step flow:

1. Enter task details
2. Set a deadline
3. Choose or define a reward

### Manage Tasks

- View active tasks
- View completed tasks
- Track task information at a glance

### Task Details

Users can open a detailed task modal to see:

- Task description
- Deadline information
- Assigned reward
- Priority indicators
- Completion progress

### Task Completion Celebration

When a task is completed, Dopify displays a celebratory completion screen that reinforces positive productivity habits and highlights the reward earned.

### Persistent Storage

All task data is stored in browser localStorage, allowing tasks to remain available even after page refreshes.


## Framework Choice: Why React?

React was the natural choice for Dopify because it aligns perfectly with the application's interactive and component-driven design.

### Component-Based UI

Dopify is built from reusable interface elements such as:

- Task cards
- Navigation bars
- Forms
- Modals
- Progress indicators
- Completion screens

React's component architecture makes these elements easy to build, maintain, and reuse throughout the application.

### State Management Flexibility

The application requires immediate UI updates whenever users:

- Create a task
- Complete a task
- Open task details
- Move tasks between active and completed states

React's `useState` and `useEffect` hooks provide a simple and effective way to manage these updates while keeping the codebase clean.

### Ecosystem Maturity

React offers a mature ecosystem that accelerated development:

- React Router for navigation
- Tailwind CSS for rapid styling
- Vite for fast development and builds
- Extensive community support and documentation

### Why React for Dopify Specifically?

The reward-based productivity concept depends heavily on instant visual feedback. Users should immediately see changes when tasks are completed, rewards are unlocked, or task lists are updated.

React's efficient rendering model makes these interactions smooth and responsive while avoiding unnecessary complexity.


## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- Local Storage API


## Project Structure

- `src/App.jsx` — main router and app shell
- `src/main.jsx` — React app entry point
- `src/index.css` — global styles and theme variables
- `src/pages/LandingPage.jsx` — landing page with hero content and feature sections
- `src/pages/MyTasksPage.jsx` — task list page with active/completed tasks and modal orchestration
- `src/pages/NewTaskPage.jsx` — page wrapper for task creation flow
- `src/myTasks.jsx` — presentational task list component with active/completed sections
- `src/newTask.jsx` — task creation form page and user input flow
- `src/components/navbar.jsx` — navigation bar with route-aware links
- `src/components/icons.jsx` — reusable icon components
- `src/Modal/taskView.jsx` — task detail modal component
- `src/Modal/congrats.jsx` — completion celebration modal component
- `src/context/TaskProvider.jsx` — task context provider and state management wrapper
- `src/context/TaskContext.jsx` — hook for consuming task context
- `src/context/ModalProvider.jsx` — modal context provider for global modal state
- `src/context/ModalContext.jsx` — hook for consuming modal context
- `src/hooks/useLocalStorage.js` — custom hook for localStorage state persistence
- `src/hooks/useTaskManagement.js` — custom hook for task operations
- `src/hooks/useModal.js` — custom hook for modal open/close state
- `src/styles/classNames.js` — centralized Tailwind class name constants
- `public/` — static assets and images


## How to Run Dopify Locally

### Prerequisites

- Node.js (v16 or higher)
- npm (included with Node.js)

Download Node.js from:

https://nodejs.org

### Installation

Clone the repository:

```bash
git clone <https://github.com/genevieveagugua/DOPIFY.git>
```

Navigate into the project folder:

```bash
cd dopify
```

Install dependencies:

```bash
npm install
```

### Start the Development Server

Run:

```bash
npm run dev
```

Vite will start a local development server, usually at:

```bash
http://localhost:5173
```

If port 5173 is already in use, Vite will automatically assign another available port.

### Open the Application

Open the URL displayed in your terminal, typically:

```bash
http://localhost:5173
```

## What to Expect

### Landing Page 
- Dopify introduction
- Hero section
- Call-to-action button

### Create Task 
- Multi-step task creation flow
- Task information input
- Deadline selection
- Reward selection

### My Tasks 
- Active tasks list
- Completed tasks list
- Task management interface

### Task Details Modal
- Full task information
- Deadline and reward overview
- Progress tracking
- Complete action

### Completion Celebration
- Motivational success screen
- Reward unlock confirmation
- Positive reinforcement experience


## Data Persistence

Dopify uses the browser's localStorage API.

This means:

- Tasks remain available after page refreshes
- No backend setup is required
- User progress is stored locally on the device


## Troubleshooting

### Port Already in Use

If port 5173 is occupied, Vite will automatically use another available port.
Check the terminal output for the correct URL.

### Dependency Errors

If packages fail to install or load correctly:

```bash
npm install
```

Run the command again to ensure all dependencies are properly installed.


## Deployment

The app is deployed at:

[dopify](https://dopify.vercel.app/)
