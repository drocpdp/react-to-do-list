import react from "react"
import { useReducer } from "react"
import { createContext } from "react"

const INITIAL_STATE = {
    tasks: [
            {
                id: 1,
                text: "Learn React",
                priority: 3,
                completed: false,
            },
            {
                id: 2,
                text: "Finish this project",
                priority: 3,
                completed: false,
            },
            {
                id: 3,
                text: "Drink some coffee",
                priority: 2,
                completed: true,
            },
            {
                id: 4,
                text: "Learn about contexts and reducers",
                priority: 3,
                completed: true,
            },
            { 
                id: 5,
                text: "Learn about other things",
                priority: 1,
                completed: false,
            }
        ]
    }

const toggleCompleted = (state, action) => {
    const taskID = action.payload.id;

    // Create a new state copy with updated tasks
    return {
        ...state,
        tasks: state.tasks.map((task) =>
            taskID === task.id
                ? { ...task, completed: !task.completed } // Toggle `completed` for the matching task
                : task // Return unchanged tasks
        ),
    };
};

const changePriority = (state, action) => {
    const taskID = action.payload.id;
    const newPriority = action.payload.newPriority;
    
    return {
        ...state,
        tasks: state.tasks.map((task) =>
            taskID === task.id
                ? { ...task, priority: newPriority }
                : task
        ),
    };
};


const tasksReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_COMPLETED':
            return toggleCompleted(state, action);
        case 'CHANGE_PRIORITY':
            return changePriority(state, action);
        default:
            return state;
    }
}


export const TasksContext = createContext({});


export const TasksProvider = ({children}) => {
    const [tasksState, taskActionDispatch] = useReducer(tasksReducer, INITIAL_STATE);

    const value = {
        tasksState,
        taskActionDispatch
    };
    
    return <TasksContext.Provider value={value}>
                {children}
            </TasksContext.Provider>;
    
}