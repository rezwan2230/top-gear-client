import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import userPic from '../assets/user.png'
import logo from '../assets/logo.png'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const navLink = <>
        <div className="flex gap-10 font-semibold text-lg text-white">
            <NavLink to='/'><li><a>Home</a></li></NavLink>
            {
                user && <>
                    <div className="flex gap-10">
                        <NavLink to='/addproducts'><li><a>Add products</a></li></NavLink>
                        <NavLink to='/mycart'><li><a>My Cart</a></li></NavLink>
                    </div>
                </>
            }

            <NavLink to='/login' ><li><a>Login</a></li></NavLink>
        </div>
    </>

    const handleSignOut = () => {
        logOut()
            .then(result => {
                navigate('/')
                console.log(result.user);
            })
            .then(error => console.log(error.message))
    }
    return (
        <div className="navbar bg-base-100 container mx-auto relative z-10 bg-transparent mt-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-5 z-[1] p-2 ">
                        {navLink}
                    </ul>
                </div>
                <NavLink><img className="w-[100px] h-[50px]" src={logo} alt="" /></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user && <div className="text-lg font-semibold mr-2 text-white">{user?.displayName}</div>
                }
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

                            {
                                user ? <>
                                    <img className="rounded-3xl" src={user?.photoURL} alt="" />
                                </> :
                                    <div className="w-10 rounded-full">
                                        <img src={userPic} />
                                    </div>
                            }
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-36">
                            {
                                user ? <li className="font-semibold"><a onClick={handleSignOut}>Logout</a></li> :
                                    <NavLink to="/login"><li className="font-semibold"><a>Login</a></li></NavLink>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;