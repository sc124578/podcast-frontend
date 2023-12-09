import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Images/soul-header.png";
import "./Header.css";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="topHeader">
        <div className="logo">
          <img src={logo} alt="Soul of a Gamer Logo" className="img-responsive" />
        </div>
        </div>
        <div className="bottonHeader">
        <div className="navigation">
          {window.innerWidth < 750 ? (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="buttonBar">
              <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                <span className="navbar-toggler-icon"></span>
              </button>
              {showMenu && (
                <div className="navbar-collapse">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/Hosts" className="nav-link">
                        Hosts
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/Game-List" className="nav-link">
                        Game List
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/Game-Suggestion" className="nav-link">
                        Game Suggestion
                      </Link>
                    </li>
                    <li>
                      <Link to="/Contact" className="nav-link">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </nav>
          ) : (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="buttonBar">
              <Link to="/" className="navbar-brand">
                <button className="btn btn-outline-success" type="button">
                  Home
                </button>
              </Link>
              <Link to="/Hosts" className="navbar-brand">
                <button className="btn btn-outline-success" type="button">
                  Hosts
                </button>
              </Link>
              <Link to="/Game-List" className="navbar-brand">
                <button className="btn btn-outline-success" type="button">
                  Game List
                </button>
              </Link>
              <Link to="/Game-Suggestion" className="navbar-brand">
                <button className="btn btn-outline-success" type="button">
                  Game Suggestion
                </button>
              </Link>
              <Link to="/Contact" className="navbar-brand">
                <button className="btn btn-outline-success" type="button">
                  Contact
                </button>
              </Link>
            </nav>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
