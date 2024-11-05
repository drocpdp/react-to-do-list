import { useState, useContext } from "react";
import { TasksContext } from "../../contexts/to-do-list.context";


const TasksPane = () => {
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

                <div 
                    className="row justify-content-start"
                    key="1"
                >
                    <div className="col-1">
                        <input type="checkbox"
                        >
                        </input>
                    </div>
                    <div className="col-2">
                        <select 
                            name="selectedPriority"
                            defaultValue="1"
                        >
                            <option value="0">Priority</option>
                            <option value="1">Low</option>
                            <option value="2">Med</option>
                            <option value="3">High</option>
                        </select>
                    </div>      
                    <div className="col-4">
                        ipsum loris to do this and that
                    </div>                                        
                </div>

                <div 
                    className="row justify-content-start"
                    key="2"
                >
                    <div className="col-1">
                        <input type="checkbox"></input>
                    </div>
                    <div className="col-2">
                        <select 
                            name="selectedPriority"
                            defaultValue="2"
                        >
                            <option value="0">Priority</option>
                            <option value="1">Low</option>
                            <option value="2">Med</option>
                            <option value="3">High</option>
                        </select>
                    </div>      
                    <div className="col-4">
                        ipsum loris to do this and that
                    </div>                                        
                </div>                
            
            
            </div>
        </div>
    )
}

export default TasksPane;