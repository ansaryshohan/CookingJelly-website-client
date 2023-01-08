import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider';

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { displayName, photoURL, emailVerified, email } = user;
  return (
    <div className='grid place-items-center shadow-lg w-2/5 mx-auto mt-16 p-8 rounded-lg'>
      <div>
        {
          photoURL ?
            <img
              className="object-cover w-24 h-24 rounded-full shadow"
              src={photoURL}
              alt="Person"
            /> :
            <FaUserCircle className=" w-24 h-24 rounded-full shadow" />
        }

        <div className="flex flex-col justify-center mt-2">
          <p className="text-lg font-semibold">name: <span className='text-xl font-bold'>{displayName? displayName:"Unknown User"}</span></p>
          <p className="mb-4 text-xs text-gray-800">email: {email}</p>
          <p className="text-sm tracking-wide text-gray-800 flex gap-1 items-center">
            verification: {emailVerified ? <span className='text-green-600 text-lg'>Verified</span> : <span className='text-red-700 text-lg'>Not Verified</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;