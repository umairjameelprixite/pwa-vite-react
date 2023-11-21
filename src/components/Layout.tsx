import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <header>
        <nav>
          <div className="container">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/notes">Notes</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <div className="container content-center">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
