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
        header: isCompleted,
        meta: "Lottery Closed?",
        description: "Has the winner already been selected and closed the lottery?",
        style: { overflowWrap: "break-word" }
      }, {
        header: amountWon,
        meta: "Amount Won",
        description: "If lottery is closed, how much did the winner win?",
        style: { overflowWrap: "break-word" }
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, "Lottery Details"), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_EnterLottery2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), _react2.default.createElement(_PickWinner2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xvdHRlcmllcy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiTG90dGVyeSIsIkNhcmQiLCJHcmlkIiwiRW50ZXJMb3R0ZXJ5IiwiUGlja1dpbm5lciIsIkxvdHRlcnlTaG93IiwicHJvcHMiLCJiYWxhbmNlIiwibWFuYWdlciIsImVudHJ5RmVlIiwicGxheWVyQ291bnQiLCJpc0NvbXBsZXRlZCIsIndpbm5lciIsImFtb3VudFdvbiIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJsb3R0ZXJ5IiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0lBRWpCLEE7Ozs7Ozs7Ozs7O2tDQWlCVTttQkFTUixLQVRRLEFBU0g7VUFURyxBQUVWLGlCQUZVLEFBRVY7VUFGVSxBQUdWLGlCQUhVLEFBR1Y7VUFIVSxBQUlWLGtCQUpVLEFBSVY7VUFKVSxBQUtWLHFCQUxVLEFBS1Y7VUFMVSxBQU1WLHFCQU5VLEFBTVY7VUFOVSxBQU9WLGdCQVBVLEFBT1Y7VUFQVSxBQVFWLG1CQVJVLEFBUVYsQUFFRjs7VUFBTTtnQkFDSixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFJSSxBQUNGO2VBQU8sRUFBRSxjQU5DLEFBQ1osQUFLUyxBQUFnQjtBQUx6QixBQUNFLE9BRlU7Z0JBUVosQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQUhGLEFBSUksQUFDRjtlQUFPLEVBQUUsY0FiQyxBQVFaLEFBS1MsQUFBZ0I7QUFMekIsQUFDRTtnQkFNRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFHZSxBQUNiO2VBQU8sRUFBRSxjQW5CQyxBQWVaLEFBSVMsQUFBZ0I7QUFKekIsQUFDRTtnQkFLRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFHZSxBQUNiO2VBQU8sRUFBRSxjQXpCQyxBQXFCWixBQUlTLEFBQWdCO0FBSnpCLEFBQ0U7Z0JBS0YsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQUhGLEFBR2UsQUFDYjtlQUFPLEVBQUUsY0EvQkMsQUEyQlosQUFJUyxBQUFnQjtBQUp6QixBQUNFO2dCQUtGLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUlJLEFBQ0Y7ZUFBTyxFQUFFLGNBdENDLEFBaUNaLEFBS1MsQUFBZ0I7QUFMekIsQUFDRTtnQkFNRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFHZSxBQUNiO2VBQU8sRUFBRSxjQTVDYixBQUFjLEFBd0NaLEFBSVMsQUFBZ0IsQUFJM0I7QUFSRSxBQUNFOzsyQ0FPRyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esb0NBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFBeUI7QUFBekI7Y0FERixBQUNFLEFBQXlCLEFBQUssQUFFOUIsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsd0NBQWEsU0FBUyxLQUFBLEFBQUssTUFBNUIsQUFBa0M7b0JBQWxDO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLEFBQUMsc0NBQVcsU0FBUyxLQUFBLEFBQUssTUFBMUIsQUFBZ0M7b0JBQWhDO3NCQVJSLEFBQ0UsQUFFRSxBQUdFLEFBRUUsQUFLVDtBQUxTOzs7Ozs7MkcsQUF0Rm1COzs7OzttQkFDckI7QSwwQkFBVSx1QkFBUSxNQUFBLEFBQU0sTUFBZCxBLEFBQW9COzt1QkFDZCxRQUFBLEFBQVEsUUFBUixBQUFnQixhQUFoQixBQUE2QixBOzttQkFBN0M7QTs7MkJBR0ssTUFBQSxBQUFNLE1BRFYsQUFDZ0IsQUFDckI7NEJBQVUsUUFGTCxBQUVLLEFBQVEsQUFDbEI7MkJBQVMsUUFISixBQUdJLEFBQVEsQUFDakI7K0JBQWEsUUFKUixBQUlRLEFBQVEsQUFDckI7K0JBQWEsUUFMUixBQUtRLEFBQVEsQUFDckI7MEJBQVEsUUFOSCxBQU1HLEFBQVEsQUFDaEI7MkJBQVMsUUFQSixBQU9JLEFBQVEsQUFDakI7NkJBQVcsUSxBQVJOLEFBUU0sQUFBUTtBQVJkLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFOb0IsQSxBQStGMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYXgvRG9jdW1lbnRzL25vM3AvaGFja2F0aG9uIn0=