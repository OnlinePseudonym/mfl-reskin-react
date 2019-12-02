import React, { Fragment } from "react";

import NavMenu from "./navMenu";

export default function Master(props) {
  return (
    <div className="main container">
      <NavMenu />
      {props.children}
    </div>
  );
}
