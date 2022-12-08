import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
var Header = function () {
    var _a = useContext(ThemeContext), theme = _a.theme, changeTheme = _a.changeTheme;
    var handleChange = function (event) {
        changeTheme(event.target.value);
    };
    return (React.createElement("div", { className: "calculator-header" },
        React.createElement("h1", { className: "calculator-title" }, "calc"),
        React.createElement("div", { className: "calculator-theme" },
            React.createElement("span", { className: "theme-title" }, "THEME"),
            React.createElement("div", { className: "themes" },
                React.createElement("div", { className: "theme-texts" },
                    React.createElement("span", null, "1"),
                    React.createElement("span", null, "2"),
                    React.createElement("span", null, "3")),
                React.createElement("div", { className: "theme-buttons", onChange: handleChange },
                    React.createElement("input", { type: "radio", name: "theme", value: "first-theme", checked: theme === "first-theme" }),
                    React.createElement("input", { type: "radio", name: "theme", value: "second-theme", checked: theme === "second-theme" }),
                    React.createElement("input", { type: "radio", name: "theme", value: "third-theme", checked: theme === "third-theme" }))))));
};
export default Header;
