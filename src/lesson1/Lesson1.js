/**
 * @description The Lesson1 component.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Toggler } from './Toggler'
import { ScrollWatcher } from "./ScrollWatcher";
import { Post } from "./Post";

export function Lesson1(props) {
  const [isShowSW, setIsShowSW] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)

  // const handleClick = (event) => {
  //   console.log('click', event)
  // }
  //
  // const handleChange = (event) => {
  //   console.log('change', event.target.value)
  // }

  return (
    <div className="">
      {/*<button onClick={handleClick}>click me</button>*/}
      {/*<input type="text" onChange={handleChange}/>*/}
      {/*<Toggler />*/}
      {/*<button style={{ marginTop: 50 }} onClick={() => setIsShowSW(!isShowSW)}>toggle scroll watcher</button>*/}
      {/*{isShowSW && (*/}
      {/*  <ScrollWatcher />*/}
      {/*)}*/}
      {/*{Array(100)*/}
      {/*  .fill('Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh.')*/}
      {/*  .map((str, i) => (*/}
      {/*    <div key={i}>{str}</div>*/}
      {/*  ))}*/}
      <ul>
        {[1, 2, 3].map((postId) => (
          <li key={postId}>
            <button onClick={() => setSelectedPost(postId)}>Post #{postId}</button>
          </li>
        ))}
      </ul>

      {selectedPost !== null && (
        <Post id={selectedPost} />
      )}
    </div>
  );
}

Lesson1.propTypes = {};

Lesson1.defaultProps = {};
