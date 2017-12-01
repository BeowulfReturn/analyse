webpackJsonp([5],{

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

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

	var app = __webpack_require__(5);
	var findById = __webpack_require__(20);

	module.exports = function() {
		document.title = "hints";
		var multiRefs = [];
		app.stats.modules.forEach(function(module) {
			var requiresSum = {};
			module.dependencies.forEach(function(d) {
				if(!requiresSum[d.moduleId])
					requiresSum[d.moduleId] = {
						module: module,
						count: 1,
						otherModule: findById(app.stats.modules, d.moduleId)
					};
				else
					requiresSum[d.moduleId].count++;
			});
			Object.keys(requiresSum).forEach(function(id) {
				var item = requiresSum[id];
				if(item.count >= 2)
					multiRefs.push(item);
			});
		});
		multiRefs.forEach(function(item) {
			var refModLength = (item.otherModule.id+"").length;
			item.saving = item.count * (2 + refModLength) - 6 - refModLength;
		});
		multiRefs = multiRefs.filter(function(item) {
			return item.saving > 10;
		});
		multiRefs.sort(function(a, b) {
			return b.saving - a.saving;
		});

		var multiChunks = [];
		app.stats.modules.forEach(function(module) {
			if(module.chunks.length >= 2) {
				multiChunks.push({
					module: module,
					count: module.chunks.length,
					saving: ((module.chunks.length - 1) * module.size)
				});
			}
		});
		multiChunks = multiChunks.filter(function(item) {
			return item.saving > 100;
		});
		multiChunks.sort(function(a, b) {
			return b.saving - a.saving;
		});

		var modulesByTimestamp = app.stats.modules.filter(function(m) {
			return typeof m.timestamp === "number";
		}).sort(function(a, b) {
			return b.timestamp - a.timestamp;
		}).slice(0, 10);

		var longChains = modulesByTimestamp.map(function(m) {
			var chain = [m];
			while(typeof m.issuerUid === "number") {
				m = app.mapModulesUid[m.issuerUid];
				if(!m) break;
				chain.unshift(m);
			}
			return chain;
		});

		$(".page").html(__webpack_require__(35)({
			stats: app.stats,
			multiRefs: multiRefs,
			multiChunks: multiChunks,
			longChains: longChains
		}));
	};

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(11);

	module.exports = function anonymous(locals, attrs, escape, rethrow, merge
	/*``*/) {
	attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
	var buf = [];
	with (locals || {}) {
	var interp;
	buf.push('<div class="container-fluid"><div class="row"><div class="col-md-12">');
	if ( multiChunks.length === 0 && multiRefs.length === 0 && longChains.length === 0)
	{
	buf.push('<h2>Everything seem to be fine.</h2>');
	}
	if ( multiChunks.length > 0)
	{
	buf.push('<h2>Module in multiple chunks</h2><p>Check if it is a good idea to move modules into a common parent. You may want to use <code>require.include</code> or insert them into the parents <code>require.ensure</code> array.</p><table class="table table-bordered"><thead><tr><th>module</th><th>name</th><th>count</th><th>chunks</th><th>saving</th></tr></thead><tbody>');
	// iterate multiChunks
	;(function(){
	  if ('number' == typeof multiChunks.length) {

	    for (var $index = 0, $$l = multiChunks.length; $index < $$l; $index++) {
	      var item = multiChunks[$index];

	buf.push('<tr><td>');
	if ( typeof item.module.uid === "number")
	{
	buf.push('<a');
	buf.push(attrs({ 'href':("#module/" + (item.module.uid) + ""), "class": ('btn') + ' ' + ('btn-success') }, {"href":true}));
	buf.push('>');
	var __val__ = item.module.id
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	}
	else
	{
	buf.push('<span class="btn btn-success">');
	var __val__ = item.module.id
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</span>');
	}
	buf.push('</td>');
	var splittedModule = (item.module.name.split("!"));
	buf.push('<td><pre><code>');
	var __val__ = splittedModule.join("\n")
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></pre></td><td>');
	var __val__ = item.count
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td><td>');
	// iterate item.module.chunks
	;(function(){
	  if ('number' == typeof item.module.chunks.length) {

	    for (var idx = 0, $$l = item.module.chunks.length; idx < $$l; idx++) {
	      var chunk = item.module.chunks[idx];

	if ( idx > 0)
	{
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	}
	buf.push('<a');
	buf.push(attrs({ 'href':("#chunk/" + (chunk) + ""), "class": ('btn') + ' ' + ('btn-info') }, {"href":true}));
	buf.push('>');
	var __val__ = chunk
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	    }

	  } else {
	    var $$l = 0;
	    for (var idx in item.module.chunks) {
	      $$l++;      var chunk = item.module.chunks[idx];

	if ( idx > 0)
	{
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	}
	buf.push('<a');
	buf.push(attrs({ 'href':("#chunk/" + (chunk) + ""), "class": ('btn') + ' ' + ('btn-info') }, {"href":true}));
	buf.push('>');
	var __val__ = chunk
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	    }

	  }
	}).call(this);

	buf.push('</td><td>');
	var __val__ = __webpack_require__(13)(item.saving);
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td></tr>');
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in multiChunks) {
	      $$l++;      var item = multiChunks[$index];

	buf.push('<tr><td>');
	if ( typeof item.module.uid === "number")
	{
	buf.push('<a');
	buf.push(attrs({ 'href':("#module/" + (item.module.uid) + ""), "class": ('btn') + ' ' + ('btn-success') }, {"href":true}));
	buf.push('>');
	var __val__ = item.module.id
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	}
	else
	{
	buf.push('<span class="btn btn-success">');
	var __val__ = item.module.id
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</span>');
	}
	buf.push('</td>');
	var splittedModule = (item.module.name.split("!"));
	buf.push('<td><pre><code>');
	var __val__ = splittedModule.join("\n")
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></pre></td><td>');
	var __val__ = item.count
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td><td>');
	// iterate item.module.chunks
	;(function(){
	  if ('number' == typeof item.module.chunks.length) {

	    for (var idx = 0, $$l = item.module.chunks.length; idx < $$l; idx++) {
	      var chunk = item.module.chunks[idx];

	if ( idx > 0)
	{
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	}
	buf.push('<a');
	buf.push(attrs({ 'href':("#chunk/" + (chunk) + ""), "class": ('btn') + ' ' + ('btn-info') }, {"href":true}));
	buf.push('>');
	var __val__ = chunk
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	    }

	  } else {
	    var $$l = 0;
	    for (var idx in item.module.chunks) {
	      $$l++;      var chunk = item.module.chunks[idx];

	if ( idx > 0)
	{
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	}
	buf.push('<a');
	buf.push(attrs({ 'href':("#chunk/" + (chunk) + ""), "class": ('btn') + ' ' + ('btn-info') }, {"href":true}));
	buf.push('>');
	var __val__ = chunk
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	    }

	  }
	}).call(this);

	buf.push('</td><td>');
	var __val__ = __webpack_require__(13)(item.saving);
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td></tr>');
	    }

	  }
	}).call(this);

	buf.push('</tbody></table>');
	}
	if ( multiRefs.length > 0)
	{
	buf.push('<h2>Multiple references to the same module</h2><p>Refactor this:</p><pre><code>var a = require("xyz").a;\nvar b = require("xyz").b;\nvar c = require("xyz").c;</code></pre><p>To this:</p><pre><code>var xyz = require("xyz");\nvar a = xyz.a;\nvar a = xyz.b;\nvar c = xyz.c;</code></pre><table class="table table-bordered"><thead><tr><th>module</th><th>name</th><th>count</th><th>referenced module</th><th>referenced name</th><th>saving</th></tr></thead><tbody>');
	// iterate multiRefs
	;(function(){
	  if ('number' == typeof multiRefs.length) {

	    for (var $index = 0, $$l = multiRefs.length; $index < $$l; $index++) {
	      var item = multiRefs[$index];

	buf.push('<tr><td>');
	if ( typeof item.module.uid === "number")
	{
	buf.push('<a');
	buf.push(attrs({ 'href':("#module/" + (item.module.uid) + ""), "class": ('btn') + ' ' + ('btn-success') }, {"href":true}));
	buf.push('>');
	var __val__ = item.module.id
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	}
	else
	{
	buf.push('<span class="btn btn-success">');
	var __val__ = item.module.id
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</span>');
	}
	buf.push('</td><td><pre><code>');
	var __val__ = item.module.name.split("!").join("\n")
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></pre></td><td>');
	var __val__ = item.count
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td><td>');
	if ( typeof item.otherModule.uid === "number")
	{
	buf.push('<a');
	buf.push(attrs({ 'href':("#module/" + (item.otherModule.uid) + ""), "class": ('btn') + ' ' + ('btn-success') }, {"href":true}));
	buf.push('>');
	var __val__ = item.otherModule.id
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	}
	else
	{
	buf.push('<span class="btn btn-success">');
	var __val__ = item.otherModule.id
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</span>');
	}
	buf.push('</td><td><pre><code>');
	var __val__ = item.otherModule.name.split("!").join("\n")
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></pre></td><td>');
	var __val__ = __webpack_require__(13)(item.saving) + "+"
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td></tr>');
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in multiRefs) {
	      $$l++;      var item = multiRefs[$index];

	buf.push('<tr><td>');
	if ( typeof item.module.uid === "number")
	{
	buf.push('<a');
	buf.push(attrs({ 'href':("#module/" + (item.module.uid) + ""), "class": ('btn') + ' ' + ('btn-success') }, {"href":true}));
	buf.push('>');
	var __val__ = item.module.id
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	}
	else
	{
	buf.push('<span class="btn btn-success">');
	var __val__ = item.module.id
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</span>');
	}
	buf.push('</td><td><pre><code>');
	var __val__ = item.module.name.split("!").join("\n")
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></pre></td><td>');
	var __val__ = item.count
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td><td>');
	if ( typeof item.otherModule.uid === "number")
	{
	buf.push('<a');
	buf.push(attrs({ 'href':("#module/" + (item.otherModule.uid) + ""), "class": ('btn') + ' ' + ('btn-success') }, {"href":true}));
	buf.push('>');
	var __val__ = item.otherModule.id
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	}
	else
	{
	buf.push('<span class="btn btn-success">');
	var __val__ = item.otherModule.id
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</span>');
	}
	buf.push('</td><td><pre><code>');
	var __val__ = item.otherModule.name.split("!").join("\n")
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></pre></td><td>');
	var __val__ = __webpack_require__(13)(item.saving) + "+"
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td></tr>');
	    }

	  }
	}).call(this);

	buf.push('</tbody></table>');
	}
	if ( longChains.length > 0)
	{
	buf.push('<h2>Long module build chains</h2><p>Use prefetching to increase build performance. Prefetch a module from the middle of the chain.</p>');
	// iterate longChains
	;(function(){
	  if ('number' == typeof longChains.length) {

	    for (var $index = 0, $$l = longChains.length; $index < $$l; $index++) {
	      var chain = longChains[$index];

	buf.push('<table class="table table-bordered"><thead><tr><th>module</th><th>name</th><th>time</th><th>finished @</th></tr></thead><tbody>');
	// iterate chain
	;(function(){
	  if ('number' == typeof chain.length) {

	    for (var $index = 0, $$l = chain.length; $index < $$l; $index++) {
	      var module = chain[$index];

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
	var __val__ = module.time + " ms"
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td><td>');
	var __val__ = module.timestamp + " ms"
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td></tr>');
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in chain) {
	      $$l++;      var module = chain[$index];

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
	var __val__ = module.time + " ms"
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td><td>');
	var __val__ = module.timestamp + " ms"
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td></tr>');
	    }

	  }
	}).call(this);

	buf.push('</tbody></table>');
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in longChains) {
	      $$l++;      var chain = longChains[$index];

	buf.push('<table class="table table-bordered"><thead><tr><th>module</th><th>name</th><th>time</th><th>finished @</th></tr></thead><tbody>');
	// iterate chain
	;(function(){
	  if ('number' == typeof chain.length) {

	    for (var $index = 0, $$l = chain.length; $index < $$l; $index++) {
	      var module = chain[$index];

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
	var __val__ = module.time + " ms"
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td><td>');
	var __val__ = module.timestamp + " ms"
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td></tr>');
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in chain) {
	      $$l++;      var module = chain[$index];

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
	var __val__ = module.time + " ms"
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td><td>');
	var __val__ = module.timestamp + " ms"
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td></tr>');
	    }

	  }
	}).call(this);

	buf.push('</tbody></table>');
	    }

	  }
	}).call(this);

	}
	buf.push('</div></div></div>');
	}
	return buf.join("");
	}

/***/ })

});