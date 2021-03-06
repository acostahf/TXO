// import Footer from "./footer";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <>
      <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
