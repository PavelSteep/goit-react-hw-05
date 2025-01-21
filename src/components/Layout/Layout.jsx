import React from "react";
import { Outlet } from "react-router-dom";
import css from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={css.container}>
      {children}
    </div>
  );
};

export default Layout;
