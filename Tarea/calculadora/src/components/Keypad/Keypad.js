import React from 'react';
import Button from '../Button/Button';
var Keypad = function () {
    return (React.createElement("div", { className: 'calculator-keypad' },
        React.createElement(Button, { isNumber: true, isOperator: false, value: "7" }, "7"),
        React.createElement(Button, { isNumber: true, isOperator: false, value: "8" }, "8"),
        React.createElement(Button, { isNumber: true, isOperator: false, value: "9" }, "9"),
        React.createElement(Button, { isNumber: false, isOperator: true, value: "DEL", className: 'delete' }, "DEL"),
        React.createElement(Button, { isNumber: true, isOperator: false, value: "4" }, "4"),
        React.createElement(Button, { isNumber: true, isOperator: false, value: "5" }, "5"),
        React.createElement(Button, { isNumber: true, isOperator: false, value: "6" }, "6"),
        React.createElement(Button, { isNumber: false, isOperator: true, value: "+" }, "+"),
        React.createElement(Button, { isNumber: true, isOperator: false, value: "1" }, "1"),
        React.createElement(Button, { isNumber: true, isOperator: false, value: "2" }, "2"),
        React.createElement(Button, { isNumber: true, isOperator: false, value: "3" }, "3"),
        React.createElement(Button, { isNumber: false, isOperator: true, value: "-" }, "-"),
        React.createElement(Button, { isNumber: true, isOperator: false, value: "." }, "."),
        React.createElement(Button, { isNumber: true, isOperator: false, value: "0" }, "0"),
        React.createElement(Button, { isNumber: false, isOperator: true, value: "/" }, "/"),
        React.createElement(Button, { isNumber: false, isOperator: true, value: "*" }, "x"),
        React.createElement(Button, { isNumber: false, isOperator: true, value: "RESET", className: 'reset' }, "RESET"),
        React.createElement(Button, { isNumber: false, isOperator: true, value: "=", className: 'equal' }, "=")));
};
export default Keypad;
