webpackJsonp([9],{

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

	var app = __webpack_require__(5);

	module.exports = function(stats) {
		document.title = "select";
		$("body").html(__webpack_require__(47)(stats));
		$(".modal").modal({show: true});
		$(".js-select").click(function () {
			var index = $(this).data("index");
			app.load(stats.children[index]);
			$(".modal").modal("hide");
			app.loadPage("home");
	  });
	};


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(11);

	module.exports = function anonymous(locals, attrs, escape, rethrow, merge
	/*``*/) {
	attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
	var buf = [];
	with (locals || {}) {
	var interp;
	buf.push('<nav class="navbar navbar-default"><div class="container-fluid"><ul class="nav navbar-nav"><li><a href="">Open</a></li><li><a href="#home">Home</a></li><li><a href="#modules">Modules</a></li><li><a href="#chunks">Chunks</a></li><li><a href="#assets">Assets</a></li><li><a href="#warnings">Warnings</a></li><li><a href="#errors">Errors</a></li><li><a href="#hints">Hints</a></li></ul></div></nav><div id="sigma-modules" style="width: 99%; height: 500px; display:none;"></div><div id="sigma-chunks" style="width: 99%; height: 500px; display:none;"></div><div class="page"></div><div class="modal fade"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Select webpack compile</h4></div><div class="modal-body">');
	// iterate children
	;(function(){
	  if ('number' == typeof children.length) {

	    for (var index = 0, $$l = children.length; index < $$l; index++) {
	      var val = children[index];

	buf.push('<button');
	buf.push(attrs({ 'data-index':(index), "class": ('js-select') + ' ' + ('btn') + ' ' + ('btn-primary') + ' ' + ('btn-block') }, {"data-index":true}));
	buf.push('>' + escape((interp = val.name || ("Compile #" + (index+1))) == null ? '' : interp) + '</button>');
	    }

	  } else {
	    var $$l = 0;
	    for (var index in children) {
	      $$l++;      var val = children[index];

	buf.push('<button');
	buf.push(attrs({ 'data-index':(index), "class": ('js-select') + ' ' + ('btn') + ' ' + ('btn-primary') + ' ' + ('btn-block') }, {"data-index":true}));
	buf.push('>' + escape((interp = val.name || ("Compile #" + (index+1))) == null ? '' : interp) + '</button>');
	    }

	  }
	}).call(this);

	buf.push('</div><div class="modal-footer"></div></div></div></div>');
	}
	return buf.join("");
	}

/***/ })

});