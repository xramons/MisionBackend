import React, {  } from "react";
import "./layout.scss";
var Layout = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "layout-container" },
        React.createElement("div", { className: "first-theme" },
            React.createElement("div", { className: "calculator-container" }, children))));
};
export default Layout;
