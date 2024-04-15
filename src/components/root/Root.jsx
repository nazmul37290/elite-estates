import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "../footer/Footer";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <ToastContainer></ToastContainer>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
