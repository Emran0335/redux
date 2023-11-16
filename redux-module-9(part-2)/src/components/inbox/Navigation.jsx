import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/lws-logo-dark.svg";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../../features/auth/authSlice";

const Navigation = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userLoggedOut());
    localStorage.clear();
  };
  return (
    <nav className="border-general sticky top-0 z-40 border-b bg-violet-700 transition-colors px-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between h-16 items-center">
          <Link to="/">
            <img src={logoImage} alt="Learn with sumit" className="h-10" />
          </Link>
          <ul>
            <li className="text-white">
              <span className="cursor-pointer" onClick={logout}>
                Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
