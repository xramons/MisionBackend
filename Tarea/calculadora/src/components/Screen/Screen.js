import React, { useContext } from 'react';
import { CalcContext } from '../../contexts/CalcContext';
var Screen = function () {
    var _a = useContext(CalcContext), mainText = _a.mainText, screenText = _a.screenText;
    return (React.createElement("div", { className: 'calculator-screen' },
        React.createElement("div", { className: 'last-text' }, screenText),
        React.createElement("div", { className: 'new-text' }, mainText)));
};
export default Screen;
