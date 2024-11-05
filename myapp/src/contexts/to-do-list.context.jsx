import react from "react"
import { useReducer } from "react"
import { createContext } from "react"
import { all_tasks } from "../data/tasks"

const INITIAL_STATE = { all_tasks };

export const TasksContext = createContext({});

const tasksReducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case "ADD_TASK":
            alert('ok')
            return {
                ...state,
                ...payload
            };
        case "TOGGLE_TASK":
                alert('toggle')
                return {
                    ...state,
                    ...payload
                };
        case "CHANGE_PRIORITY":
            return {
                ...state,
                ...payload
            };                
        case "EDIT_TASK":
            return {
                ...state,
                ...payload
            };
        default:
            throw new Error(`Unahandled type of ${type} in tasksReducer`);
    }
}

export const TasksProvider = ({children}) => {

    const [
        {},
        dispatch
    ] = useReducer(tasksReducer, INITIAL_STATE)

    const value = {
        dispatch,    
    };
    
    return <TasksContext.Provider value={value}>
                {children}
            </TasksContext.Provider>;
    
}