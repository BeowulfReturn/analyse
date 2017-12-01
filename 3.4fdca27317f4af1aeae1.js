webpackJsonp([3],{

/***/ 13:
/***/ (function(module, exports) {

	module.exports = function formatSize(s) {
		if(s < 2048)
			return s + " bytes";
		s /= 1024
		if(s < 2048)
			return Math.round(s) + " KiB";
		s /= 1024
		return Math.round(s) + " MiB";
	}

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

	var app = __webpack_require__(5);
	var chunksGraph = __webpack_require__(25);


	module.exports = function() {
		document.title = "chunks";
		$(".page").html(__webpack_require__(26)({
			stats: app.stats
		}));
		chunksGraph.show();
		return function() {
			chunksGraph.hide();
		}
	};

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

	var app = __webpack_require__(5);
	var sigma = __webpack_require__(17);
	var findById = __webpack_require__(20);
	var percentageToColor = __webpack_require__(21).greenRed;

	var element = document.getElementById("sigma-chunks");

	var nodes = [];
	var edges = [];
	var chunkCount = app.stats.chunks.length;
	var maxSize = 0;
	app.stats.chunks.forEach(function(chunk, idx) {
		if(chunk.size > maxSize) maxSize = chunk.size;
	});
	app.stats.chunks.forEach(function(chunk, idx) {
		var color = percentageToColor(Math.pow((chunk.size+1) / (maxSize+1), 1/4));
		nodes.push({
			id: "chunk" + chunk.id,
			chunkId: chunk.id,
			size: Math.ceil(Math.sqrt(chunk.size + 1)),
			type: "webpack",
			shortLabel: "" + chunk.id,
			label: "[" + chunk.id + "] " + chunk.origins.map(function(o) {
				return o.reasons.concat(o.name).concat(o.moduleName).join(" ");
			}).join(", "),
			x: (Math.cos(idx / chunkCount * Math.PI * 2) * chunkCount),
			y: (Math.sin(idx / chunkCount * Math.PI * 2) * chunkCount),
			color: color
		});
	});
	app.stats.chunks.forEach(function(chunk) {
		chunk.parents.forEach(function(parent) {
			edges.push({
				id: "edge" + chunk.id + "-" + parent,
				source: "chunk" + parent,
				target: "chunk" + chunk.id,
				arrow: "target",
				type: "arrow",
				size: chunk.parents.length
			});
		});
	});
	var s = new sigma({
		graph: {
			nodes: nodes,
			edges: edges
		},
		renderer: {
			type: "canvas",
			container: element
		},
		settings: {
			edgeColor: "target",
			maxNodeSize: 20,
			minNodeSize: 4,
			maxEdgeSize: 3,
			minEdgeSize: 1
		}
	});
	s.bind("clickNode", function(e) {
		window.location.hash = "#chunk/" + e.data.node.chunkId;
	});


	s.refresh();

	exports.show = function() {
		element.style.display = "block";
		s.refresh();
		s.startForceAtlas2();
		s.renderers[0].resize();
	};

	exports.hide = function() {
		element.style.display = "none";
		s.stopForceAtlas2();
	};


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(11);

	module.exports = function anonymous(locals, attrs, escape, rethrow, merge
	/*``*/) {
	attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
	var buf = [];
	with (locals || {}) {
	var interp;
	buf.push('<table class="table table-condensed"><thead><tr><th>id</th><th>names</th><th>modules</th><th>size</th><th>parents</th><th>flags</th></tr></thead><tbody>');
	// iterate stats.chunks
	;(function(){
	  if ('number' == typeof stats.chunks.length) {

	    for (var $index = 0, $$l = stats.chunks.length; $index < $$l; $index++) {
	      var chunk = stats.chunks[$index];

	buf.push('<tr><td><a');
	buf.push(attrs({ 'href':("#chunk/" + (chunk.id) + ""), "class": ('btn') + ' ' + ('btn-info') }, {"href":true}));
	buf.push('>');
	var __val__ = chunk.id
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a></td><td>');
	// iterate chunk.names
	;(function(){
	  if ('number' == typeof chunk.names.length) {

	    for (var $index = 0, $$l = chunk.names.length; $index < $$l; $index++) {
	      var name = chunk.names[$index];

	buf.push('<code>');
	var __val__ = name
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in chunk.names) {
	      $$l++;      var name = chunk.names[$index];

	buf.push('<code>');
	var __val__ = name
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	    }

	  }
	}).call(this);

	buf.push('</td><td>');
	var __val__ = chunk.modules ? chunk.modules.length : "N/A"
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td><td>');
	var __val__ = __webpack_require__(13)(chunk.size)
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td><td>');
	// iterate chunk.parents
	;(function(){
	  if ('number' == typeof chunk.parents.length) {

	    for (var $index = 0, $$l = chunk.parents.length; $index < $$l; $index++) {
	      var parent = chunk.parents[$index];

	buf.push('<a');
	buf.push(attrs({ 'href':("#chunk/" + (parent) + ""), "class": ('btn') + ' ' + ('btn-info') }, {"href":true}));
	buf.push('>');
	var __val__ = parent
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in chunk.parents) {
	      $$l++;      var parent = chunk.parents[$index];

	buf.push('<a');
	buf.push(attrs({ 'href':("#chunk/" + (parent) + ""), "class": ('btn') + ' ' + ('btn-info') }, {"href":true}));
	buf.push('>');
	var __val__ = parent
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	    }

	  }
	}).call(this);

	buf.push('</td><td>');
	if ( chunk.rendered)
	{
	buf.push('<span class="label label-success">rendered</span>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	}
	if ( chunk.initial)
	{
	buf.push('<span class="label label-info">initial</span>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	}
	if ( chunk.entry)
	{
	buf.push('<span class="label label-danger">entry</span>');
	}
	buf.push('</td></tr>');
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in stats.chunks) {
	      $$l++;      var chunk = stats.chunks[$index];

	buf.push('<tr><td><a');
	buf.push(attrs({ 'href':("#chunk/" + (chunk.id) + ""), "class": ('btn') + ' ' + ('btn-info') }, {"href":true}));
	buf.push('>');
	var __val__ = chunk.id
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a></td><td>');
	// iterate chunk.names
	;(function(){
	  if ('number' == typeof chunk.names.length) {

	    for (var $index = 0, $$l = chunk.names.length; $index < $$l; $index++) {
	      var name = chunk.names[$index];

	buf.push('<code>');
	var __val__ = name
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in chunk.names) {
	      $$l++;      var name = chunk.names[$index];

	buf.push('<code>');
	var __val__ = name
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	    }

	  }
	}).call(this);

	buf.push('</td><td>');
	var __val__ = chunk.modules ? chunk.modules.length : "N/A"
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td><td>');
	var __val__ = __webpack_require__(13)(chunk.size)
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td><td>');
	// iterate chunk.parents
	;(function(){
	  if ('number' == typeof chunk.parents.length) {

	    for (var $index = 0, $$l = chunk.parents.length; $index < $$l; $index++) {
	      var parent = chunk.parents[$index];

	buf.push('<a');
	buf.push(attrs({ 'href':("#chunk/" + (parent) + ""), "class": ('btn') + ' ' + ('btn-info') }, {"href":true}));
	buf.push('>');
	var __val__ = parent
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in chunk.parents) {
	      $$l++;      var parent = chunk.parents[$index];

	buf.push('<a');
	buf.push(attrs({ 'href':("#chunk/" + (parent) + ""), "class": ('btn') + ' ' + ('btn-info') }, {"href":true}));
	buf.push('>');
	var __val__ = parent
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	    }

	  }
	}).call(this);

	buf.push('</td><td>');
	if ( chunk.rendered)
	{
	buf.push('<span class="label label-success">rendered</span>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	}
	if ( chunk.initial)
	{
	buf.push('<span class="label label-info">initial</span>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	}
	if ( chunk.entry)
	{
	buf.push('<span class="label label-danger">entry</span>');
	}
	buf.push('</td></tr>');
	    }

	  }
	}).call(this);

	buf.push('</tbody></table>');
	}
	return buf.join("");
	}

/***/ })

});