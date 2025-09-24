import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  return <>{children}</>;
};

export default Layout;
