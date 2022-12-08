/* eslint-disable no-eval */
import React, { useState } from "react";
var initialContextState = {
    mainText: "",
    screenText: "",
    changeMainText: function () { },
};
export var CalcContext = React.createContext(initialContextState);
var CalcContextProvider = function (_a) {
    var children = _a.children;
    var _b = useState(initialContextState.mainText), mainText = _b[0], setMainText = _b[1];
    var _c = useState(""), lastText = _c[0], setLastText = _c[1];
    var _d = useState(""), lastOperator = _d[0], setLastOperator = _d[1];
    var _e = useState(initialContextState.screenText), screenText = _e[0], setScreenText = _e[1];
    var _f = useState(false), reset = _f[0], setReset = _f[1];
    var changeMainText = function (value, isNumber, isOperator) {
        if (isNumber) {
            operations.clickButton(value);
        }
        else if (isOperator) {
            switch (value) {
                case "DEL":
                    operations.delete();
                    break;
                case "RESET":
                    operations.reset();
                    break;
                case "+":
                    operations.maths(value);
                    break;
                case "-":
                    operations.maths(value);
                    break;
                case "*":
                    operations.maths(value);
                    break;
                case "/":
                    operations.maths(value);
                    break;
                case "=":
                    operations.equal();
                    break;
                default:
                    setLastOperator("");
                    setLastText("");
                    setMainText("");
                    setReset(false);
                    setScreenText("");
                    break;
            }
        }
    };
    var operations = {
        clickButton: function (value) {
            if (reset) {
                setMainText("");
            }
            setMainText(function (prevState) { return prevState + value; });
            setReset(false);
        },
        delete: function () {
            if (mainText !== "" && !reset) {
                var newText = mainText.slice(0, -1);
                setMainText(newText);
            }
        },
        reset: function () {
            setMainText("");
            setLastText("");
            setScreenText("");
        },
        maths: function (value) { return mathOperations(value); },
        equal: function () {
            if (lastText === "") {
                setMainText(mainText);
            }
            else {
                ifOperatorDoesntMatch("");
                setLastText("");
            }
        },
    };
    var mathOperations = function (value) {
        if (lastText === "") {
            ifLastTextIsClear(value);
        }
        else if (lastOperator !== value) {
            ifOperatorDoesntMatch(value);
        }
        else {
            ifOperatorMatches(value);
        }
    };
    var ifLastTextIsClear = function (value) {
        setLastText(mainText);
        setScreenText(mainText);
        setMainText("");
        setLastOperator(value);
    };
    var ifOperatorDoesntMatch = function (value) {
        var result = eval(lastText + lastOperator + mainText);
        if (result && result.toString().length > 8) {
            result = parseFloat(result);
        }
        console.log(typeof result, result.toString().length);
        setLastText(result);
        setScreenText(screenText + lastOperator + mainText);
        setMainText(result);
        setLastOperator(value);
        setReset(true);
    };
    var ifOperatorMatches = function (value) {
        var result = eval(lastText + value + mainText);
        if (result && result.toString().length > 8) {
            result = parseFloat(result);
        }
        console.log(typeof result, result.toString().length);
        setLastText(result);
        setScreenText(screenText + value + mainText);
        setMainText(result);
        setLastOperator(value);
        setReset(true);
    };
    return (React.createElement(CalcContext.Provider, { value: { mainText: mainText, screenText: screenText, changeMainText: changeMainText } }, children));
};
export default CalcContextProvider;
