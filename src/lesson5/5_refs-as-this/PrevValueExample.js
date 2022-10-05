/**
 * @description The PrevValueExample component.
 */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export function PrevValueExample(props) {
  const [postId, setPostId] = useState(null)

  const prevPostIdRef = useRef(postId)

  useEffect(() => {
    const currentPostId = postId
    const prevPostId = prevPostIdRef.current

    console.log(currentPostId, prevPostId)
  }, [postId])

  useEffect(() => {
    const currentPostId = postId
    const prevPostId = prevPostIdRef.current

    console.log(currentPostId, prevPostId)
  }, [postId])

  useEffect(() => {
    prevPostIdRef.current = postId
  }, [postId])

  return (
    <div className="">
      <ul>
        <li>Post #1: <button onClick={() => setPostId(1)}>select</button></li>
        <li>Post #2: <button onClick={() => setPostId(2)}>select</button></li>
        <li>Post #3: <button onClick={() => setPostId(3)}>select</button></li>
      </ul>
    </div>
  );
}

PrevValueExample.propTypes = {};

PrevValueExample.defaultProps = {};
