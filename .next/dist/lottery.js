"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _Lottery = require("./build/Lottery.json");

var _Lottery2 = _interopRequireDefault(_Lottery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_Lottery2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvdHRlcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkxvdHRlcnkiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFvQixBQUFwQixBQUVBOzs7Ozs7a0JBQWUsbUJBQVcsQUFDeEI7U0FBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FBc0IsS0FBSyxBQUFMLE1BQVcsa0JBQVEsQUFBbkIsQUFBdEIsWUFBcUQsQUFBckQsQUFBUCxBQUNEO0FBRkQiLCJmaWxlIjoibG90dGVyeS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYXgvRG9jdW1lbnRzL25vM3AvaGFja2F0aG9uIn0=