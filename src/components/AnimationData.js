import React from 'react';
import Lottie from 'react-lottie';
import * as rightAnimation from '../UI/lottie/right.json';
import * as wrongAnimation from '../UI/lottie/wrong.json';

const AnimationData = (props) => {
  //   const [isActive, setIsActive] = useState(false);

  const ShowAnimation = props.result ? rightAnimation : wrongAnimation;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ShowAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={190} width={190} />;
};

export default AnimationData;
