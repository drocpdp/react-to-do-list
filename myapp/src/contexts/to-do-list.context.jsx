import react from "react"
import { useReducer } from "react"
import { createContext } from "react"
import { all_tasks } from "../data/tasks"

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

const tasksReducer = (state, action) => {
    switch (action.type) {
        case "NONE":
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}

export const TasksContext = createContext({});


export const TasksProvider = ({children}) => {
    const [state, dispatch] = useReducer(tasksReducer, INITIAL_STATE);

    const value = {
        state,
        dispatch
    };
    
    return <TasksContext.Provider value={value}>
                {children}
            </TasksContext.Provider>;
    
}