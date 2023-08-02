import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SelectTest from './Components/SelectTest/SelectTest';
import VersionPage from './Components/VersionUpdate/VersionUpdate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error FOUND</div>
  },

  {
    path: '/selecttests',
    element: <SelectTest />
  },

  {
    path: '/version', 
    element: <VersionPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

