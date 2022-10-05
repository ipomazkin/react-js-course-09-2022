/**
 * @description The DomApiExample component.
 */
import React, { useRef } from 'react';

export function DomApiExample(props) {
  const videoRef = useRef(null)

  const handleClickPlay = () => {
    videoRef.current?.play()
  }

  const handleClickPause = () => {
    videoRef.current?.pause()
  }

  return (
    <div className="">
      <video ref={videoRef} src="https://www.w3schools.com/html/mov_bbb.mp4" controls={false} />
      <div>
        <button onClick={handleClickPlay}>Play</button>
        <button onClick={handleClickPause}>Pause</button>
      </div>
    </div>
  );
}

