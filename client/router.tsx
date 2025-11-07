import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/Layout";
import Home from "./src/Featured/Pages/Home";
import Detail from "./src/Featured/Pages/Detail";
import Login from "./src/Featured/Pages/Login";
import Register from "./src/Featured/Pages/Register";

export const router = createBrowserRouter([
  {
    id: "1",
    path: "/",
    element: <Layout />,
    children: [
      {
        id: "2",
        path: "/",
        element: <Home/>  ,
      },
      {
        id: "3",
        path: "/detail",
        element: <Detail/>  ,
      },
      {
        id: "4",
        path: "/login",
        element: <Login/>  ,
      },
      {
        id: "5˘",
        path: "/register",
        element: <Register/>  ,
      },
    ],
  },
  {
    id: "6",
    path: "*",
    element: <div>404 Not Found</div>,
  }
]);
