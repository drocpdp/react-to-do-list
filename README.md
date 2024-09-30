# react-to-do-list
Learning react by creating to do list. Focus: reducers.

# Project: To-Do List with Filter and Priority

## Features:

#### 1. Add and Remove Tasks: You can add and remove tasks.
#### 2. Set Priority for Tasks: Each task has a priority (Low, Medium, High).
#### 3. Filter Tasks by Priority: Filter the displayed tasks based on their priority.
#### 4. Toggle Task Completion: Mark tasks as completed or incomplete.
#### 5. Sort by Priority: Automatically sort tasks by priority.


```
const initialState = {
    tasks: [],
    filter: 'ALL', // Filter can be 'ALL', 'LOW', 'MEDIUM', 'HIGH'
};
```
```
const task = {
    id: 1,
    text: "Learn React",
    priority: "HIGH", // LOW, MEDIUM, HIGH
    completed: false,
};
```