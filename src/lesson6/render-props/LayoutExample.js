/**
 * @description The LayoutExample component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from "./Layout";

export function LayoutExample(props) {
  return (
    <Layout
      renderHeader={() => (
        <nav>
          <ul>
            <li><a href="">Home page</a></li>
            <li><a href="">About</a></li>
          </ul>
        </nav>
      )}
      renderSidebar={(width) => (
        <div style={{ width }}>
          <nav>
            <ul>
              <li><a href="">Category 1</a></li>
              <li><a href="">Category 2</a></li>
            </ul>
          </nav>
        </div>
      )}
      renderFooter={() => (
        <div>TheTeem 2022</div>
      )}
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, provident?</p>
    </Layout>
  );
}

LayoutExample.propTypes = {};

LayoutExample.defaultProps = {};
