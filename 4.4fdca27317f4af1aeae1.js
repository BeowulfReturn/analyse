webpackJsonp([4],{

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

	var app = __webpack_require__(5);

	module.exports = function() {
		document.title = "errors";
		$(".page").html(__webpack_require__(32)({
			stats: app.stats,
			errors: app.stats.errors.map(function(str) {
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

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(11);

	module.exports = function anonymous(locals, attrs, escape, rethrow, merge
	/*``*/) {
	attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
	var buf = [];
	with (locals || {}) {
	var interp;
	if ( errors.length === 0)
	{
	buf.push('<h2>No errors.</h2>');
	}
	// iterate errors
	;(function(){
	  if ('number' == typeof errors.length) {

	    for (var $index = 0, $$l = errors.length; $index < $$l; $index++) {
	      var error = errors[$index];

	buf.push('<div class="alert alert-danger"><h4>');
	var __val__ = error.header
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</h4><pre>');
	var __val__ = error.text
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</pre><h5>');
	var __val__ = error.footer
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</h5></div>');
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in errors) {
	      $$l++;      var error = errors[$index];

	buf.push('<div class="alert alert-danger"><h4>');
	var __val__ = error.header
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</h4><pre>');
	var __val__ = error.text
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</pre><h5>');
	var __val__ = error.footer
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