
/*
 * HeatMapData Class
 */
var HeatMapData = (function () {
    // private static
    var nextId = 1;
	var bombs = [];
	
	/*
	 * Add Bomb Position
	 */
	this.addBombPosition = function(x, y) {
		if(bombs.length > 0) {
			var result = $.grep(bombs, function(e){ return (e.posX == x && e.posY == y); });
			if (result.length == 0) {
				var bombsLength=bombs.length+1;
				bombs[bombsLength] = {
					posX: x,
					posY: y,
					count: 1
				};
				console.log("Create bomb position: " +bombs[bombsLength].posX+ "/"+bombs[bombsLength].posY +" = " + bombs[bombsLength].count);
			} else if (result.length == 1) {
				console.log("Update bomb position");
				/*bombs[i] = {
					posX: x,
					posY: y,
					count: count++
				};*/
			} else {
			  // multiple items found
			}
		} else {
			bombs[0] = {
				posX: x,
				posY: y,
				count: 1
			};
			console.log("Create first bomb position: " +bombs[0].posX+ "/"+bombs[0].posY +" = " + bombs[0].count);
		}
	},
	
	/*
	 * Remove Bomb Position
	 */
	this.removeBombPosition = function(x, y) {
		console.log("Removed bomb from " +x+ "/"+y);
	}
});