import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

  return (
    <div className='relative'>
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-black opacity-30'></div>
        <Header />
        <img className='w-full h-full' src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/a9a4495f-765f-4f3d-b52c-9c9719f93e2d/AE-en-20240617-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
        <div className="absolute m-4 px-12 py-12 top-1/4  left-1/2 -translate-x-2/4 w-[400px] bg-black/[0.7] rounded-sm">
            <form action="">
                <div>
                    <h2 className='text-white font-bold text-3xl mb-8'>{isSignInForm ? "Sign In" : "Sign Up"}</h2>
                </div>
                {!isSignInForm && (
                    <div>
                        <input className="p-2 w-full mb-4 rounded-sm bg-transparent border border-gray-300" type="text" placeholder="Full Name" />
                    </div>
                )}
                <div>
                    <input className="p-2 w-full mb-4 rounded-sm bg-transparent border border-gray-300" type="text" placeholder="Email Address" />
                </div>
                <div>
                    <input className="p-2 w-full mb-4 rounded-sm bg-transparent border border-gray-300" type="password" placeholder="Password" />
                </div>
                <button className="w-full p-2 text-white bg-red-700 rounded-sm mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</button>
            </form>
            <p className='text-white'> {isSignInForm ? "New to Netflix? " : "Already Registered? "}
                <button onClick={toggleSignInForm} className='font-medium hover:underline decoration-solid bg-transparent'> 
                    {isSignInForm ? "Sign up now." : "Sign in now."}
                </button>
            </p>
        </div>
    </div>
  )
}

export default Login