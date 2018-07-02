import React, { Component } from "react";

class Navbar extends React {
  constructor(props) {}

  render() {
    return;
    <nav ClassNameName="navbar navbar-default navbar-fixed-top">
      <div ClassNameName="container">
        <div ClassNameName="navbar-header">
          <button
            type="button"
            ClassName="collapsed navbar-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-8"
            aria-expanded="false"
          >
            <span ClassName="sr-only">Toggle navigation</span>{" "}
            <span ClassName="icon-bar" />
            <span ClassName="icon-bar" /> <span ClassName="icon-bar" />
          </button>
          <a href="#" ClassName="navbar-brand">
            Brand
          </a>
        </div>
        <div
          ClassName="collapse navbar-collapse"
          id="bs-example-navbar-collapse-8"
        >
          <ul ClassName="nav navbar-nav">
            <li ClassName="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>;
  }
}

export default Navbar;
