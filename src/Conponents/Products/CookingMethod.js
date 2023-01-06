import React from 'react';

const CookingMethod = ({steps}) => {
  const{step,work}=steps;
  return (
    <div className='mb-5'>
      <h2 className='text-xl font-semibold mb-2'>{step}</h2>
      <p>{work}</p>
    </div>
  );
};

export default CookingMethod;