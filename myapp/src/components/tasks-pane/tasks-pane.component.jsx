import { useState, useContext } from "react";
import { TasksContext } from "../../contexts/to-do-list.context";


const TasksPane = () => {

    const {state, dispatch}  = useContext(TasksContext);

    return (
        <div>
            <div className="container">
                <div className="header row justify-content-start">
                    <div className="col-1">
                        Complete
                    </div>
                    <div className="col-2">
                        Priority
                    </div>      
                    <div className="col-4">
                        Task
                    </div>                                        
                </div>

                {state.tasks.map((task) => (

                    <div 
                        className="row justify-content-start"
                        key={task.id}
                    >
                        <div className="col-1">
                            <input type="checkbox"
                                defaultChecked={task.completed}
                            >
                            </input>
                        </div>
                        <div className="col-2">
                            <select 
                                name={task.priority}
                                defaultValue={task.priority}
                            >
                                <option value="0">Priority</option>
                                <option value="1">Low</option>
                                <option value="2">Med</option>
                                <option value="3">High</option>
                            </select>
                        </div>      
                        <div className="col-4">
                            {task.text}
                        </div>                                        
                    </div>
                ))}
                
            </div>
        </div>
    
    )
}

export default TasksPane;