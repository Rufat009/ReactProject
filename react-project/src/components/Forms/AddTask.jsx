import { useDispatch } from "react-redux";
import { addTask } from "../reducer/slicer";
function AddTaskForm() {
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        dispatch(addTask({
            name: formData.get('title'),
            content: formData.get('content'),
            isDone: false,
            id: crypto.randomUUID()
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title"/>
            <input type="text" name="content"/>
            <button type="submit">Add task</button>
        </form>
    )
}

export default AddTaskForm;