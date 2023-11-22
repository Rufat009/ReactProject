import { Form, redirect, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../redux/slices/tasksSlice";
import { destroyTask } from "../../tasks";
import { useEffect } from "react";

function DeleteTaskForm({ task }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDeleteClick = async (e) => {
        e.preventDefault();
        dispatch(deleteTask({ id: task.id }));
        await destroyTask(task.id);
        navigate('/');
    };

    return (
        <>
            <Form onSubmit={handleDeleteClick}>
                <button type="submit">
                    Delete
                </button>
            </Form>
        </>
    );
}

export default DeleteTaskForm;