import React from "react";
import Indicator from "react-topbar-progress-indicator";

Indicator.config({
    barColors: {
        "0": "#000",
        "1.0": "#000"
    },
    shadowBlur: 0
});

const TopProgressBar = () => <Indicator />

export default TopProgressBar;