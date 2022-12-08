import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "./layout.scss";
var Layout = function (_a) {
    var children = _a.children;
    var theme = useContext(ThemeContext).theme;
    return (React.createElement("div", { className: "layout-container" },
        React.createElement("div", { className: theme },
            React.createElement("div", { className: "calculator-container" }, children))));
};
export default Layout;
