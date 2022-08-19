import React from 'react';
import Typical from 'react-typical';

function Example() {
  return (
    <Typical
      steps={['React', 1500, 'Redux', 1000, 'JavaScript', 1000, 'HTML', 1000, 'CSS', 1000, 'Tailwind', 1000]}
      loop={Infinity}
      wrapper="p"
    />
  );
}

export default Example;
