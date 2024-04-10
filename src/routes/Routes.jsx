import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root/Root";
import Home from "../components/homepage/Home";
import Register from "../components/register/Register";
import Login from "../components/login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
