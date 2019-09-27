
function start(){

	var canvas = document.getElementById("drawArea");
	var context = canvas.getContext("2d");

	var arrayPairs = [];
	arrayPairs.push( 
			new point(-13, 0.5), new point(-10.5, -11.5),
			new point(-10, 9), new point(-4.5, -2),
			new point(-1, 8.5),	new point(0.5, 6),
			new point(0.5, -12), new point(2, 12.5),
			new point(3.5, 11),	new point(5.5, 3),
			new point(5.5, -7),	new point(5, 11.5),
			new point(6.5, 3.2), new point(7, -10),
			new point(9, -5), new point(11.5, -4)
		
	);

	console.log(arrayPairs);

	sortByX(arrayPairs);
	
	var points_interest = divideAndConquer(arrayPairs);

	console.log(points_interest);
}
