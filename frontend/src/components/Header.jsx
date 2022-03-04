import React from "react";
import { Link } from "react-router-dom";
import client from "../utils/featherApp";

const Header = ({ login }) => {
    const handleLogout = () => {
        client.logout();
        localStorage.removeItem("feathers-jwt");
    };
    return (
        <header className="header">
            <div className="logo">Todofy</div>
            <ul>
                {login ? (
                    <>
                        <li>
                            <span>{login.user.name}</span>
                        </li>
                        <li>
                            <button className="btn" onClick={handleLogout}>
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </>
                )}
            </ul>
        </header>
    );
};

export default Header;
