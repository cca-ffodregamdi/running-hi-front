import { Outlet } from "react-router-dom";
// import Header from "./src/component/UI/organisms/Most/header/header";
// import Footer from "./src/component/UI/organisms/Most/footer/footer";

function Layout() {
  return (
    <div>
      {/* <Header />
      <Footer /> */}
      <Outlet />
    </div>
  );
}

export default Layout;
