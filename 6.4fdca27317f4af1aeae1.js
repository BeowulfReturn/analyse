webpackJsonp([6],{

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

	var app = __webpack_require__(5);

	module.exports = function() {
		document.title = "home";
		$(".page").html(__webpack_require__(38)({
			stats: app.stats
		}));
	};

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(11);

	module.exports = function anonymous(locals, attrs, escape, rethrow, merge
	/*``*/) {
	attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
	var buf = [];
	with (locals || {}) {
	var interp;
	buf.push('<div class="container-fluid"><div class="row"><div class="col-md-12"><div class="page-header"><h1>webpack analyse</h1></div></div></div><div class="row"><div class="col-md-3"><div class="well"><center><h1><a href="http://webpack.github.io/" target="_blank" rel="noopener noreferrer">webpack</a><br/><a href="http://webpack.github.io/docs/changelog.html" target="_blank" rel="noopener noreferrer">');
	var __val__ = stats.version
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a></h1></center></div></div><div class="col-md-3"><div class="well"><center><h1>');
	var __val__ = stats.time
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('<br/>ms</h1></center></div></div><div class="col-md-6"><div class="well"><center><h1>hash<br/>');
	var __val__ = stats.hash
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</h1></center></div></div></div><div class="row"><div class="col-md-3"><div class="well"><center><h1><a href="#modules">');
	var __val__ = stats.modules.length
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('<br/>modules</a></h1></center></div></div><div class="col-md-3"><div class="well"><center><h1><a href="#chunks">');
	var __val__ = stats.chunks.length
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('<br/>chunks</a></h1></center></div></div><div class="col-md-3"><div class="well"><center><h1><a href="#assets">');
	var __val__ = stats.assets.length
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('<br/>assets</a></h1></center></div></div><div class="col-md-3"><div class="well"><center><h1>');
	if ( stats.errors.length && stats.warnings.length)
	{
	buf.push('<a href="#warnings">');
	var __val__ = stats.warnings.length
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push(' warnings</a><br/><a href="#errors">');
	var __val__ = stats.errors.length
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push(' errors</a>');
	}
	else if ( stats.errors.length)
	{
	buf.push('<a href="#errors">');
	var __val__ = stats.errors.length
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('<br/>errors</a>');
	}
	else if ( stats.warnings.length)
	{
	buf.push('<a href="#warnings">');
	var __val__ = stats.warnings.length
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('<br/>warnings</a>');
	}
	else
	{
	buf.push('no<br/>warnings/errors');
	}
	buf.push('</h1></center></div></div></div></div>');
	}
	return buf.join("");
	}

/***/ })

});