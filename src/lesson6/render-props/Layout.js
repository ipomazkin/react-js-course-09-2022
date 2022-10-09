/**
 * @description The Layout component.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function Layout(props) {
  const { children, renderFooter, renderHeader, renderSidebar } = props

  const [sidebarWidth, setSidebarWidth] = useState(200)

  return (
    <div className="">
      <header>{renderHeader()}</header>
      <main>
        <aside>{renderSidebar(sidebarWidth)}</aside>
        <div>{children}</div>
      </main>
      <footer>{renderFooter()}</footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  renderHeader: PropTypes.func,
  renderSidebar: PropTypes.func,
  renderFooter: PropTypes.func,
};

Layout.defaultProps = {};
