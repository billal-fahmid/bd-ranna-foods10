import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {

    const {user,logout} = useContext(AuthContext);
    console.log(user)

    const handleLogout =()=>{
        logout()
        .then(result=>{
            console.log('Logout Successfull')
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-[#a82d49] font-semibold text-xl">Ranna-Banna</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#a82d49] font-semibold">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/chefs'>Chefs</Link></li>
                    <li><Link to='/blog'>Blogs</Link></li>
                    {user?<li><button onClick={handleLogout}>Logout</button></li>:
                    <li><Link to='/login'>Login</Link></li>}
                    <li><Link to='/register'>Register</Link></li>


                </ul>
            </div>
            <div className="navbar-end">
                <span>{user?.email}</span>
                <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='img is coming'/>
                </div>
            </div>
        </div>
    );
};

export default Header;