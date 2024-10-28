import React from "react";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary pb-0"
      data-bs-theme="dark"
    >
      <ul className="navbar-nav ">
        <li className="nav-item dropdown ms-3">
          <p
            className="dropdown-toggle nav-link text-secondary-emphasis"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Bikes
          </p>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/bike/Hunter 350">
                Royal Enfield Hunter 350
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/bike/Pulsar N160">
                Bajaj Pulsar N160
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/bike/Duke 390">
                KTM Duke 390
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/bike/Classic 350">
                Royal Enfield Classic 350
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/bike/FZS-FI V3">
                Yamaha FZS-FI V3
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown ms-3">
          <p
            className="dropdown-toggle nav-link text-secondary-emphasis"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Scooters
          </p>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/bike/Pleasure Plus">
                Hero Pleasure Plus
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/bike/Activa 6G">
                Honda Activa 6G
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/bike/Dio">
                Honda Dio
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/bike/Jupiter">
                TVS Jupiter
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/bike/Fascino 125 Fi Hybrid">
                Yamaha Fascino 125 Fi Hybrid
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown ms-3">
          <p
            className="dropdown-toggle nav-link text-secondary-emphasis"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Electric Rides
          </p>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/bike/S1 Pro">
                Ola S1 Pro
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/bike/S1 X">
                Ola S1 X
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/bike/Roadster">
                Ola Roadster
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/bike/Roadster Pro">
                Ola Roadster Pro
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/bike/Chetak">
                Bajaj Chetak
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown ms-3">
          <p
            className="dropdown-toggle nav-link text-secondary-emphasis"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Bike Comparison
          </p>
          <ul className="dropdown-menu">
            <li>
              <Link
                className="dropdown-item"
                to="/compare/Classic 350/Hunter 350"
              >
                Royal Enfield Classic 350 VS Royal Enfield Hunter 350
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/compare/Shine/Splendor Plus">
                Honda Shine VS Hero Splendor Plus
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/compare/Activa 6G/Jupiter">
                Honda Activa 6G VS TVS Jupiter
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/compare/R15 V4/MT 15 V2">
                Yamaha R15 V4 VS Yamaha MT 15 V2
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/compare/Classic 350/Ronin">
                Royal Enfield Classic 350 VS TVS Ronin
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="/compare/Duke 390/Apache RTR 310"
              >
                KTM Duke 390 VS TVS Apache RTR 310
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="/compare/Duke 200/Dominar 400"
              >
                KTM Duke 200 VS Bajaj Dominar 400
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item ms-3 ">
          <Link
            className="text-secondary-emLinkhasis nav-link"
            to={"/ourchoices"}
          >
            Our Choices
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavbar;
