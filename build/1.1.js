webpackJsonp([1],{

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _svgIconsSVGPlotypusSvg = __webpack_require__(155);

	var _svgIconsSVGPlotypusSvg2 = _interopRequireDefault(_svgIconsSVGPlotypusSvg);

	var Home = (function (_React$Component) {
		function Home() {
			_classCallCheck(this, Home);

			if (_React$Component != null) {
				_React$Component.apply(this, arguments);
			}
		}

		_inherits(Home, _React$Component);

		_createClass(Home, [{
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"div",
					{ className: "Home" },
					_react2["default"].createElement(
						"section",
						{ id: "hero" },
						_react2["default"].createElement(
							"div",
							{ id: "logo" },
							_react2["default"].createElement("img", { src: _svgIconsSVGPlotypusSvg2["default"] })
						),
						_react2["default"].createElement(
							"div",
							null,
							_react2["default"].createElement(
								"h1",
								null,
								"Plotypus"
							),
							_react2["default"].createElement(
								"h2",
								null,
								"A charting library built for React"
							),
							_react2["default"].createElement(
								"code",
								{ className: "installation" },
								"npm install --save plotypus"
							)
						)
					)
				);
			}
		}]);

		return Home;
	})(_react2["default"].Component);

	exports["default"] = Home;
	module.exports = exports["default"];

/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOCIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI4IDMyIj4KPHBhdGggZmlsbD0icmdiKDIwOSwgOTYsIDYxKSIgZD0iTTI4LjE1MSAxNC4wNzZjMC03Ljc3NC02LjMwMi0xNC4wNzYtMTQuMDc2LTE0LjA3NnMtMTQuMDc2IDYuMzAyLTE0LjA3NiAxNC4wNzZjMCA1LjM0MSAyLjk3NSA5Ljk4OCA3LjM1OCAxMi4zNzJsNC42MzYtOS41YzEuMDkzLTIuMjQgMy4xNzktMi4yNCA0LjI3MiAwbDQuNjEzIDkuNDUyYzQuMzM2LTIuMzk5IDcuMjcyLTcuMDE5IDcuMjcyLTEyLjMyNXoiPjwvcGF0aD4KPHBhdGggZmlsbD0icmdiKDQ1LCAyMCwgNDQpIiBkPSJNNC41MDkgMTkuOTA0YzAuNDg2IDAgMC44OC0wLjM5NCAwLjg4LTAuODhzLTAuMzk0LTAuODgtMC44OC0wLjg4Yy0wLjQ4NiAwLTAuODggMC4zOTQtMC44OCAwLjg4czAuMzk0IDAuODggMC44OCAwLjg4eiI+PC9wYXRoPgo8cGF0aCBmaWxsPSJyZ2IoNDUsIDIwLCA0NCkiIGQ9Ik0yNC42NiAxOS4wMDdjMCAwLjQ4Ni0wLjM5NCAwLjg4LTAuODggMC44OHMtMC44OC0wLjM5NC0wLjg4LTAuODhjMC0wLjQ4NiAwLjM5NC0wLjg4IDAuODgtMC44OHMwLjg4IDAuMzk0IDAuODggMC44OHoiPjwvcGF0aD4KPHBhdGggZmlsbD0icmdiKDQ1LCAyMCwgNDQpIiBkPSJNMTQuMDc2IDMxLjg5OWMtNC43NTEgMC02LjAzMi0xLjM2My02LjAzMi0xLjM2My0wLjgyOS0wLjUwMy0xLjE1Ni0xLjYxOS0wLjczLTIuNDkzbDUuMjczLTEwLjgwNWMwLjg1Mi0xLjc0NiAyLjIzNC0xLjc0NiAzLjA4NiAwbDUuMjUyIDEwLjc2MWMwLjQyNiAwLjg3NCAwLjEyMSAyLjAyNC0wLjczIDIuNDkzIDAgMC0xLjM2OSAxLjQwNy02LjEyIDEuNDA3ek0xNC45NTUgMjguOTc3YzAuMjQzIDAgMC40NC0wLjE5NyAwLjQ0LTAuNDRzLTAuMTk3LTAuNDQtMC40NC0wLjQ0Yy0wLjI0MyAwLTAuNDQgMC4xOTctMC40NCAwLjQ0czAuMTk3IDAuNDQgMC40NCAwLjQ0ek0xMy4xOTYgMjguOTc3YzAuMjQzIDAgMC40NC0wLjE5NyAwLjQ0LTAuNDRzLTAuMTk3LTAuNDQtMC40NC0wLjQ0Yy0wLjI0MyAwLTAuNDQgMC4xOTctMC40NCAwLjQ0czAuMTk3IDAuNDQgMC40NCAwLjQ0eiI+PC9wYXRoPgo8L3N2Zz4K"

/***/ }

});