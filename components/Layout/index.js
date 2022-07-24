import React from "react";
import Navbar from "./Header/Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Toaster position="bottom-center" reverseOrder={false} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
