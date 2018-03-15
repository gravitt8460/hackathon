"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _lottery = require("../lottery");

var _lottery2 = _interopRequireDefault(_lottery);

var _web = require("../web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/max/Documents/no3p/hackathon/components/EnterLottery.js";


var EnterLottery = function (_Component) {
  (0, _inherits3.default)(EnterLottery, _Component);

  function EnterLottery() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EnterLottery);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnterLottery.__proto__ || (0, _getPrototypeOf2.default)(EnterLottery)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loading: false,
      errorMessage: ""
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var lottery, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                lottery = (0, _lottery2.default)(_this.props.address);

                _this.setState({ loading: true, errorMessage: "" });

                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.t0 = lottery.methods.enter();
                _context.t1 = accounts[0];
                _context.next = 11;
                return lottery.methods.entryFee().call();

              case 11:
                _context.t2 = _context.sent;
                _context.t3 = {
                  from: _context.t1,
                  value: _context.t2
                };
                _context.next = 15;
                return _context.t0.send.call(_context.t0, _context.t3);

              case 15:
                _routes.Router.replaceRoute("/lotteries/" + _this.props.address);
                _context.next = 22;
                break;

              case 18:
                _context.prev = 18;
                _context.t4 = _context["catch"](3);

                console.log(_context.t4);
                _this.setState({ errorMessage: _context.t4.message });

              case 22:
                _this.setState({ loading: false });

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 18]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(EnterLottery, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oops!", content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "Enter Lottery"));
    }
  }]);

  return EnterLottery;
}(_react.Component);

exports.default = EnterLottery;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW50ZXJMb3R0ZXJ5LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkxvdHRlcnkiLCJ3ZWIzIiwiUm91dGVyIiwiRW50ZXJMb3R0ZXJ5Iiwic3RhdGUiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibG90dGVyeSIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJlbnRlciIsImVudHJ5RmVlIiwiY2FsbCIsImZyb20iLCJ2YWx1ZSIsInNlbmQiLCJyZXBsYWNlUm91dGUiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTyxBQUFTOztBQUMvQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7Ozs7Ozs7d05BQ0osQTtlQUFRLEFBQ0csQUFDVDtvQkFBYyxBLEFBRlI7QUFBQSxBQUNOLGEsQUFJRjsyRkFBVyxpQkFBQSxBQUFNLE9BQU47cUJBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBQUEsQUFBTSxBQUNBO0FBRkcsMEJBRU8sdUJBQVEsTUFBQSxBQUFLLE1BRnBCLEFBRU8sQUFBbUIsQUFFbkM7O3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBSnRCLEFBSVQsQUFBYyxBQUErQjs7Z0NBSnBDO2dDQUFBO3VCQU9nQixjQUFBLEFBQUssSUFQckIsQUFPZ0IsQUFBUzs7bUJBQTFCO0FBUEMsb0NBQUE7OEJBUUQsUUFBQSxBQUFRLFFBUlAsQUFRRCxBQUFnQjs4QkFDZCxTQVRELEFBU0MsQUFBUztnQ0FUVjt1QkFVUSxRQUFBLEFBQVEsUUFBUixBQUFnQixXQVZ4QixBQVVRLEFBQTJCOzttQkFWbkM7dUNBQUE7O0FBQUEsaUNBVUw7QUFWSyxrQ0FBQTtBQVNMO2dDQVRLO21DQUFBLEFBUXVCLGdDQVJ2Qjs7bUJBWVA7K0JBQUEsQUFBTyw2QkFBMkIsTUFBQSxBQUFLLE1BWmhDLEFBWVAsQUFBNkM7Z0NBWnRDO0FBQUE7O21CQUFBO2dDQUFBO2dEQWNQOzt3QkFBQSxBQUFRLGFBQ1I7c0JBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQWZ2QixBQWVQLEFBQWMsQUFBb0I7O21CQUVwQztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQWpCUCxBQWlCVCxBQUFjLEFBQVc7O21CQWpCaEI7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7Ozs7Ozs2QkFvQkYsQUFDUDs2QkFDRSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDtvQkFBbEQ7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DO29CQUFwQztzQkFBQTtBQUFBO1NBSEosQUFDRSxBQUVFLEFBS0w7Ozs7O0FBbkN3QixBLEFBc0MzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJFbnRlckxvdHRlcnkuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbWF4L0RvY3VtZW50cy9ubzNwL2hhY2thdGhvbiJ9