import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SelectTest from './Components/SelectTest/SelectTest';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error FOUND</div>
  },

  {
    path: '/selecttests',
    element: <SelectTest />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React>
    <RouterProvider router={router} />
  </React>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

