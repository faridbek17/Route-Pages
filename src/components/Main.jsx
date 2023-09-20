import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../utils/routes";

function Main() {
  return (
    <main className="main container">
      <Routes>
        {routes.map((item) => {
          return (
            <Route key={item.id} path={item.path} element={item.element} />
          );
        })}

        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </main>
  );
}

export default Main;
