import React, {useEffect} from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Provider from "./context";
import App from "./App";
import "./style.scss";

render(
    <Provider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);