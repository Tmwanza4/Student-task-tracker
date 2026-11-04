# >>> Student Task Tracker

A clean, simple task tracker for students, built with React and Vite. Add your tasks, tick them off as you go, and pick up where you left off, because your list is saved in the browser.

## Features

- Add new tasks quickly with the input form
- Click a task to mark it as completed (or undo it)
- Delete tasks you no longer need
- Tasks are saved automatically in `localStorage`, so they survive page refreshes
- Responsive card layout with a gradient background and smooth animations

## Tech Stack

- [React](https://react.dev/) (hooks: `useState`, `useEffect`)
- [Vite](https://vitejs.dev/) for the dev server and build
- Plain CSS for styling

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Tmwanza4/student-task-tracker.git

# Move into the project folder
cd student-task-tracker

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open the local address shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
student-task-tracker/
├── public/          # Static assets
├── src/
│   ├── App.jsx      # Main component: task logic and UI
│   ├── index.css    # Global styles
│   └── main.jsx     # App entry point
├── index.html
├── package.json
└── vite.config.js
```

## Roadmap

- [ ] Filter tasks by All / Active / Completed
- [ ] Show a "tasks left" counter
- [ ] Add due dates to tasks
- [ ] Edit existing tasks
- [ ] Dark mode

## Author

**Taizya**
Computer Science student, Mulungushi University
GitHub: [@Tmwanza4](https://github.com/Tmwanza4)