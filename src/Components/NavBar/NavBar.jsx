import React, { use, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { FcSportsMode } from "react-icons/fc";
import { AuthContext } from "../../Context/AuthContext";

const NavBar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/");
        toast.warn("Sign Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-2 font-extrabold text-[#129ee7]" : ""
        }
        to="/"
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-2 font-extrabold text-[#129ee7]" : ""
        }
        to="/about"
      >
        <li>About</li>
      </NavLink>
      <>
      {
        user &&       <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-2 font-extrabold text-[#129ee7]" : ""
        }
        to="/upcoming-event"
      >
        <li>Upcoming Event</li>
      </NavLink>
      }
      </>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-2 font-extrabold text-[#129ee7]" : ""
        }
        to="/contact"
      >
        <li>Contact Us</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-300 shadow-sm px-0 lg:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center">
          <p className="hidden lg:flex">
            <img
              className="w-10 h-10 text-[#129ee7]"
              src="/assets/logo_header.png"
              alt=""
            />
          </p>

          <a className="text-base lg:text-4xl text-[#129ee7] font-medium lg:font-extrabold">
            UDDOG
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{links}</ul>
      </div>
      <div className="navbar-end pr-1.5">
        <label className="swap swap-rotate mr-4 hover:text-[#129ee7]">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onChange={handleToggle} />

          {/* sun icon */}
          <svg
            className="swap-on h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        {user ? (
          <div className="dropdown">
            <div tabIndex={0}>
              <img
                className="rounded-full w-10 h-10 border-4 border-[#129ee7]"
                src={user.photoURL}
                alt=""
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu -ml-24 bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li className="hover:bg-[#129ee7] hover:text-white">
                <a>{user.displayName}</a>
              </li>
              <li className="hover:bg-[#129ee7] hover:text-white">
                <Link to="/create-event">Create Event</Link>
              </li>
              <li className="hover:bg-[#129ee7] hover:text-white">
                <Link to="/manage-event">Manage Event</Link>
              </li>
              <li className="hover:bg-[#129ee7] hover:text-white">
                <Link to="/joined-event">Joined Event</Link>
              </li>
              <li
                className="hover:bg-[#129ee7] hover:text-white"
                onClick={handleSignOut}
              >
                <Link>Sign Out</Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/auth/signIn">
            <button className="relative inline-block px-4 py-2 font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#129ee7] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#129ee7] group-hover:bg-[#129ee7]"></span>
              <span className="relative text-black group-hover:text-white">
                Sign In
              </span>
            </button>
          </Link>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default NavBar;
