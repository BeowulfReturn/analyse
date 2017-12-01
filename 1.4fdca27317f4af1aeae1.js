webpackJsonp([1],{

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

	var app = __webpack_require__(5);

	module.exports = function() {
		document.title = "assets";
		$(".page").html(__webpack_require__(9)({
			stats: app.stats
		}));
	};

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var jade = __webpack_require__(11);

	module.exports = function anonymous(locals, attrs, escape, rethrow, merge
	/*``*/) {
	attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
	var buf = [];
	with (locals || {}) {
	var interp;
	buf.push('<table class="table table-condensed"><thead><tr><th>assets</th><th>size</th><th>chunks</th><th>names</th><th>flags</th></tr></thead><tbody>');
	// iterate stats.assets
	;(function(){
	  if ('number' == typeof stats.assets.length) {

	    for (var $index = 0, $$l = stats.assets.length; $index < $$l; $index++) {
	      var asset = stats.assets[$index];

	buf.push('<tr><td><pre><code>');
	var __val__ = asset.name
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></pre></td><td>');
	var __val__ = __webpack_require__(13)(asset.size)
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td><td>');
	// iterate asset.chunks
	;(function(){
	  if ('number' == typeof asset.chunks.length) {

	    for (var $index = 0, $$l = asset.chunks.length; $index < $$l; $index++) {
	      var chunk = asset.chunks[$index];

	buf.push('<a');
	buf.push(attrs({ 'href':("#chunk/" + (chunk) + ""), "class": ('btn') + ' ' + ('btn-info') }, {"href":true}));
	buf.push('>');
	var __val__ = chunk
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in asset.chunks) {
	      $$l++;      var chunk = asset.chunks[$index];

	buf.push('<a');
	buf.push(attrs({ 'href':("#chunk/" + (chunk) + ""), "class": ('btn') + ' ' + ('btn-info') }, {"href":true}));
	buf.push('>');
	var __val__ = chunk
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	    }

	  }
	}).call(this);

	buf.push('</td><td>');
	// iterate asset.chunkNames
	;(function(){
	  if ('number' == typeof asset.chunkNames.length) {

	    for (var $index = 0, $$l = asset.chunkNames.length; $index < $$l; $index++) {
	      var name = asset.chunkNames[$index];

	buf.push('<code>');
	var __val__ = name
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in asset.chunkNames) {
	      $$l++;      var name = asset.chunkNames[$index];

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
	if ( module.emitted)
	{
	buf.push('<span class="label label-success">emitted</span>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	}
	buf.push('</td></tr>');
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in stats.assets) {
	      $$l++;      var asset = stats.assets[$index];

	buf.push('<tr><td><pre><code>');
	var __val__ = asset.name
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></pre></td><td>');
	var __val__ = __webpack_require__(13)(asset.size)
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td><td>');
	// iterate asset.chunks
	;(function(){
	  if ('number' == typeof asset.chunks.length) {

	    for (var $index = 0, $$l = asset.chunks.length; $index < $$l; $index++) {
	      var chunk = asset.chunks[$index];

	buf.push('<a');
	buf.push(attrs({ 'href':("#chunk/" + (chunk) + ""), "class": ('btn') + ' ' + ('btn-info') }, {"href":true}));
	buf.push('>');
	var __val__ = chunk
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in asset.chunks) {
	      $$l++;      var chunk = asset.chunks[$index];

	buf.push('<a');
	buf.push(attrs({ 'href':("#chunk/" + (chunk) + ""), "class": ('btn') + ' ' + ('btn-info') }, {"href":true}));
	buf.push('>');
	var __val__ = chunk
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	    }

	  }
	}).call(this);

	buf.push('</td><td>');
	// iterate asset.chunkNames
	;(function(){
	  if ('number' == typeof asset.chunkNames.length) {

	    for (var $index = 0, $$l = asset.chunkNames.length; $index < $$l; $index++) {
	      var name = asset.chunkNames[$index];

	buf.push('<code>');
	var __val__ = name
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in asset.chunkNames) {
	      $$l++;      var name = asset.chunkNames[$index];

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
	if ( module.emitted)
	{
	buf.push('<span class="label label-success">emitted</span>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	}
	buf.push('</td></tr>');
	    }

	  }
	}).call(this);

	buf.push('</tbody></table>');
	}
	return buf.join("");
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),

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

/***/ })

});