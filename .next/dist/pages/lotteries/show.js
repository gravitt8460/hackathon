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

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _lottery = require("../../lottery");

var _lottery2 = _interopRequireDefault(_lottery);

var _semanticUiReact = require("semantic-ui-react");

var _EnterLottery = require("../../components/EnterLottery");

var _EnterLottery2 = _interopRequireDefault(_EnterLottery);

var _PickWinner = require("../../components/PickWinner");

var _PickWinner2 = _interopRequireDefault(_PickWinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/max/Documents/no3p/hackathon/pages/lotteries/show.js?entry";


var LotteryShow = function (_Component) {
  (0, _inherits3.default)(LotteryShow, _Component);

  function LotteryShow() {
    (0, _classCallCheck3.default)(this, LotteryShow);

    return (0, _possibleConstructorReturn3.default)(this, (LotteryShow.__proto__ || (0, _getPrototypeOf2.default)(LotteryShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(LotteryShow, [{
    key: "renderCards",
    value: function renderCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          entryFee = _props.entryFee,
          playerCount = _props.playerCount,
          isCompleted = _props.isCompleted,
          winner = _props.winner,
          amountWon = _props.amountWon;

      console.log("iscompleted: ", isCompleted);
      var isCompletedStr = "";
      if (isCompleted) {
        isCompletedStr = "Closed";
      } else {
        isCompletedStr = "Open";
      }
      var items = [{
        header: manager,
        meta: "Lottery Manager",
        description: "The manager created the lottery and decides when to issue a winner.",
        style: { overflowWrap: "break-word" }
      }, {
        header: entryFee,
        meta: "Lottery Entry Fee (wei)",
        description: "Entry fee is the amount of wei required to enter the lottery.",
        style: { overflowWrap: "break-word" }
      }, {
        header: balance,
        meta: "Balance (wei)",
        description: "The amount of wei available to win.",
        style: { overflowWrap: "break-word" }
      }, {
        header: playerCount,
        meta: "Number of Players",
        description: "Number of Players entered into the Lottery",
        style: { overflowWrap: "break-word" }
      }, {
        header: winner,
        meta: "Winner",
        description: "Winner of the Lottery",
        style: { overflowWrap: "break-word" }
      }, {
        header: isCompletedStr,
        meta: "Lottery Status",
        description: "Is the lottery open for entry or has it been closed (winner selected)",
        style: { overflowWrap: "break-word" }
      }, {
        header: amountWon,
        meta: "Amount Won",
        description: "If lottery is closed, how much did the winner win?",
        style: { overflowWrap: "break-word" }
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Lottery Details"), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement(_EnterLottery2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }), _react2.default.createElement(_PickWinner2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var lottery, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                lottery = (0, _lottery2.default)(props.query.address);
                _context.next = 3;
                return lottery.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt("return", {
                  address: props.query.address,
                  entryFee: summary[0],
                  balance: summary[1],
                  playerCount: summary[2],
                  isCompleted: summary[3],
                  winner: summary[4],
                  manager: summary[5],
                  amountWon: summary[6]
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return LotteryShow;
}(_react.Component);

exports.default = LotteryShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xvdHRlcmllcy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiTG90dGVyeSIsIkNhcmQiLCJHcmlkIiwiRW50ZXJMb3R0ZXJ5IiwiUGlja1dpbm5lciIsIkxvdHRlcnlTaG93IiwicHJvcHMiLCJiYWxhbmNlIiwibWFuYWdlciIsImVudHJ5RmVlIiwicGxheWVyQ291bnQiLCJpc0NvbXBsZXRlZCIsIndpbm5lciIsImFtb3VudFdvbiIsImNvbnNvbGUiLCJsb2ciLCJpc0NvbXBsZXRlZFN0ciIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJsb3R0ZXJ5IiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7O2tDQWlCVTttQkFTUixLQVRRLEFBU0g7VUFURyxBQUVWLGlCQUZVLEFBRVY7VUFGVSxBQUdWLGlCQUhVLEFBR1Y7VUFIVSxBQUlWLGtCQUpVLEFBSVY7VUFKVSxBQUtWLHFCQUxVLEFBS1Y7VUFMVSxBQU1WLHFCQU5VLEFBTVY7VUFOVSxBQU9WLGdCQVBVLEFBT1Y7VUFQVSxBQVFWLG1CQVJVLEFBUVYsQUFHRjs7Y0FBQSxBQUFRLElBQVIsQUFBWSxpQkFBWixBQUE2QixBQUM3QjtVQUFJLGlCQUFKLEFBQXFCLEFBQ3JCO1VBQUEsQUFBSSxhQUFhLEFBQ2Y7eUJBQUEsQUFBaUIsQUFDbEI7QUFGRCxhQUVPLEFBQ0w7eUJBQUEsQUFBaUIsQUFDbEI7QUFDRDtVQUFNO2dCQUNKLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUlJLEFBQ0Y7ZUFBTyxFQUFFLGNBTkMsQUFDWixBQUtTLEFBQWdCO0FBTHpCLEFBQ0UsT0FGVTtnQkFRWixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFJSSxBQUNGO2VBQU8sRUFBRSxjQWJDLEFBUVosQUFLUyxBQUFnQjtBQUx6QixBQUNFO2dCQU1GLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUdlLEFBQ2I7ZUFBTyxFQUFFLGNBbkJDLEFBZVosQUFJUyxBQUFnQjtBQUp6QixBQUNFO2dCQUtGLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUdlLEFBQ2I7ZUFBTyxFQUFFLGNBekJDLEFBcUJaLEFBSVMsQUFBZ0I7QUFKekIsQUFDRTtnQkFLRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFHZSxBQUNiO2VBQU8sRUFBRSxjQS9CQyxBQTJCWixBQUlTLEFBQWdCO0FBSnpCLEFBQ0U7Z0JBS0YsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQUhGLEFBSUksQUFDRjtlQUFPLEVBQUUsY0F0Q0MsQUFpQ1osQUFLUyxBQUFnQjtBQUx6QixBQUNFO2dCQU1GLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUdlLEFBQ2I7ZUFBTyxFQUFFLGNBNUNiLEFBQWMsQUF3Q1osQUFJUyxBQUFnQixBQUkzQjtBQVJFLEFBQ0U7OzJDQU9HLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0EsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxvQ0FBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUF5QjtBQUF6QjtjQURGLEFBQ0UsQUFBeUIsQUFBSyxBQUU5QixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx3Q0FBYSxTQUFTLEtBQUEsQUFBSyxNQUE1QixBQUFrQztvQkFBbEM7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyxzQ0FBVyxTQUFTLEtBQUEsQUFBSyxNQUExQixBQUFnQztvQkFBaEM7c0JBUlIsQUFDRSxBQUVFLEFBR0UsQUFFRSxBQUtUO0FBTFM7Ozs7OzsyR0E5Rm1CLEE7Ozs7O21CQUNyQjtBLDBCQUFVLHVCQUFRLE1BQUEsQUFBTSxNLEFBQWQsQUFBb0I7O3VCQUNkLFFBQUEsQUFBUSxRQUFSLEFBQWdCLGFBQWhCLEFBQTZCLEE7O21CQUE3QztBOzsyQkFHSyxNQUFBLEFBQU0sTUFEVixBQUNnQixBQUNyQjs0QkFBVSxRQUZMLEFBRUssQUFBUSxBQUNsQjsyQkFBUyxRQUhKLEFBR0ksQUFBUSxBQUNqQjsrQkFBYSxRQUpSLEFBSVEsQUFBUSxBQUNyQjsrQkFBYSxRQUxSLEFBS1EsQUFBUSxBQUNyQjswQkFBUSxRQU5ILEFBTUcsQUFBUSxBQUNoQjsyQkFBUyxRQVBKLEFBT0ksQUFBUSxBQUNqQjs2QkFBVyxRQUFBLEFBQVEsQSxBQVJkO0FBQUEsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU5vQixBLEFBdUcxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL21heC9Eb2N1bWVudHMvbm8zcC9oYWNrYXRob24ifQ==