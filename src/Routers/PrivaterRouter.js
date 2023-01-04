import React from 'react';

const PrivaterRouter = ({children}) => {
  if(1<10){
    return <div>loading</div>;
  }
  return children;
};

export default PrivaterRouter;