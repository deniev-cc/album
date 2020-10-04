import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./style.scss";

const Nav = () => {
    const { isAuth } = useGlobalContext();

    const buildLinks = () => {
        if (isAuth) {
            return [
                { to: "/123", value: "Альбомы" },
            ];
        }

        return [
            { to: "/login", value: "Вход" },
            { to: "/register", value: "Регистрация" },
        ];
    };

    const renderLinks = () => {
        return buildLinks().map(({
           to,
           value
        }, i) => {
            return (
                <li key={i}  className="nav-item">
                    <NavLink to={to} className="nav-link">
                        { value }
                    </NavLink>
                </li>
            )
        });
    };

    return (
        <ul className="nav justify-content-end">
            { renderLinks() }
        </ul>
    );
};

export default Nav;