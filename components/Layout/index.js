import React from "react";
import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./Header/Navbar"));

const Footer = dynamic(() => import("./Footer"));
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
