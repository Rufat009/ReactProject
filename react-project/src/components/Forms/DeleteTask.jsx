import { redirect } from "react-router-dom";
import { deleteTask } from "../reducer/slicer";
import store from "../reducer/store"

export async function action({ params }) {
    console.log("delete");
    console.log(params.taskid);
    store.dispatch(deleteTask(params.taskid));
    return redirect("/");
  }