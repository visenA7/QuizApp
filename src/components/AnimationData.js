import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import rightAnimation from '../UI/lottie/right.json';
import wrongAnimation from '../UI/lottie/wrong.json';

const AnimationData = (props) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const showAnimation = props.result ? rightAnimation : wrongAnimation;

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: showAnimation,
    });

    return () => {
      anim.destroy();
    };
  }, [props.result]);

  return <div ref={containerRef} style={{ width: 190, height: 190, margin: '0 auto' }} />;
};

export default AnimationData;
