import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
 import Errorboundary from "../components/Errorboundary/Errorboundary";

const MainLayout = () => {
  return (
    <>
    <Errorboundary>
      <Navbar />
      </Errorboundary>

       <Errorboundary>
      <Outlet />
      </Errorboundary>

      <Errorboundary>
      <Footer />
      </Errorboundary>
    </>
  );
};

export default MainLayout;