/**
 * @description The AnimationExample component.
 */
import React, { useEffect, useRef, useState } from 'react';
import gsap from "gsap";

export function AnimationExample(props) {
  const [animationPlayed, setAnimationPlayed] = useState(false)

  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const item1Ref = useRef(null)
  const item2Ref = useRef(null)
  const item3Ref = useRef(null)

  useEffect(() => {
    if (animationPlayed) {
      return
    }
    setAnimationPlayed(true)

    const timeline = gsap.timeline()
    timeline.pause()

    timeline.add(
      gsap.fromTo(titleRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3 })
    )
    timeline.add(
      gsap.fromTo(descriptionRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3 }),
      "-=0.1"
    )
    timeline.add(
      gsap.fromTo(item1Ref.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3 }),
      "-=0.1"
    )
    timeline.add(
      gsap.fromTo(item2Ref.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3 }),
      "-=0.1"
    )
    timeline.add(
      gsap.fromTo(item3Ref.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3 }),
      "-=0.1"
    )

    timeline.play()
  }, [animationPlayed])

  return (
    <div className="">
      <h1 ref={titleRef}>Lorem ipsum</h1>
      <p ref={descriptionRef}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, laborum?</p>
      <ul>
        <li ref={item1Ref}>List item 1</li>
        <li ref={item2Ref}>List item 2</li>
        <li ref={item3Ref}>List item 3</li>
      </ul>

      <button onClick={() => setAnimationPlayed(false)}>Replay animation</button>
    </div>
  );
}
