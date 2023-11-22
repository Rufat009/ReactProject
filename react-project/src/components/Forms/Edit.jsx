import { Form, useLoaderData,redirect } from "react-router-dom";
import store from "../reducer/store";   
import { updateTask } from '../reducer/slicer'

export async function action({ request, params }) {
    const formData = await request.formData();
    let ison = false;
    if(formData.get("isdone") === "on"){
        ison = true;
    }
    store.dispatch(updateTask({
        id: params.taskid,
        name: formData.get("name"),
        content: formData.get("content"),
        isDone: ison,
    }))
    return redirect(`/tasks/${params.taskid}`);
}

export default function Edit() {
  const { element } = useLoaderData();
  return (
    <Form method="put" id="taks-form">
      <p>
        <span>Name</span>
        <input
          placeholder="Name"
          aria-label="Name"
          type="text"
          name="name"
          defaultValue={element.name}
        />
        <span>Сontent</span>
        <input
          placeholder="Content"
          aria-label="Content"
          type="text"
          name="content"
          defaultValue={element.content}
        />
      </p>
      <label>
      <span>is done</span>
        <input
            type="checkbox"
            name="isdone"            
            defaultChecked={element.isDone === "false"}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  );
}