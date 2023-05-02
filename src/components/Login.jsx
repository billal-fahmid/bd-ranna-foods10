import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const {loginUser} = useContext(AuthContext);
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin =(e)=>{
        e.preventDefault();
        console.log(email,password)
        loginUser(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-[#a82d49] underline">
                    Sign in
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            onChange={(e) =>setEmail(e.target.value)}
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
                            onChange={(e)=>setPassword(e.target.value)}
                            type="password"
                            name='password'
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-[#a82d49] focus:ring-[#a82d49] focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-black hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button onClick={handleLogin} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#a82d49] rounded-md hover:bg-[#a82d49] focus:outline-none focus:bg-[#a82d49]">
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
            </div>
        </div>
    );
};

export default Login;