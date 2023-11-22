import { deleteTask } from "../reducer/slicer";
import store from "../reducer/store";
import {useLoaderData,Form, useRouteLoaderData } from "react-router-dom";

export async function loader({params}){
  const tasks = store.getState();
  const element = tasks.tasks.find(e => e.id === params.taskid);
  console.log(element);
  return {element};
}



function Task() {
    const {element} = useRouteLoaderData("taskinfo");  
    return (

        <div id="task">
        <div>
        <h1>
            {element.name}
        </h1>
        <p>         
            {element.content}
        </p>        
        <p>         
            {element.isDone ? "complited" : "not complited"}
        </p>
        <p>         
            {element.id}
        </p>
        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="delete"
            action="destroy"
            onSubmit={(event) => {
              if (
                !window.confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
      </div>
    )
}

export default Task;