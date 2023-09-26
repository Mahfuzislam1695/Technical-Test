import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../view/pages/ErrorPage/ErrorPage";
import DisplayError from "../view/pages/ErrorPage/DisplayError";
import Main from "../Layout/Main";
import UsersPage from "../view/pages/UsersPage/UsersPage";
import UserDetailsPage from "../view/pages/UsersPage/UserDetailsPage";

const router = createBrowserRouter([
  {
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },

  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <UsersPage />,
      },
      {
        path: "/user/:userId",
        element: <UserDetailsPage></UserDetailsPage>,
      },
    ],
  },
]);

export default router;
