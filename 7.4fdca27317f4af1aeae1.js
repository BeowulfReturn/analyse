webpackJsonp([7],{

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

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

	var app = __webpack_require__(5);
	var modulesGraph = __webpack_require__(16);

	module.exports = function(id) {
		id = parseInt(id, 10);
		var m = app.mapModulesUid[id];
		document.title = "module " + m.id;
		$(".page").html(__webpack_require__(41)({
			stats: app.stats,
			id: id,
			module: m,
			issuer: app.mapModulesUid[m.issuerUid]
		}));
		modulesGraph.show();
		modulesGraph.setActiveModule(id);
		return function() {
			modulesGraph.hide();
		}
	};

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var jade = __webpack_require__(11);

	module.exports = function anonymous(locals, attrs, escape, rethrow, merge
	/*``*/) {
	attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
	var buf = [];
	with (locals || {}) {
	var interp;
	buf.push('<div class="container-fluid"><div class="row"><div class="col-md-6"><div class="well"><table width="100%"><tbody><tr><td><a');
	buf.push(attrs({ 'href':("#module/" + (module.uid) + ""), "class": ('btn') + ' ' + ('btn-success') + ' ' + ('disabled') }, {"href":true}));
	buf.push('>');
	var __val__ = module.id
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a></td><td><pre><code>');
	var __val__ = module.name.split("!").join("\n")
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></pre></td></tr></tbody></table></div></div><div class="col-md-3"><div class="well"><h4>time</h4>');
	if ( module.time)
	{
	buf.push('<code>');
	var __val__ = module.time + "ms"
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code>');
	if ( module.timestamp)
	{
	var __val__ = " finished @ "
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('<code>');
	var __val__ = module.timestamp + "ms"
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code>');
	}
	}
	else
	{
	buf.push('Compile with <code>--profile</code>.');
	}
	buf.push('</div></div><div class="col-md-3"><div class="well"><h4>size</h4>');
	var __val__ = __webpack_require__(13)(module.size)
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</div></div></div><div class="row"><div class="col-md-3"><div class="well"><h4>flags</h4>');
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
	buf.push('</div></div><div class="col-md-3"><div class="well"><h4>chunks</h4>');
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
	    }

	  }
	}).call(this);

	buf.push('</div></div><div class="col-md-6"><div class="well">');
	if ( issuer)
	{
	buf.push('<h4>issuer</h4><table width="100%"><tbody><tr><td>');
	if ( typeof issuer.uid === "number")
	{
	buf.push('<a');
	buf.push(attrs({ 'href':("#module/" + (issuer.uid) + ""), "class": ('btn') + ' ' + ('btn-success') }, {"href":true}));
	buf.push('>');
	var __val__ = issuer.id
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	}
	else
	{
	buf.push('<span class="btn btn-success">');
	var __val__ = issuer.id
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</span>');
	}
	buf.push('</td><td><pre><code>');
	var __val__ = issuer.name.split("!").join("\n")
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></pre></td></tr></tbody></table>');
	}
	buf.push('</div></div></div><div class="row"><div class="col-md-12"><div class="well"><h4>reasons</h4><table class="table table-condensed"><thead><tr><th>type</th><th colspan="2">module</th><th>user request</th><th>location</th></tr></thead><tbody>');
	// iterate module.reasons
	;(function(){
	  if ('number' == typeof module.reasons.length) {

	    for (var $index = 0, $$l = module.reasons.length; $index < $$l; $index++) {
	      var reason = module.reasons[$index];

	buf.push('<tr><td>');
	var __val__ = reason.type
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td><td style="width: 1px">');
	if ( typeof reason.moduleUid === "number")
	{
	buf.push('<a');
	buf.push(attrs({ 'href':("#module/" + (reason.moduleUid) + ""), "class": ('btn') + ' ' + ('btn-success') }, {"href":true}));
	buf.push('>');
	var __val__ = reason.moduleId
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	}
	else
	{
	buf.push('<span class="btn btn-success">');
	var __val__ = reason.moduleId
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</span>');
	}
	buf.push('</td><td>');
	if ( reason.module)
	{
	buf.push('<pre><code>');
	var __val__ = reason.module.split("!").join("\n")
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></pre>');
	}
	buf.push('</td><td>');
	if ( reason.userRequest)
	{
	buf.push('<pre><code>');
	var __val__ = reason.userRequest.split("!").join("\n")
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></pre>');
	}
	buf.push('</td><td>');
	if ( reason.loc)
	{
	buf.push('<code>');
	var __val__ = reason.loc
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code>');
	}
	buf.push('</td></tr>');
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in module.reasons) {
	      $$l++;      var reason = module.reasons[$index];

	buf.push('<tr><td>');
	var __val__ = reason.type
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td><td style="width: 1px">');
	if ( typeof reason.moduleUid === "number")
	{
	buf.push('<a');
	buf.push(attrs({ 'href':("#module/" + (reason.moduleUid) + ""), "class": ('btn') + ' ' + ('btn-success') }, {"href":true}));
	buf.push('>');
	var __val__ = reason.moduleId
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	}
	else
	{
	buf.push('<span class="btn btn-success">');
	var __val__ = reason.moduleId
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</span>');
	}
	buf.push('</td><td>');
	if ( reason.module)
	{
	buf.push('<pre><code>');
	var __val__ = reason.module.split("!").join("\n")
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></pre>');
	}
	buf.push('</td><td>');
	if ( reason.userRequest)
	{
	buf.push('<pre><code>');
	var __val__ = reason.userRequest.split("!").join("\n")
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></pre>');
	}
	buf.push('</td><td>');
	if ( reason.loc)
	{
	buf.push('<code>');
	var __val__ = reason.loc
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code>');
	}
	buf.push('</td></tr>');
	    }

	  }
	}).call(this);

	buf.push('</tbody></table></div></div></div><div class="row"><div class="col-md-12"><div class="well"><h4>dependencies</h4><table class="table"><thead><tr><th>type</th><th colspan="2">module</th><th>user request</th><th>location</th></tr></thead><tbody>');
	// iterate module.dependencies
	;(function(){
	  if ('number' == typeof module.dependencies.length) {

	    for (var $index = 0, $$l = module.dependencies.length; $index < $$l; $index++) {
	      var dependency = module.dependencies[$index];

	buf.push('<tr><td>');
	var __val__ = dependency.type
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td><td style="width: 1px">');
	if ( typeof dependency.moduleUid === "number")
	{
	buf.push('<a');
	buf.push(attrs({ 'href':("#module/" + (dependency.moduleUid) + ""), "class": ('btn') + ' ' + ('btn-success') }, {"href":true}));
	buf.push('>');
	var __val__ = dependency.moduleId
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	}
	else
	{
	buf.push('<span class="btn btn-success">');
	var __val__ = dependency.moduleId
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</span>');
	}
	buf.push('</td><td>');
	if ( dependency.module)
	{
	buf.push('<pre><code>');
	var __val__ = dependency.module.split("!").join("\n")
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></pre>');
	}
	buf.push('</td><td>');
	if ( dependency.userRequest)
	{
	buf.push('<pre><code>');
	var __val__ = dependency.userRequest.split("!").join("\n")
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></pre>');
	}
	buf.push('</td><td>');
	if ( dependency.loc)
	{
	buf.push('<code>');
	var __val__ = dependency.loc
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code>');
	}
	buf.push('</td></tr>');
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in module.dependencies) {
	      $$l++;      var dependency = module.dependencies[$index];

	buf.push('<tr><td>');
	var __val__ = dependency.type
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</td><td style="width: 1px">');
	if ( typeof dependency.moduleUid === "number")
	{
	buf.push('<a');
	buf.push(attrs({ 'href':("#module/" + (dependency.moduleUid) + ""), "class": ('btn') + ' ' + ('btn-success') }, {"href":true}));
	buf.push('>');
	var __val__ = dependency.moduleId
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	}
	else
	{
	buf.push('<span class="btn btn-success">');
	var __val__ = dependency.moduleId
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</span>');
	}
	buf.push('</td><td>');
	if ( dependency.module)
	{
	buf.push('<pre><code>');
	var __val__ = dependency.module.split("!").join("\n")
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></pre>');
	}
	buf.push('</td><td>');
	if ( dependency.userRequest)
	{
	buf.push('<pre><code>');
	var __val__ = dependency.userRequest.split("!").join("\n")
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></pre>');
	}
	buf.push('</td><td>');
	if ( dependency.loc)
	{
	buf.push('<code>');
	var __val__ = dependency.loc
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code>');
	}
	buf.push('</td></tr>');
	    }

	  }
	}).call(this);

	buf.push('</tbody></table></div></div></div><div class="row"><div class="col-md-12"><pre><code>');
	var __val__ = module.source
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></pre></div></div></div>');
	}
	return buf.join("");
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ })

});