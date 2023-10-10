import React from 'react'
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { UseState } from "./pages/UseState";
import { UseRef } from "./pages/UseRef";
import { UseEffect } from "./pages/UseEffect";
import { UseContext } from "./pages/UseContext/UseContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/useState",
    element: <UseState />,
  },
  {
    path: "/useEffect",
    element: <UseEffect />,
  },
  {
    path: "/useRef",
    element: <UseRef />,
  },
  {
    path: "/useContext",
    element: <UseContext />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <a href="/">Home</a>
    <RouterProvider router={router} />
  </React.StrictMode>
);
