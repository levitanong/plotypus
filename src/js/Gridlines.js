var _ = require("lodash");

var Gridlines = function(domNode, min, max, interval, orientation){
	// var xRange = xMax - xMin;
	// var yRange = yMax - yMin;

	var addElement = function(parent, tagName, attrs){
		var ns = "http://www.w3.org/2000/svg";
		var attrs = attrs || {};
		var elem = document.createElementNS(ns, tagName);
		_.forEach(attrs, function(attrVal, attrName){
			elem.setAttribute(attrName, attrVal);
		});
		parent.appendChild(elem);
	};

	var ticks = _.range(min, max, interval);

	// var xRange = _.range(xMin, xMax, xInterval);
	// var yRange = _.range(yMin, yMax, yInterval);

	// var vLines = xRange
	// 	.forEach(function(n, index){
	// 		var x = index;
	// 		addElement(domNode, "line", {
	// 			x1: x,
	// 			x2: x,
	// 			y1: 0,
	// 			y2: yRange.length,
	// 			stroke: "rgba(0,0,0,0.2)",
	// 			"stroke-width": "1",
	// 			"stroke-dasharray": "2, 2",
	// 			"vector-effect": "non-scaling-stroke"
	// 		});
	// 	});

	// var hLines = yRange
	// 	.forEach(function(n, index){
	// 		var y = yRange.length - index;
	// 		addElement(domNode, "line", {
	// 			x1: 0,
	// 			x2: xRange.length,
	// 			y1: y,
	// 			y2: y,
	// 			stroke: "rgba(0,0,0,0.2)",
	// 			"stroke-width": "1",
	// 			"stroke-dasharray": "2, 2",
	// 			"vector-effect": "non-scaling-stroke"
	// 		});
	// 	});

	let lines = ticks.forEach((n, index) => {
		switch(orientation) {
			case "h":
				addElement(domNode, "line", {
					x1: index,
					x2: index,
					y1: 0,
					y2: 1,
					stroke: "rgba(0,0,0,0.2)",
					"stroke-width": "1",
					"stroke-dasharray": "2, 2",
					"vector-effect": "non-scaling-stroke"
				})
				break;
			case "v":
				let y = ticks.length - index;
				addElement(domNode, "line", {
					x1: 0,
					x2: 1,
					y1: y,
					y2: y,
					stroke: "rgba(0,0,0,0.2)",
					"stroke-width": "1",
					"stroke-dasharray": "2, 2",
					"vector-effect": "non-scaling-stroke"
				})
				break;
			default:
				console.log("illegal orientation");
		}
	})

	domNode.setAttribute("viewBox", `0 0 ${orientation === 'h' ? (ticks.length + " " + 1) : (1 + " " + ticks.length)}`);
	domNode.setAttribute("preserveAspectRatio", "none");

	return domNode;
}

module.exports = Gridlines;