import React from "react";
import Indicator from "react-topbar-progress-indicator";

Indicator.config({
    barColors: {
        "0": "#46467c",
        "1.0": "#46467c"
    },
    shadowBlur: 0
});

const TopProgressBar = () => <Indicator />

export default TopProgressBar;