import React, { Children } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./footer";

const Layout = ({ children }) => {
  console.log("content == ", children);
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
