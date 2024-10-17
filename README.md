# Kanban Board

A simple and interactive Kanban Board built with React, Material-UI, and drag-and-drop functionality using react-beautiful-dnd.

## Introduction

The Kanban Board is a project management tool designed to help teams visualize their workflow and manage tasks efficiently. Inspired by the Kanban methodology, this board allows users to create, move, and track tasks across different stages of a project. The primary goal is to provide a clear overview of the project's progress and ensure that tasks are completed in a timely manner.

## UI Screenshot

<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/user-attachments/assets/e56538bf-9306-4245-8480-a7bad8744578" alt="Kanban Board Screenshot 1" style="width: 50%;"/>
  <img src="https://github.com/user-attachments/assets/d713a556-74db-4921-857b-46de06e27508" alt="Kanban Board Screenshot 2" style="width: 50%;"/>
  <img src="https://github.com/user-attachments/assets/c2a7ca4a-1baf-43e7-91f0-d780ac7783d2" alt="Kanban Board Screenshot 3" style="width: 50%;"/>
</div>


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Drag and Drop**: Easily move tasks between columns.
- **Styled Components**: Customizable and reusable components.
- **React**: Built with the latest version of React.
- **State Management**: Manage state using React hooks.

## Installation

1. **Clone the repository**:

    ```sh
    https://github.com/apurva313/Kanban-Board.git
    cd Kanban-Board
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Start the development server**:

    ```sh
    npm start
    ```

    You should see output similar to:

    ```sh
    > kanbanboard@0.0.0 start
    > react-scripts start

    Starting the development server...
    ```

## Usage

1. **Open your browser** and navigate to `http://localhost:3000`.
2. **Kanban Board Interface**:
    - You will see the Kanban Board with columns for "To-Do", "In Progress", "Peer Review", and "Done".
    - Drag and drop tasks between columns to manage your workflow.

## Project Structure

```plaintext
Kanban-Board/
├── .gitignore
├── LICENSE
├── package.json
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
├── README.md
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── components/
│   │   ├── Board.js
│   │   ├── Column.js
│   │   ├── Task.js
│   │   ├── TaskForm.js
│   ├── features/
│   │   ├── tasks/
│   │   │   ├── tasksSlice.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   ├── store.js
|
|

### Key Files and Directories

- **src/components/Board.js**: Main Kanban board component.
- **src/components/Column.js**: Defines the Column component.
- **src/components/Task.js**: Task card component used within the Kanban board.
- **src/components/TaskForm.js**: Form for creating new tasks.
- **src/features/tasks/tasksSlice.js**: Contains Redux slice for managing tasks.
- **src/index.js**: Entry point of the application.
- **src/App.js**: Main App component.

## Dependencies

The project uses the following dependencies:

- `@emotion/react`: ^11.11.4
- `@emotion/styled`: ^11.11.5
- `@mui/icons-material`: ^5.16.1
- `@mui/material`: ^5.16.1
- `@reduxjs/toolkit`: ^2.2.6
- `@testing-library/jest-dom`: ^5.17.0
- `@testing-library/react`: ^13.4.0
- `@testing-library/user-event`: ^13.5.0
- `react`: ^18.3.1
- `react-beautiful-dnd`: ^13.1.1
- `react-dom`: ^18.3.1
- `react-redux`: ^9.1.2
- `react-scripts`: 5.0.1
- `web-vitals`: ^2.1.4

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the repository**.
2. **Create a new branch**:

    ```sh
    git checkout -b feature/your-feature-name
    ```

3. **Make your changes**.
4. **Commit your changes**:

    ```sh
    git commit -m 'Add some feature'
    ```

5. **Push to the branch**:

    ```sh
    git push origin feature/your-feature-name
    ```

6. **Open a pull request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
