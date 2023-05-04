import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'


const Header = () => {

    const { user, logout } = useContext(AuthContext);
    console.log(user)
    console.log(user?.photoURL)

    const handleLogout = () => {
        logout()
            .then(result => {
                console.log('Logout Successfull')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="navbar flex flex-col lg:flex-row bg-base-100">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn  btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <li><NavLink className={({ isActive }) =>
                            isActive
                                ? "active"
                                : ""
                        } to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive
                                ? "active"
                                : ""
                        } to='/chefs'>Chefs</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive
                                ? "active"
                                : ""
                        } to='/blog'>Blogs</NavLink></li>
                        {user ? <li><button onClick={handleLogout}>Logout</button></li> :
                            <li><NavLink className={({ isActive }) =>
                                isActive
                                    ? "active"
                                    : ""
                            } to='/login'>Login</NavLink></li>}
                        <li><NavLink className={({ isActive }) =>
                            isActive
                                ? "active"
                                : ""
                        } to='/register'>Register</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-[#a82d49] font-semibold text-xl">BD-Ranna&Foods</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#a82d49] font-semibold">
                    <li><NavLink className={({ isActive }) =>
                        isActive
                            ? "active"
                            : ""
                    } to='/'>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                        isActive
                            ? "active"
                            : ""
                    } to='/chefs'>Chefs</NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                        isActive
                            ? "active"
                            : ""
                    } to='/blog'>Blogs</NavLink></li>
                    {/* {user ? <li><button onClick={handleLogout}>Logout</button></li> :
                        <li><NavLink className={({ isActive }) =>
                            isActive
                                ? "active"
                                : ""
                        } to='/login'>Login</NavLink></li>} */}

                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive
                                ? "active"
                                : ""
                        } to='/register'>Register</NavLink></li>


                </ul>
            </div>
            <div className="md:navbar-end">
                <span className='mr-5'>{user?.email}</span>
                {user ? <div className='flex items-center '>

                    <img data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} className="w-12 h-12 rounded-full" src={user?.photoURL} />
                    <button className='text-[#a82d49] font-bold ml-3' onClick={handleLogout}>Logout</button>
                    <Tooltip id="my-tooltip" />
                </div> :
                    <li className='list-none text-[#a82d49] font-bold'>
                        <NavLink className={({ isActive }) =>
                            isActive
                                ? "active"
                                : ""
                        } to='/login'>Login</NavLink>
                    </li>}

            </div>
        </div>
    );
};

export default Header;

// http://preview.themeforest.net/item/foodera-responsive-food-landing-page-template/full_screen_preview/24565320?_ga=2.129539084.1471079616.1682949234-1437808716.1675601804&_gac=1.187441626.1682996234.CjwKCAjwxr2iBhBJEiwAdXECw2Ce5pp1wcpZ_XWrrmDAliimdNP7B-sPpjW6XaqHomv7KCftpwnrRRoC5T8QAvD_BwE