
/*
 * HeatMapData Class
 */
var HeatMapData = (function () {
    // private static
    var nextId = 1;
	var bombs = [];
	var width,height, won, lastX, lastY;
	
	/*
	 * Set Game Size
	 */
	this.setGameSize = function(w, h) {
		this.width=w;
		this.height=h;
	},
	
	/*
	 * Game lost or won
	 */
	this.hasWon = function(val) {
		this.won = val;
	},
	
	/*
	 * Set last click
	 */
	this.setLastClick = function(x,y) {
		this.lastX = x;
		this.lastY = y;
	},
	
	/*
	 * Save Game Array
	 */
	this.saveGameData = function(gameArray) {
		for(var i=0; i < (this.width*this.height); i++) {
			var column = i % this.width;
			var row = (i - column) / this.width;
			bombs[i] = {
				x: column,
				y: row,
				value: gameArray[i]
			};
		}
	},
	
	// CouchDB jQuery-Plugin
	$.couch.urlPrefix = "http://localhost:5984";
	var database = "minesweeper";
	
	this.saveToCouch = function(gameFormatSize) {
		var doc = {
			width: this.width,
			height: this.height,
			fields: bombs,
			won: this.won,
			lastClick: [this.lastX, this.lastY],
			gameFormat: gameFormatSize
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