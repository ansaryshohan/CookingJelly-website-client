import React from 'react';

const CookingMethod = ({steps}) => {
  const{step,work}=steps;
  return (
    <div className='mb-5'>
      <h2>{step}</h2>
      <p>{work}</p>
    </div>
  );
};

export default CookingMethod;