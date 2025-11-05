import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/Layout";
import Home from "./src/Featured/Pages/Home";
import Detail from "./src/Featured/Pages/Detail";

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
    ],
  },
  {
    id: "4",
    path: "*",
    element: <div>404 Not Found</div>,
  }
]);
