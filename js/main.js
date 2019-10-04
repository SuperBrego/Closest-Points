
var points_interest;
var render;

function start(){

	canvas = document.getElementById("drawArea");
	context = canvas.getContext("2d");
	pointSaver = new PointSaver(canvas, context);
	points_interest = [];
}

function newRNDPoints(){

	var min = 0.5;
	var max = canvas.width - 50;
	var arrayPairs = [];
	for(var i = 0; i < 16; i++){
		arrayPairs.push( new Point(
			Math.random() * (max - min) + min ),
			Math.random() * (max - min) + min );
	}
}

function originalPoints(){

	var arrayPairs = [];
	arrayPairs.push( 
			new Point(-13, 0.5), 
			new Point(-10.5, -11.5),
			new Point(-10, 9), 
			new Point(-4.5, -2),
			new Point(-1, 8.5),	
			new Point(0.5, 6),
			new Point(0.5, -12), 
			new Point(2, 12.5),
			new Point(3.5, 11),	
			new Point(5.5, 3),
			new Point(5.5, -7),	
			new Point(5, 11.5),
			new Point(6.5, 3.2), 
			new Point(7, -10),
			new Point(9, -5), 
			new Point(11.5, -4)
	);

	sortByX(arrayPairs);
	
	points_interest = divideAndConquer(arrayPairs);

	for(var i = 0; i < arrayPairs.length; i++){
		render.drawPoints( arrayPairs[i].x, arrayPairs[i].y, 1);
	}

}

