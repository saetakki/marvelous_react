import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Character from "./pages/Character";

const routerData = [
{
    id: 0,
    path: "/",
    label: "Home",
    element: <Home />,
    withAuth: true,
},
  {
    id: 1,
    path: "/character/:id",
    label: "character",
    element: <Character />,
    withAuth: true,
  },
];

export const routers = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: <Layout>{router.element}</Layout>
    };
  })
);