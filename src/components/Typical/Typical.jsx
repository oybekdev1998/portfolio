/* eslint-disable prettier/prettier */
import React from 'react';
import Typical from 'react-typical';

function Example() {
  return (
    <Typical
      steps={['React', 1500, 'Redux', 1500, 'JavaScript', 1500, 'HTML', 1500, 'CSS', 1500, 'Tailwind', 1500]}
      loop={Infinity}
      wrapper="p"
    />
  );
}

export default Example;
