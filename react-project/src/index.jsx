import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './reducer/store';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root,{
  loader as rootLoader,
  action as rootAction
}
from './root';

import Edit,{
  action as editAction,
} from './components/edit';

import Task,{
  loader as taskLoader,
} from './components/Task';
import { action as taskDestroy } from './components/destroy';
import ErrorPage from './components/error-page';
import { Children } from 'react';

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
