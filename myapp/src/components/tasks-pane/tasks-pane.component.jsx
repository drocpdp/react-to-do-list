import { useContext } from "react";
import { TasksContext } from "../../contexts/to-do-list.context";


const TasksPane = () => {
    const { tasksState, taskActionDispatch } = useContext(TasksContext);

    return (
        <div>
            <div className="container">
                <div className="header row justify-content-start">
                    <div className="col-1">Complete</div>
                    <div className="col-2">Priority</div>
                    <div className="col-4">Task</div>
                </div>

                {tasksState.tasks.map((task, index) => (
                    <div 
                        key={task.id} 
                        className="row justify-content-start"
                    >
                        <div className="col-1">
                            <input 
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => {
                                    taskActionDispatch({
                                        type: 'TOGGLE_COMPLETED',
                                        payload: { id: task.id }, // Pass the task id here
                                    });
                                }}
                            />
                        </div>
                        <div className="col-2">
                            <select 
                                name={task.priority}
                                defaultValue={task.priority}
                                onChange={ev => {
                                    taskActionDispatch({
                                        type: 'CHANGE_PRIORITY',
                                        payload: {id: task.id, newPriority: ev.target.value },
                                    });
                                }}
                            >
                                <option value="0">Priority</option>
                                <option value="1">Low</option>
                                <option value="2">Med</option>
                                <option value="3">High</option>
                            </select>
                        </div>
                        <div className="col-4">{task.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TasksPane;
