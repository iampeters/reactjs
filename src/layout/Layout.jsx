import React, { Component } from "react";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import Main from "./Main";
import Footer from "../components/footer/Footer";

export default class Layout extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Header />
          <SideBar />
          <Main />
          <Footer />
        </div>
      </div>
    );
  }
}
