import { useContext, useState } from "react";
import { TasksContext } from "../../contexts/to-do-list.context";


const TasksPane = () => {
    const { tasksState, taskActionDispatch } = useContext(TasksContext);

    return (
        <div>
            <div className="container my-4 p-4 border rounded shadow bg-light">
                <div className="header row justify-content-start mb-3">
                    <div className="col-1 text-center fw-bold">Complete</div>
                    <div className="col-2 text-center fw-bold">Priority</div>
                    <div className="col fw-bold">Task</div>
                </div>

                {tasksState.tasks.map((task) => (
                    <div 
                        key={task.id} 
                        className="row justify-content-start align-items-center py-2 border-bottom"
                    >
                        <div className="col-1 text-center">
                            <input 
                                type="checkbox"
                                checked={task.completed}
                                className="form-check-input"
                                onChange={() => {
                                    taskActionDispatch({
                                        type: 'TOGGLE_COMPLETED',
                                        payload: { id: task.id },
                                    });
                                }}
                            />
                        </div>
                        <div className="col-2">
                            <select 
                                className="form-select"
                                name={task.priority}
                                defaultValue={task.priority}
                                onChange={(ev) => {
                                    taskActionDispatch({
                                        type: 'CHANGE_PRIORITY',
                                        payload: { id: task.id, newPriority: ev.target.value },
                                    });
                                }}
                            >
                                <option value="0">Priority</option>
                                <option value="1">Low</option>
                                <option value="2">Med</option>
                                <option value="3">High</option>
                            </select>
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={task.text}
                                onChange={(ev) => {
                                    taskActionDispatch({
                                        type: 'EDIT_TASK_TEXT',
                                        payload: { id: task.id, editedText: ev.target.value },
                                    });
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TasksPane;
