import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/manage">
            Manage Page
          </Link>
        </li>
        <li>
          <Link to="/responses">
            Responses Page
          </Link>
        </li>
        <li>
          <Link to="/frontPage">
            Front Page
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
