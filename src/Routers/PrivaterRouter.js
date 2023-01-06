import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivaterRouter = ({children}) => {
  const{user,loading}=useContext(AuthContext)
  const location= useLocation()

  if(loading){
    return <div className="flex items-center justify-center space-x-2 w-full h-[500px]">
    <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
  </div>;
  }
  if(!user|| !user.email){
    return <Navigate to='/login' from={{state:location}} replace/>
  }

  return children;
};

export default PrivaterRouter;