import React from "react";
import { isNull } from "lodash";
import "./style.scss";

const ErrorMessage = ({ message }) => {
    console.log(message)
    if (isNull(message)) {
        return null;
    }

    return <p className="error-message">{ message }</p>;
};

export default ErrorMessage;