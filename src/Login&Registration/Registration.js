import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import HeadTitle from '../Shared/HeadTitle';

const Registration = () => {
  const { createUser, updateProfileInfo } = useContext(AuthContext)
  const navigate = useNavigate()

  const [userInfo, setUserInfo] = useState({
    fullName: "",
    photoUrl: "",
    email: "",
    password: ""
  })
  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
    overall: ""
  })

  // handle name is here
  const handleName = (e) => {
    const name = e.target.value;
    setUserInfo({ ...userInfo, fullName: name })
  }

  // handle photo url
  const handlePhotUrl = (e) => {
    const photo = e.target.value;
    setUserInfo({ ...userInfo, photoUrl: photo })
  }

  // email error handling here..
  const handleEmail = (e) => {
    const email = e.target.value;
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      setError({ ...error, emailError: "please provide a valid email" })
      setUserInfo({ ...userInfo, email: "" })
    } else {
      setError({ ...error, emailError: "" })
      setUserInfo({ ...userInfo, email: email })
    }
  }

  // handlings password error here...
  const handlePassword = (e) => {
    const password = e.target.value;

    if (password.length < 6) {
      setError({ ...error, passwordError: "password should be of 6 character" })
      setUserInfo({ ...userInfo, password: "" })
    }
    else if (!/[A-Z]/.test(password)) {
      setError({ ...error, passwordError: "password should have a Capital Letter" })
      setUserInfo({ ...userInfo, password: "" })
    }
    else if (!/[^A-Za-z0-9]/.test(password)) {
      setError({ ...error, passwordError: "password should have a special character" })
      setUserInfo({ ...userInfo, password: "" })
    }
    else {
      setError({ ...error, passwordError: "" })
      setUserInfo({ ...userInfo, password: password })
    }
  }

  // console.log( userInfo,error);


  const handleOnSubmit = (event) => {
    event.preventDefault()
    const form = event.target

    createUser(userInfo.email, userInfo.password)
      .then((result) => {
        const user = result.user;
        // console.log('from create user', user);

        if (user.uid) {
          // updateing profile name and photourl
          updateProfileInfo(userInfo.fullName, userInfo.photoUrl)
            .then(() => { })
            .catch(error => { toast.error(error) })
        }

        form.reset()
        navigate('/')
        // console.log(user);
      })

      .catch(err => {
        toast.error(`${err}`)
      })

  }

  return (
    <div className="relative">
      {/* head title component */}
      <HeadTitle title="Register"/>
      <img
        src="https://i.ibb.co/nwcZGmQ/slider1.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-80 bg-[#E1D7C6]">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold tracking-tight text-[#0E5E6F] sm:text-4xl sm:leading-none">
                Registration
              </h2>
              <p className="max-w-2xl mb-4 text-base text-black md:text-xl">
                Create an account for easy access to your favourite content and receive our exclusive newsletters.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>

            {/* registration form starts from here */}
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-3xl font-bold text-[#579BB1] sm:text-center sm:mb-6 sm:text-2xl">
                  Registration!
                </h3>
                <form onSubmit={handleOnSubmit}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="name"
                      className="inline-block mb-1 font-medium"
                    >
                      Your Full Name
                    </label>
                    <input
                      placeholder="Full Name"
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-blue-300 focus:outline-none focus:shadow-outline"
                      name="name"
                      onChange={handleName}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='photoUrl'
                      className="inline-block mb-1 font-medium"
                    >
                      PhotoURL
                    </label>
                    <input
                      placeholder="your photo url here"
                      type="text"
                      onChange={handlePhotUrl}
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-blue-300 focus:outline-none focus:shadow-outline"
                      name='photUrl'
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium"
                    >
                      Email
                    </label>
                    <input
                      placeholder="john.doe@example.org"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-blue-300 focus:outline-none focus:shadow-outline"
                      name="email"
                      onChange={handleEmail}
                    />
                    {error.emailError ? <p className='text-red-600'>{error.emailError}</p> : <></>}
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      Password
                    </label>
                    <input
                      placeholder="password"
                      required
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-blue-300 focus:outline-none focus:shadow-outline"
                      name="password"
                      onChange={handlePassword}
                    />
                    {error.passwordError ? <p className='text-red-600'>{error.passwordError}</p> : <></>}
                  </div>
                  <div className="flex items-center justify-center w-full mt-5">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-2/4 h-12 px-6  mx-auto font-semibold tracking-wide transition duration-200 rounded shadow-md  bg-[#579BB1] text-[#E1D7C6]  hover:bg-[#579] border-[#579] hover:border-[#579]focus:shadow-outline focus:outline-none"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
              <p className="text-base text-center sm:px-6 dark:text-gray-400">Already have an account?
                <Link
                  to='/register'
                  className="link link-hover text-[#579BB1] font-semibold">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;