import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function NavMenu() {
  return (
    <Fragment>
      <div class="top-row pl-4 navbar navbar-dark">
        <a class="navbar-brand" href="">
          MFLReskin
        </a>
        <button class="navbar-toggler" onclick="ToggleNavMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="@NavMenuCssClass" onclick="ToggleNavMenu">
        <ul class="nav flex-column">
          <li class="nav-item px-3">
            <Link class="nav-link" to="/">
              <span class="oi oi-home" aria-hidden="true"></span> Home
            </Link>
          </li>
          <li class="nav-item px-3">
            <Link class="nav-link" to="/login">
              <span class="oi oi-list-rich" aria-hidden="true"></span> Login
            </Link>
          </li>
          <li class="nav-item px-3">
            <Link class="nav-link" to="/load-players">
              <span class="oi oi-list-rich" aria-hidden="true"></span> Load
              Players
            </Link>
          </li>
          <li class="nav-item px-3">
            <Link class="nav-link" to="/my-team">
              <span class="oi oi-list-rich" aria-hidden="true"></span> My Team
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
