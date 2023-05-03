import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Login = () => {

    const { loginUser ,googleSigin,githubSignin} = useContext(AuthContext);
    const [error , setError] =useState('')
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        setError('')
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;

        e.preventDefault();
        console.log(email, password)
        if(!email){
            return setError('Please Provide a valid Email')
        }else if(!password || password.length< 6){
            return setError('Please a password & must be 6 character long')
        }
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
                updateProfile(loggedUser, {
                    displayName: name, photoURL: photoUrl
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                navigate(from, { replace: true });

            })
            .catch(err => {
                console.log(err)
                setError(err.message)
            })
    }
    const handleGoogleSigin =()=>{
        setError('')
        googleSigin()
        .then(result =>{
            const loggedUser =result.user;
            console.log(loggedUser);

            console.log(loggedUser?.photoURL)
            // updateProfile(loggedUser, {
            //     displayName: name, photoURL:loggedUser?.photoURL
            //   }).then(() => {
            //     // Profile updated!
            //     // ...
            //   }).catch((error) => {
            //     // An error occurred
            //     // ...
            //   });
            navigate(from, { replace: true });
        })
        .catch(err =>{
            console.log(err)
            setError(err.message)
        })
    }
    const handleGithubSignin=()=>{
        setError('')
        githubSignin()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            // updateProfile(loggedUser, {
            //     displayName: name, photoURL: photoUrl
            //   }).then(() => {
            //     // Profile updated!
            //     // ...
            //   }).catch((error) => {
            //     // An error occurred
            //     // ...
            //   });
            navigate(from, { replace: true });
        })
        .catch(err => {
            console.log(err)
            setError(err.message)
        })
    }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-[#a82d49] underline">
                    Sign in
                </h1>
                <form onSubmit={handleLogin} className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            // onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            name='email'
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-[#a82d49] focus:ring-[#a82d49] focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            // onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name='password'
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-[#a82d49] focus:ring-[#a82d49] focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <p className='text-red-500 text-xs font-semibold'>{error}</p>
                    <a
                        href="#"
                        className="text-xs text-black hover:underline"
                    >
                        Forget Password?
                    </a>

                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#a82d49] rounded-md hover:bg-[#a82d49] focus:outline-none focus:bg-[#a82d49]">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link
                        to='/register'
                        href="#"
                        className="font-medium text-[#a82d49] hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full" />
                    <p className="px-3 ">OR</p>
                    <hr className="w-full" />
                </div>
                <div className="my-6 space-y-2">
                    <button
                        onClick={handleGoogleSigin}
                        aria-label="Login with Google"
                        type="button"
                        className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="w-5 h-5 fill-current"
                        >
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>
                    <button
                        onClick={handleGithubSignin}
                        aria-label="Login with GitHub"
                        role="button"
                        className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="w-5 h-5 fill-current"
                        >
                            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                        </svg>
                        <p>Login with GitHub</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;