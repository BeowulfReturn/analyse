webpackJsonp([2],{

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

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

	var app = __webpack_require__(5);
	var modulesGraph = __webpack_require__(16);

	module.exports = function(id) {
		id = parseInt(id, 10);
		document.title = "chunk " + id;
		$(".page").html(__webpack_require__(22)({
			stats: app.stats,
			id: id,
			chunk: app.mapChunks[id]
		}));
		modulesGraph.show();
		modulesGraph.setActiveChunk(id);
		return function() {
			modulesGraph.hide();
		}
	};

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(11);

	module.exports = function anonymous(locals, attrs, escape, rethrow, merge
	/*``*/) {
	attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
	var buf = [];
	with (locals || {}) {
	var interp;
	buf.push('<div class="container-fluid"><div class="row"><div class="col-md-4"><div class="well"><h4>chunk id</h4>');
	var __val__ = id
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</div></div><div class="col-md-4"><div class="well"><h4>size</h4>');
	var __val__ = __webpack_require__(13)(chunk.size)
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</div></div><div class="col-md-4"><div class="well"><h4>names</h4>');
	// iterate chunk.names
	;(function(){
	  if ('number' == typeof chunk.names.length) {

	    for (var $index = 0, $$l = chunk.names.length; $index < $$l; $index++) {
	      var name = chunk.names[$index];

	buf.push('<code>');
	var __val__ = name
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code>');
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in chunk.names) {
	      $$l++;      var name = chunk.names[$index];

	buf.push('<code>');
	var __val__ = name
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code>');
	    }

	  }
	}).call(this);

	buf.push('</div></div></div><div class="row">');
	if ( chunk.parents.length && chunk.children.length)
	{
	buf.push('<div class="col-md-3"><div class="well"><h4>parents</h4>');
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

	buf.push('</div></div><div class="col-md-3"><div class="well"><h4>children</h4>');
	// iterate chunk.children
	;(function(){
	  if ('number' == typeof chunk.children.length) {

	    for (var $index = 0, $$l = chunk.children.length; $index < $$l; $index++) {
	      var child = chunk.children[$index];

	buf.push('<a');
	buf.push(attrs({ 'href':("#chunk/" + (child) + ""), "class": ('btn') + ' ' + ('btn-info') }, {"href":true}));
	buf.push('>');
	var __val__ = child
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in chunk.children) {
	      $$l++;      var child = chunk.children[$index];

	buf.push('<a');
	buf.push(attrs({ 'href':("#chunk/" + (child) + ""), "class": ('btn') + ' ' + ('btn-info') }, {"href":true}));
	buf.push('>');
	var __val__ = child
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	    }

	  }
	}).call(this);

	buf.push('</div></div>');
	}
	else if ( chunk.parents.length)
	{
	buf.push('<div class="col-md-6"><div class="well"><h4>parents</h4>');
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

	buf.push('</div></div>');
	}
	else if ( chunk.children.length)
	{
	buf.push('<div class="col-md-6"><div class="well"><h4>children</h4>');
	// iterate chunk.children
	;(function(){
	  if ('number' == typeof chunk.children.length) {

	    for (var $index = 0, $$l = chunk.children.length; $index < $$l; $index++) {
	      var child = chunk.children[$index];

	buf.push('<a');
	buf.push(attrs({ 'href':("#chunk/" + (child) + ""), "class": ('btn') + ' ' + ('btn-info') }, {"href":true}));
	buf.push('>');
	var __val__ = child
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in chunk.children) {
	      $$l++;      var child = chunk.children[$index];

	buf.push('<a');
	buf.push(attrs({ 'href':("#chunk/" + (child) + ""), "class": ('btn') + ' ' + ('btn-info') }, {"href":true}));
	buf.push('>');
	var __val__ = child
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	    }

	  }
	}).call(this);

	buf.push('</div></div>');
	}
	buf.push('<div class="col-md-6"><div class="well"><h4>files</h4>');
	// iterate chunk.files
	;(function(){
	  if ('number' == typeof chunk.files.length) {

	    for (var $index = 0, $$l = chunk.files.length; $index < $$l; $index++) {
	      var file = chunk.files[$index];

	buf.push('<a href="#assets" class="btn btn-default">');
	var __val__ = file
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in chunk.files) {
	      $$l++;      var file = chunk.files[$index];

	buf.push('<a href="#assets" class="btn btn-default">');
	var __val__ = file
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	    }

	  }
	}).call(this);

	buf.push('</div></div></div><div class="row"><div class="col-md-12"><div class="well"><h4>origins</h4><table class="table table-condensed"><thead><tr><th>reasons</th><th>name</th><th colspan="2">module</th><th>location</th></tr></thead><tbody>');
	// iterate chunk.origins
	;(function(){
	  if ('number' == typeof chunk.origins.length) {

	    for (var $index = 0, $$l = chunk.origins.length; $index < $$l; $index++) {
	      var origin = chunk.origins[$index];

	buf.push('<tr><td>');
	// iterate origin.reasons
	;(function(){
	  if ('number' == typeof origin.reasons.length) {

	    for (var $index = 0, $$l = origin.reasons.length; $index < $$l; $index++) {
	      var reason = origin.reasons[$index];

	buf.push('<code>');
	var __val__ = reason
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in origin.reasons) {
	      $$l++;      var reason = origin.reasons[$index];

	buf.push('<code>');
	var __val__ = reason
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	    }

	  }
	}).call(this);

	buf.push('</td><td><code>');
	var __val__ = origin.name
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></td><td>');
	if ( typeof origin.moduleUid === "number")
	{
	buf.push('<a');
	buf.push(attrs({ 'href':("#module/" + (origin.moduleUid) + ""), "class": ('btn') + ' ' + ('btn-success') }, {"href":true}));
	buf.push('>');
	var __val__ = origin.moduleId
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	}
	else
	{
	buf.push('<span class="btn btn-success">');
	var __val__ = origin.moduleId
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</span>');
	}
	buf.push('</td><td><pre><code>');
	var __val__ = origin.moduleName.split("!").join("\n");
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></pre></td><td>');
	if ( origin.loc)
	{
	buf.push('<code>');
	var __val__ = origin.loc
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code>');
	}
	buf.push('</td></tr>');
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in chunk.origins) {
	      $$l++;      var origin = chunk.origins[$index];

	buf.push('<tr><td>');
	// iterate origin.reasons
	;(function(){
	  if ('number' == typeof origin.reasons.length) {

	    for (var $index = 0, $$l = origin.reasons.length; $index < $$l; $index++) {
	      var reason = origin.reasons[$index];

	buf.push('<code>');
	var __val__ = reason
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	    }

	  } else {
	    var $$l = 0;
	    for (var $index in origin.reasons) {
	      $$l++;      var reason = origin.reasons[$index];

	buf.push('<code>');
	var __val__ = reason
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code>');
	var __val__ = " "
	buf.push(escape(null == __val__ ? "" : __val__));
	    }

	  }
	}).call(this);

	buf.push('</td><td><code>');
	var __val__ = origin.name
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></td><td>');
	if ( typeof origin.moduleUid === "number")
	{
	buf.push('<a');
	buf.push(attrs({ 'href':("#module/" + (origin.moduleUid) + ""), "class": ('btn') + ' ' + ('btn-success') }, {"href":true}));
	buf.push('>');
	var __val__ = origin.moduleId
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</a>');
	}
	else
	{
	buf.push('<span class="btn btn-success">');
	var __val__ = origin.moduleId
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</span>');
	}
	buf.push('</td><td><pre><code>');
	var __val__ = origin.moduleName.split("!").join("\n");
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code></pre></td><td>');
	if ( origin.loc)
	{
	buf.push('<code>');
	var __val__ = origin.loc
	buf.push(escape(null == __val__ ? "" : __val__));
	buf.push('</code>');
	}
	buf.push('</td></tr>');
	    }

	  }
	}).call(this);

	buf.push('</tbody></table></div></div></div>');
	if ( chunk.modules && chunk.modules.length > 0)
	{
	buf.push('<div class="row"><div class="col-md-12"><div class="well"><h4>modules</h4><table class="table table-condensed"><thead><tr><th>id</th><th>name</th><th>size</th><th>chunks</th><th>flags</th></tr></thead><tbody>');
	// iterate chunk.modules
	;(function(){
	  if ('number' == typeof chunk.modules.length) {

	    for (var $index = 0, $$l = chunk.modules.length; $index < $$l; $index++) {
	      var module = chunk.modules[$index];

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
	    for (var $index in chunk.modules) {
	      $$l++;      var module = chunk.modules[$index];

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

	buf.push('</tbody></table></div></div></div>');
	}
	buf.push('</div>');
	}
	return buf.join("");
	}

/***/ })

});