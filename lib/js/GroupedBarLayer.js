"use strict";

var React = require("react/addons");
var _ = require("lodash");
var classnames = require("classnames");
var ChartLayerMixin = require("./ChartLayerMixin");

var Bars = require("./Bars");
var GroupedBars = Bars.GroupedBars;

var GroupedBarLayer = React.createClass({
	displayName: "GroupedBarLayer",

	propTypes: {
		stacked: React.PropTypes.bool,
		groupOffset: React.PropTypes.number,
		barWidth: React.PropTypes.number,
		max: React.PropTypes.number,
		min: React.PropTypes.number,
		data: React.PropTypes.array,
		seriesField: React.PropTypes.string,
		categoryField: React.PropTypes.string,
		valueField: React.PropTypes.string
	},
	mixins: [ChartLayerMixin],
	getDefaultProps: function getDefaultProps() {
		return {
			barWidth: 0.5,
			groupOffset: 0.6,
			stacked: false,
			min: 0,
			seriesField: "series",
			categoryField: "category",
			valueField: "value"
		};
	},
	_chartLayer: undefined,
	updateChart: function updateChart() {
		this.destroyChart();
		this._chartLayer = new GroupedBars(React.findDOMNode(this), this.props.data, this.props.seriesField, this.props.categoryField, this.props.valueField, this.props.groupOffset, this.props.barWidth, this.props.min, this.props.max);
	},
	destroyChart: function destroyChart() {
		if (this._chartLayer) {
			this._chartLayer.clear();
		}
	},
	render: function render() {
		return React.createElement("svg", { className: classnames("GroupedBarLayer", this.props.className) });
	}
});

module.exports = GroupedBarLayer;