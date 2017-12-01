webpackJsonp([12],{

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

	var app = __webpack_require__(5);

	module.exports = function() {
		document.title = "warnings";
		$(".page").html(__webpack_require__(54)({
			stats: app.stats,
			warnings: app.stats.warnings.map(function(str) {
				str = str.split("\n");
				var header = str.shift();
				var footer = str.pop();
				if(!/^ @/.test(footer)) str.push(footer), footer = "";
				return {
					header: header,
					text: str.join("\n"),
					footer: footer
				}
			})
		}));
	};

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(11);

	module.exports = function anonymous(locals, attrs, escape, rethrow, merge
	/*``*/) {
	attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
	var buf = [];
	with (locals || {}) {
	var interp;
	if ( warnings.length === 0)
	{
	buf.push('<h2>No warnings.</h2>');
	}
	// iterate warnings
	;(function(){
	  if ('number' == typeof warnings.length) {

	    for (var $index = 0, $$l = warnings.length; $index < $$l; $index++) {
	      var warning = warnings[$index];

	buf.push('<div class="alert alert-warning"><h4>');
	var __val__ = warning.header
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</h4><pre>');
	var __val__ = warning.text
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</pre><h5>');
	var __val__ = warning.footer
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</h5></div>');
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in warnings) {
	      $$l++;      var warning = warnings[$index];

	buf.push('<div class="alert alert-warning"><h4>');
	var __val__ = warning.header
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</h4><pre>');
	var __val__ = warning.text
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</pre><h5>');
	var __val__ = warning.footer
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</h5></div>');
	    }

	  }
	}).call(this);

	}
	return buf.join("");
	}

/***/ })

});