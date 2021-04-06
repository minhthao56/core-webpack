import React from "react";
import Favicon from "react-favicon";
import ImageFavicon from "./assets/icons/favicon.ico";
import { Routers } from "./routers";

import "./App.scss";

export default function App() {
  return (
    <div className="app">
      <Favicon url={ImageFavicon} />
      <Routers />
    </div>
  );
}
