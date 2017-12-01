webpackJsonp([10],{

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

	var app = __webpack_require__(5);

	module.exports = function() {
		var nextPage = Array.prototype.slice.call(arguments);
		document.title = "upload";
		$("body").html(__webpack_require__(50)());
		$(".modal").modal({show: true});
		$("#file").change(loadFromFile);
		$("#example").click(loadFromExample);

		function loadFromExample() {
			__webpack_require__.e/* require */(11, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(51)]; (function(example) {
				app.load(example);
				$(".modal").modal("hide");
				app.loadPage.apply(app, nextPage);
			}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
		}

		function loadFromFile() {
			var files = $("#file")[0].files;
			var fileReader = new FileReader();
			fileReader.readAsText(files[0]);
			fileReader.onload = function() {
				var data = fileReader.result;
				app.load(JSON.parse(data));
				$(".modal").modal("hide");
				app.loadPage.apply(app, nextPage);
			};
			fileReader.onerror = function(err) {
				alert(err);
			};
		}
	};


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(11);

	module.exports = function anonymous(locals, attrs, escape, rethrow, merge
	/*``*/) {
	attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
	var buf = [];
	with (locals || {}) {
	var interp;
	buf.push('<nav class="navbar navbar-default"><div class="container-fluid"><ul class="nav navbar-nav"><li><a href="">Open</a></li><li><a href="#home">Home</a></li><li><a href="#modules">Modules</a></li><li><a href="#chunks">Chunks</a></li><li><a href="#assets">Assets</a></li><li><a href="#warnings">Warnings</a></li><li><a href="#errors">Errors</a></li><li><a href="#hints">Hints</a></li></ul></div></nav><div id="sigma-modules" style="width: 99%; height: 500px; display:none;"></div><div id="sigma-chunks" style="width: 99%; height: 500px; display:none;"></div><div class="page"></div><div class="modal fade"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Upload webpack stats</h4></div><div class="modal-body"><div class="form-group"><label for="file">JSON file</label><input type="file" id="file" class="form-control"/></div><div class="form-group"><label for="example">Example</label><div><button type="btn btn-default" id="example">Use example</button></div></div></div><div class="modal-footer"></div></div></div></div>');
	}
	return buf.join("");
	}

/***/ })

});