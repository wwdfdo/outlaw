import React from "react";
import Header2 from "./Header2/Header2";
// import Header from "./Header";
import "./Layout.css";

function Layout(props) {
  return (
    <div className="bg-black text-white font-normal m-0 p-0 box-border">
      {/* <Header /> */}
      <Header2 />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
