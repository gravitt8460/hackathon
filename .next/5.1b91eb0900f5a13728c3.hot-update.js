webpackHotUpdate(5,{

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(719);

var _Layout2 = _interopRequireDefault(_Layout);

var _lottery = __webpack_require__(664);

var _lottery2 = _interopRequireDefault(_lottery);

var _semanticUiReact = __webpack_require__(437);

var _EnterLottery = __webpack_require__(1145);

var _EnterLottery2 = _interopRequireDefault(_EnterLottery);

var _PickWinner = __webpack_require__(1150);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/max/Documents/no3p/hackathon/pages/lotteries/show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/max/Documents/no3p/hackathon/pages/lotteries/show.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/lotteries/show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xYjkxZWIwOTAwZjVhMTM3MjhjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG90dGVyaWVzL3Nob3cuanM/Njg5Y2M4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IExvdHRlcnkgZnJvbSBcIi4uLy4uL2xvdHRlcnlcIjtcbmltcG9ydCB7IENhcmQsIEdyaWQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBFbnRlckxvdHRlcnkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRW50ZXJMb3R0ZXJ5XCI7XG5pbXBvcnQgUGlja1dpbm5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QaWNrV2lubmVyXCI7XG5cbmNsYXNzIExvdHRlcnlTaG93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IGxvdHRlcnkgPSBMb3R0ZXJ5KHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xuICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBsb3R0ZXJ5Lm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBhZGRyZXNzOiBwcm9wcy5xdWVyeS5hZGRyZXNzLFxuICAgICAgZW50cnlGZWU6IHN1bW1hcnlbMF0sXG4gICAgICBiYWxhbmNlOiBzdW1tYXJ5WzFdLFxuICAgICAgcGxheWVyQ291bnQ6IHN1bW1hcnlbMl0sXG4gICAgICBpc0NvbXBsZXRlZDogc3VtbWFyeVszXSxcbiAgICAgIHdpbm5lcjogc3VtbWFyeVs0XSxcbiAgICAgIG1hbmFnZXI6IHN1bW1hcnlbNV0sXG4gICAgICBhbW91bnRXb246IHN1bW1hcnlbNl1cbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyQ2FyZHMoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYmFsYW5jZSxcbiAgICAgIG1hbmFnZXIsXG4gICAgICBlbnRyeUZlZSxcbiAgICAgIHBsYXllckNvdW50LFxuICAgICAgaXNDb21wbGV0ZWQsXG4gICAgICB3aW5uZXIsXG4gICAgICBhbW91bnRXb25cbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiBtYW5hZ2VyLFxuICAgICAgICBtZXRhOiBcIkxvdHRlcnkgTWFuYWdlclwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlRoZSBtYW5hZ2VyIGNyZWF0ZWQgdGhlIGxvdHRlcnkgYW5kIGRlY2lkZXMgd2hlbiB0byBpc3N1ZSBhIHdpbm5lci5cIixcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IGVudHJ5RmVlLFxuICAgICAgICBtZXRhOiBcIkxvdHRlcnkgRW50cnkgRmVlICh3ZWkpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiRW50cnkgZmVlIGlzIHRoZSBhbW91bnQgb2Ygd2VpIHJlcXVpcmVkIHRvIGVudGVyIHRoZSBsb3R0ZXJ5LlwiLFxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogYmFsYW5jZSxcbiAgICAgICAgbWV0YTogXCJCYWxhbmNlICh3ZWkpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBhbW91bnQgb2Ygd2VpIGF2YWlsYWJsZSB0byB3aW4uXCIsXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiBwbGF5ZXJDb3VudCxcbiAgICAgICAgbWV0YTogXCJOdW1iZXIgb2YgUGxheWVyc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJOdW1iZXIgb2YgUGxheWVycyBlbnRlcmVkIGludG8gdGhlIExvdHRlcnlcIixcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IHdpbm5lcixcbiAgICAgICAgbWV0YTogXCJXaW5uZXJcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiV2lubmVyIG9mIHRoZSBMb3R0ZXJ5XCIsXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiBpc0NvbXBsZXRlZCxcbiAgICAgICAgbWV0YTogXCJMb3R0ZXJ5IENsb3NlZD9cIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJIYXMgdGhlIHdpbm5lciBhbHJlYWR5IGJlZW4gc2VsZWN0ZWQgYW5kIGNsb3NlZCB0aGUgbG90dGVyeT9cIixcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IGFtb3VudFdvbixcbiAgICAgICAgbWV0YTogXCJBbW91bnQgV29uXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIklmIGxvdHRlcnkgaXMgY2xvc2VkLCBob3cgbXVjaCBkaWQgdGhlIHdpbm5lciB3aW4/XCIsXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfVxuICAgICAgfVxuICAgIF07XG5cbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgzPkxvdHRlcnkgRGV0YWlsczwvaDM+XG4gICAgICAgIDxHcmlkPlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTJ9Pnt0aGlzLnJlbmRlckNhcmRzKCl9PC9HcmlkLkNvbHVtbj5cblxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XG4gICAgICAgICAgICA8RW50ZXJMb3R0ZXJ5IGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc30gLz5cbiAgICAgICAgICAgIDxQaWNrV2lubmVyIGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc30gLz5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvdHRlcnlTaG93O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvbG90dGVyaWVzL3Nob3cuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQVNBO0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQUE7QUFKQTtBQVFBO0FBQ0E7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFPQTtBQUNBO0FBRUE7QUFBQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUNBO0FBTUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQUlBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUtBO0FBTEE7Ozs7Ozs7Ozs7O0FBckZBO0FBQUE7O0FBQ0E7QUFDQTtBQURBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==