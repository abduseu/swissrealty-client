import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root";
import AuthProvider from "./providers/AuthProvider";
import HomePage from "./pages/HomePage";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <h2>Page Not Found!!!</h2>,
    children: [
      {
        path: '/',
        element: <HomePage/>,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);