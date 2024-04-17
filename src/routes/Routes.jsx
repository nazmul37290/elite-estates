import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root/Root";
import Home from "../components/homepage/Home";
import Register from "../components/register/Register";
import Login from "../components/login/Login";
import EstateDetails from "../components/estateDetails/EstateDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/errorPage/ErrorPage";
import UpdateProfile from "../components/updateProfile/UpdateProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",

        loader: () => fetch("/properties.json"),
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
      {
        path: "/estateDetails/:id",
        element: (
          <PrivateRoute>
            <EstateDetails></EstateDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/properties.json"),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/reviews",
      },
    ],
  },
]);
