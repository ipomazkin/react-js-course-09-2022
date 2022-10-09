/**
 * @description The ScrollWatcherExample component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { ScrollWatcher } from "./ScrollWatcher";

export function ScrollWatcherExample(props) {
  return (
    <div className="">
      {Array(100).fill(0).map((_, index) => (
        <p key={index}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut distinctio eius est, itaque laboriosam
          minima nisi quas quod sapiente.</p>
      ))}
      <h1>
        <ScrollWatcher>
          {
            ({ x, y }) => (
              <span>Scroll position is ({x}, {y})</span>
            )
          }
        </ScrollWatcher>
      </h1>
      {Array(100).fill(0).map((_, index) => (
        <p key={index}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut distinctio eius est, itaque laboriosam
          minima nisi quas quod sapiente.</p>
      ))}
    </div>
  );
}

ScrollWatcherExample.propTypes = {};

ScrollWatcherExample.defaultProps = {};
