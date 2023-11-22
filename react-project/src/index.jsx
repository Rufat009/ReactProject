import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './components/reducer/store'
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root,{
  loader as rootLoader,
  action as rootAction
}
from './root'

import Edit,{
  action as editAction,
} from './components/Forms/Edit';

import Task,{
  loader as taskLoader,
} from './components/TaskComponent';

import { action as taskDestroy } from './components/Forms/DeleteTask';
import ErrorPage from './components/Forms/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader:rootLoader,
    action:rootAction,
    children:[
    {
      id:"taskinfo",
      path: "tasks/:taskid",
      loader:taskLoader,
      element: <Task/>,
    },
    {
      path: "tasks/:taskid/destroy",
      action: taskDestroy,
    },
    {
      id:"taskedit",
      path: "tasks/:taskid/edit",
      element: <Edit/>,
      loader: taskLoader,
      action: editAction,
    },
  ],
}
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
