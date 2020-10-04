import React from "react";
import Router from "./Router";
import TopProgressBar from "./components/TopProgressBar";
import { useGlobalContext } from "./context";
import { isNull } from "lodash";

const App = () => {
    const { isAuth } = useGlobalContext();

    if (isNull(isAuth)) {
        return <TopProgressBar />
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Router isAuth={isAuth} />
                </div>
            </div>
        </div>
    );
};

export default App;