import React, {useEffect} from "react";
import { Switch, Redirect } from "react-router-dom";
import Route from "./components/Route";
import Login from "./components/Login";
import Register from "./components/Register";

const Home = () => {
    return "Home"
};

const Admin = () => {
    return "Admin"
};

const Router = ({ isAuth }) => {
    const routes = [
        { path: "/", exact: true, component: Home, access: !! isAuth },
        { path: "/home", component: Home, access: true },
        { path: "/login", component: Login, access: true },
        { path: "/register", component: Register, access: true },
        { path: "/admin", component: Admin, access: !! isAuth },
    ];

    const renderRoutes = () => {
        return routes.map((props, i) => (
            <Route key={i} { ...props } />
        ))
    };

    return (
        <Switch>{ renderRoutes() }</Switch>
    );
};

export default Router;