/**
 * @description The AppRoutes component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { RouterProvider, createBrowserRouter, createHashRouter, createMemoryRouter, Link, NavLink } from "react-router-dom";
import { routerConfig } from "./router-config";

export function AppRoutes(props) {
  const router = createHashRouter(routerConfig)

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

AppRoutes.propTypes = {};

AppRoutes.defaultProps = {};
