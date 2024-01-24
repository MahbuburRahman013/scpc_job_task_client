import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../home/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../login/Login";
import Registration from "../registration/Registration";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration/>
      }
    ]
  },
]);

export default router;