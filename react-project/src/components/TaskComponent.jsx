import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, completeTask } from 'your-action-file-path'; // Update with your actual action file path
import { NavLink } from 'react-router-dom';

const TaskComponent = ({ task }) => {
   
    return (
        <>
            <CheckBox task={task} />
            <NavLink to={`tasks/${task.id}`}>
                {task.title ? <>{task.title}</> : <i>No Title</i>}
            </NavLink>
            <button onClick={handleDeleteClick}>Delete</button>
        </>
    );
};

const CheckBox = ({ task }) => {
    const dispatch = useDispatch();
    const isCompleted = task.completed;

    const handleClick = () => {
        dispatch(completeTask({ id: task.id }));
    };

    return (
        <button onClick={handleClick}>
            {isCompleted ? "Completed" : "Incomplete"}
        </button>
    );
};

export default TaskComponent;
