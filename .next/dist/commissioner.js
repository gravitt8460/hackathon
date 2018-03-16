"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _Commission = require("./build/Commission.json");

var _Commission2 = _interopRequireDefault(_Commission);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_Commission2.default.interface), "0x43d5b7dd31b4de84e7b7787f47910e1b5d5ecf49");

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1pc3Npb25lci5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiQ29tbWlzc2lvbiIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUF1QixBQUF2Qjs7Ozs7O0FBQ0EsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNmLEtBQUssQUFBTCxNQUFXLHFCQUFXLEFBQXRCLEFBRGUsWUFFZixBQUZlLEFBQWpCLEFBS0E7O2tCQUFlLEFBQWYiLCJmaWxlIjoiY29tbWlzc2lvbmVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21heC9Eb2N1bWVudHMvbm8zcC9oYWNrYXRob24ifQ==