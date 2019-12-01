import React, { Fragment } from "react";

import NavMenu from "./navMenu";

export default function Master(props) {
  return (
    <Fragment>
      <div class="sidebar">
        <NavMenu />
      </div>

      <div class="main">
        <div class="top-row px-4">
        </div>

        <div class="content px-4">{props.children}</div>
      </div>
    </Fragment>
  );
}
