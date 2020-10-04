import React from "react";
import { Redirect } from "react-router-dom";
import { isNull } from "lodash";

const Route = ({
    access,
    path,
    component: Component,
    ...rest
}) => {
    if (access) {
        return <Component { ...rest } />
    }

    return <Redirect to="/login" />
};

export default Route;