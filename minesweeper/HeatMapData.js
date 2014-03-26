
/*
 * HeatMapData Class
 */
var HeatMapData = (function () {
    // private static
    var nextId = 1;
	var bombs = [];
	
	// CouchDB jQuery-Plugin
	$.couch.urlPrefix = "http://localhost:5984";
	var database = "minesweeper";
	
	this.saveToCouch = function() {
		var bombsdata = $(bombs).serializeArray();
		var x, y;
		var doc = {
			width: "null",
			height: "null",
			fields: bombsdata,
			won: false,
			lastClick: [x,y]
		};

		$.couch.db(database).saveDoc(doc, {
			success: function(data) {
				console.log(data);
			},
			error: function(status) {
				console.log(status);
			}
		});
	}
});