import { Outlet } from "react-router-dom";
import Footer from "../common/footer";
import Header from "../common/Header";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <div id="smooth-wrapper" className="body-bg">
        <div id="smooth-content">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Layout;
