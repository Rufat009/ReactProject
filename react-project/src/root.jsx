import { Outlet, useLoaderData,Form } from "react-router-dom";
import { useSelector,useDispatch} from 'react-redux';
import store from "./components/reducer/store";
import { Link } from "react-router-dom";
import { addTask,deleteTask,updateTask } from "./components/reducer/slicer";

export async function loader(){
  const tasks = store.getState();
  console.log(tasks);
  return tasks;
}

export async function action() {
  return store.dispatch(addTask({
    name: "unknow",
    content: "unknow",
    isDone: false,
    id: crypto.randomUUID()
}))
}

export default function Root() {
    const handleCheckboxChange = (task, isDone) => {
      store.dispatch(updateTask({
        id:task.id,
        name:task.name,
        content:task.content,
        isDone: isDone,
      }))
    }
    const {tasks} = useLoaderData();
    return (
      <>
      
        <div id="sidebar">
          <div>
            <form id="search-form" role="search">
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>   
          <nav>
          {tasks.length ? (
            <ul>
              {tasks.map((task) => (
                <li key={task.id}>
                  <Link to={`tasks/${task.id}`}>                   
                      <>
                        {task.name}
                      </>                                  
                  </Link>
                  <div>
          <Form action="edit">
          <Link to={`tasks/${task.id}/edit`}>                   
              <button type="submit">Edit</button>                        
          </Link>
          </Form>
           
          <Form
            method="delete"
            onSubmit={(event) => {
              if (
                !window.confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }else{
                  store.dispatch(deleteTask(task.id));
              }
            }}
          >        
            <button type="submit">Delete</button>                 
          </Form>
        
          <label>
          
        <span>is done</span>
          <input
            type="checkbox"
            name="isdone"            
            defaultChecked={task.isDone}
            onChange={(e) => handleCheckboxChange(task,e.target.checked)}
          />
      </label>
        </div>
                </li>
              ))}             
            </ul>
          ) : (
            <p>
              <i>No task</i>
            </p>
          )}
        </nav>   
        </div>
        <div>
            <Outlet/>
        </div> 
        </>
    )
}

