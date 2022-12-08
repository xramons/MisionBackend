import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
var selectedTheme = localStorage.getItem("theme");
var initialContextState = {
    theme: selectedTheme != null ? JSON.parse(selectedTheme) : "first-theme",
    changeTheme: function () { },
};
export var ThemeContext = React.createContext(initialContextState);
var ThemeContextProvider = function (_a) {
    var children = _a.children;
    var _b = useLocalStorage("theme", initialContextState.theme), theme = _b[0], setTheme = _b[1];
    var changeTheme = function (newTheme) {
        setTheme(newTheme);
    };
    return (React.createElement(ThemeContext.Provider, { value: { theme: theme, changeTheme: changeTheme } }, children));
};
export default ThemeContextProvider;
