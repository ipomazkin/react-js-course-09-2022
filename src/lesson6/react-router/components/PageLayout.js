/**
 * @description The PageLayout component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from "react-router-dom";

export function PageLayout({ children }) {
  return (
    <div className="">
      <header>
        <nav>
          <ul>
            <li><NavLink to="/">Home page</NavLink></li>
            <li><NavLink to="/posts">Posts</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        TheTeam 2022
      </footer>
    </div>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node
};

PageLayout.defaultProps = {};
