# Task Management Application

A tool to help users manage their tasks and projects, with a focus on productivity features and task prioritization.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployed Version](#deployed-version)
- [Design](#design)
- [Technologies Used](#technologies-used)

## Features
- **Task Creation**: Users can create tasks with deadlines, priorities, and additional notes.
- **Task Organization**: Tasks can be sorted, filtered, and grouped by project.
- **Progress Tracking**: Visual progress indicators like checkboxes and progress bars help track task completion.
- **Notifications**: Receive reminders for upcoming deadlines to stay on track.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Sonwabiso1/task-management-app.git
   cd task-management-app
   ```

2. **Back-End Setup**:
   - Navigate to the `server` folder:
     ```bash
     cd server
     ```
   - Install back-end dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `server` directory with the following variables:
     ```plaintext
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string_here
     ```
   - Start the server:
     ```bash
     npm run dev
     ```

3. **Front-End Setup**:
   - Open a new terminal, navigate to the `client` folder:
     ```bash
     cd client
     ```
   - Install front-end dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `client` directory with the following variable:
     ```plaintext
     REACT_APP_API_URL=http://localhost:5000
     ```
   - Start the React app:
     ```bash
     npm start
     ```

4. **Access the Application**:
   - Front-end: [http://localhost:3000](http://localhost:3000)
   - Back-end API: [http://localhost:5000](http://localhost:5000)

## Usage

After starting both the front-end and back-end servers, you can start managing tasks. 

1. **Create a New Task**: Navigate to the task creation page to add a new task with a title, deadline, priority, and notes.
2. **Organize Tasks**: Use the filtering and sorting features to organize tasks by project or priority.
3. **Track Progress**: Mark tasks as complete and monitor progress via progress bars.
4. **Receive Notifications**: Ensure notifications are enabled to receive reminders for task deadlines.

## Deployed Version
The deployed version of the application will be available on Heroku.

**[Live Application on Heroku](https://your-heroku-app-link.com)**

## Design

The design for the application is available on Figma. Check it out to understand the layout, style, and user flows.

**[Figma Design Link](https://www.figma.com/design/5fAFOsrs0VNxehdNgfGoGj/Task-Management-Prototype?node-id=0-1&node-type=canvas&t=wvT7zZupQy50ylfk-0)**

## Technologies Used
- **Front-End**: HTML, CSS, JavaScript, React
- **Back-End**: Node.js, Express.js
- **Database**: MongoDB (or PostgreSQL as an alternative)
- **Deployment**: Heroku with CI/CD pipelines

---
