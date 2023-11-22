import { useSelector } from "react-redux";
import Task from "./Task";

function TasksList() {
    const tasks = useSelector(tasks => tasks.tasks);
    console.log(tasks);
    return (
        <ul>
            {
                tasks.map(taskData => <Task key={taskData.id} taskData={taskData}/>)
            }
        </ul>
    )
}

export default TasksList;