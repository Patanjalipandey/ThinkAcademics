import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBarMenu } from '../data/Data'
import { IoSearchSharp } from "react-icons/io5";
import { PiShoppingCartBold } from "react-icons/pi";
import { BiMenuAltRight } from "react-icons/bi";
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {

    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check login status on component mount
    useEffect(() => {
        const checkLogin = () => {
            const token = localStorage.getItem("token");
            setIsLoggedIn(!!token);
        };

        checkLogin();

        // Listen for changes in localStorage (login/logout in any tab)
        window.addEventListener("storage", checkLogin);

        return () => {
            window.removeEventListener("storage", checkLogin);
        };
    }, []);

    // Logout Handler
    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate("/");
    };
    return (
        <>
            <nav>
                <div className="container flex justify-between items-center py-8">
                    {/** Logo section */}
                    <div className="text-3xl font-bold text-gray-800">
                        <span className="italic text-yellow-500">Game</span>Zone
                    </div>

                    {/** Menu section */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-6 text-gray-800 font-semibold'>
                            {
                                NavBarMenu.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <a href={item.link} className='inline-block py-1 px-3 hover:text-primary font-semibold'>{item.title}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {/** Icon section */}
                    <div className='flex items-center gap-4'>
                        <button>
                            <IoSearchSharp onClick={() => navigate("/collection")} className='text-2xl text-gray-800 hover:text-primary transition duration-300' />
                        </button>
                        <button onClick={() => {
                            if (isLoggedIn) {
                                navigate("/cart");
                            } else {
                                alert("Please login to view your cart.");
                                navigate("/login");
                            }
                        }}>
                            <PiShoppingCartBold className='text-2xl text-gray-800 hover:text-primary transition duration-300' />
                        </button>
                        {!isLoggedIn ? (
                            <button
                                onClick={() => navigate("/login")}
                                className='hover:bg-blue-500 text-blue-500 font-semibold hover:text-white rounded-md px-4 py-1 duration-200 hidden md:block'
                            >
                                Login/Signup
                            </button>

                        ) : (
                            <button
                                onClick={handleLogout}
                                className='hover:bg-blue-500 text-blue-500 font-semibold hover:text-white rounded-md px-4 py-1 duration-200 hidden md:block'
                            >
                                Logout
                            </button>

                        )}
                    </div>
                    {/** Toggle section */}
                    <div className='md:hidden' onClick={() => setOpen(!open)}>
                        <BiMenuAltRight className='text-3xl' />
                    </div>
                </div>
            </nav>
            {/** Responsive Menu */}
            <ResponsiveMenu open={open} />

        </>
    )
}

export default Navbar