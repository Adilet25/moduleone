import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GGpage from "./pages/GGpage";
import TrashPage from "./pages/TrashPage";

const MainRoutes = () => {
  const FEW_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/list",
      element: <GGpage />,
      id: 2,
    },
    {
      link: "/trash",
      element: <TrashPage />,
      id: 3,
    },
  ];
  return (
    <Routes>
      {FEW_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
