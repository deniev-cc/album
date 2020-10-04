import React from "react";
import Router from "./Router";
import TopProgressBar from "./components/TopProgressBar";
import { useGlobalContext } from "./context";
import { isNull } from "lodash";
import Header from "./components/Header";

const App = () => {
    const { isAuth } = useGlobalContext();

    if (isNull(isAuth)) {
        return <TopProgressBar />
    }

    return (
        <>
            <Header />
            <Router isAuth={isAuth} />
        </>
    );
};

export default App;