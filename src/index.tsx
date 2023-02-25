import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Circe/stylesheet.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Basic } from "./pages/Basic";
// import { Gym } from "./pages/Gym";
// import { Room } from "./pages/Room";
import { Galileo } from "./pages/Galileo/Galileo";
import { Dont } from "./pages/Dont/Dont";
import { Employee } from "./pages/Employees/Employee";
import { Laundry } from "./pages/Laundry/Laundry";
import { Cover } from "./pages/ArticleCover/Cover";
import { InCharge } from "./pages/InCharge/InCharge";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Galileo />,
  },
  {
    path: "/dont",
    element: <Dont />,
  },
  {
    path: "/employee",
    element: <Employee />,
  },
  {
    path: "/laundry",
    element: <Laundry />,
  },
  {
    path: "/incharge",
    element: <InCharge />,
  },
  { path: "/article", element: <Cover /> },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
