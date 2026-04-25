import React, { Component } from "react";
import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Yellowstone from "./Yellowstone";
import Yosemite from "./Yosemite";
import GrandCanyon from "./GrandCanyon";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>National Parks</h1>

          <ul className="header">
            <li><NavLink to="/">Yellowstone</NavLink></li>
            <li><NavLink to="/stuff">Yosemite</NavLink></li>
            <li><NavLink to="/contact">Grand Canyon</NavLink></li>
          </ul>

          <div className="content">
            <Routes>
              <Route exact path="/" element={<Yellowstone />} />
              <Route path="/stuff" element={<Yosemite />} />
              <Route path="/contact" element={<GrandCanyon />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;