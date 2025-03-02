import { Component, JSX } from "solid-js";
import { RouteSectionProps } from "@solidjs/router";
import Header from "./components/general/header";
import Footer from "./components/general/footer";

const Layout: Component<RouteSectionProps> = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
