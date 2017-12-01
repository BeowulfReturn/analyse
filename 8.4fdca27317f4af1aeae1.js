webpackJsonp([8],{

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

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

	var app = __webpack_require__(5);
	var modulesGraph = __webpack_require__(16);

	function renderTable() {
		$(".page").html(__webpack_require__(44)({
			stats: app.stats
		}));
	}

	module.exports = function() {
		document.title = "modules";
		renderTable();

		var sortDir;
		$(document).on('click', '.size-th', function(){
			sortDir = sortDir === 'desc' ? 'asc' : 'desc';
			app.stats.modules.sort(function(a, b) {
				return sortDir === 'asc'
					? b.size - a.size
					: a.size - b.size;
			});
			renderTable();
		});

		modulesGraph.show();
		modulesGraph.setNormal();
		return function() {
			$(document).off('click', '.size-th');
			modulesGraph.hide();
		}
	};

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(11);

	module.exports = function anonymous(locals, attrs, escape, rethrow, merge
	/*``*/) {
	attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
	var buf = [];
	with (locals || {}) {
	var interp;
	buf.push('<table class="table table-condensed"><thead><tr><th>id</th><th>name</th><th class="sortable-th size-th">size</th><th>chunks</th><th>flags</th></tr></thead><tbody>');
	// iterate stats.modules
	;(function(){
	  if ('number' == typeof stats.modules.length) {

	    for (var $index = 0, $$l = stats.modules.length; $index < $$l; $index++) {
	      var module = stats.modules[$index];

	buf.push('<tr><td>');
	if ( typeof module.uid === "number")
	{
	buf.push('<a');
	buf.push(attrs({ 'href':("#module/" + (module.uid) + ""), "class": ('btn') + ' ' + ('btn-success') }, {"href":true}));
	buf.push('>');
	var __val__ = module.id
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	}
	else
	{
	buf.push('<span class="btn btn-success">');
	var __val__ = module.id
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</span>');
	}
	buf.push('</td><td><pre><code>');
	var __val__ = module.name.split("!").join("\n")
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></pre></td><td>');
	var __val__ = __webpack_require__(13)(module.size)
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td><td>');
	// iterate module.chunks
	;(function(){
	  if ('number' == typeof module.chunks.length) {

	    for (var $index = 0, $$l = module.chunks.length; $index < $$l; $index++) {
	      var chunk = module.chunks[$index];

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
	    for (var $index in module.chunks) {
	      $$l++;      var chunk = module.chunks[$index];

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
	if ( module.built)
	{
	buf.push('<span class="label label-success">built</span>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	}
	if ( !module.cacheable)
	{
	buf.push('<span class="label label-warning">not cacheable</span>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	}
	if ( module.prefetched)
	{
	buf.push('<span class="label label-success">prefetched</span>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	}
	if ( module.failed)
	{
	buf.push('<span class="label label-danger">failed</span>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	}
	if ( module.warnings)
	{
	buf.push('<span class="label label-warning">');
	var __val__ = module.warnings + " warnings"
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</span>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	}
	if ( module.errors)
	{
	buf.push('<span class="label label-danger">');
	var __val__ = module.errors + " errors"
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</span>');
	}
	buf.push('</td></tr>');
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in stats.modules) {
	      $$l++;      var module = stats.modules[$index];

	buf.push('<tr><td>');
	if ( typeof module.uid === "number")
	{
	buf.push('<a');
	buf.push(attrs({ 'href':("#module/" + (module.uid) + ""), "class": ('btn') + ' ' + ('btn-success') }, {"href":true}));
	buf.push('>');
	var __val__ = module.id
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	}
	else
	{
	buf.push('<span class="btn btn-success">');
	var __val__ = module.id
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</span>');
	}
	buf.push('</td><td><pre><code>');
	var __val__ = module.name.split("!").join("\n")
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></pre></td><td>');
	var __val__ = __webpack_require__(13)(module.size)
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td><td>');
	// iterate module.chunks
	;(function(){
	  if ('number' == typeof module.chunks.length) {

	    for (var $index = 0, $$l = module.chunks.length; $index < $$l; $index++) {
	      var chunk = module.chunks[$index];

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
	    for (var $index in module.chunks) {
	      $$l++;      var chunk = module.chunks[$index];

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
	if ( module.built)
	{
	buf.push('<span class="label label-success">built</span>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	}
	if ( !module.cacheable)
	{
	buf.push('<span class="label label-warning">not cacheable</span>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	}
	if ( module.prefetched)
	{
	buf.push('<span class="label label-success">prefetched</span>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	}
	if ( module.failed)
	{
	buf.push('<span class="label label-danger">failed</span>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	}
	if ( module.warnings)
	{
	buf.push('<span class="label label-warning">');
	var __val__ = module.warnings + " warnings"
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</span>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	}
	if ( module.errors)
	{
	buf.push('<span class="label label-danger">');
	var __val__ = module.errors + " errors"
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</span>');
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