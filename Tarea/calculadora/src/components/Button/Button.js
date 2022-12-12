import React, { useContext } from 'react';
import { CalcContext } from '../../contexts/CalcContext';
var Button = function (_a) {
    var children = _a.children, className = _a.className, value = _a.value, isNumber = _a.isNumber, isOperator = _a.isOperator;
    var changeMainText = useContext(CalcContext).changeMainText;
    var handleClick = function (event) {
        var target = event.target;
        console.log('handleClick', target,isNumber, isOperator );
        changeMainText(target.value, isNumber, isOperator);
    };
    return (React.createElement("button", { value: value, onClick: handleClick, className: className }, children));
};
export default Button;
