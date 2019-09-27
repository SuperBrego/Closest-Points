
var INFINITO = 9999999999.9;

function sortByX(array_Points){

	var dump = new point();

	for (var i = 0; i < array_Points.length; i++) {

		for (var j = 0; j < array_Points.length - i - 1; j++) {
			if (array_Points[j].x > array_Points[j + 1].x) {
				dump = array_Points[j];
				array_Points[j] = array_Points[j + 1];
				array_Points[j + 1] = dump;
			}
		}
	}
}

function divideAndConquer(array_Points) {

	console.log(array_Points);

	if(array_Points.length <= 1){
		var mixPoint = new points_interest();
		mixPoint.distance = INFINITO;
		return mixPoint;
	}
	if(array_Points.length == 2) {
		var x1 = array_Points[0].x;
		var x2 = array_Points[1].x;

		var y1 = array_Points[0].y;
		var y2 = array_Points[1].y;

		var mixPoint = new points_interest(array_Points[0],array_Points[1]);
		mixPoint.distance = Math.sqrt( ( 	Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) ) );
		return mixPoint;
	}

	var mix1, mix2, mix3;

	var middle = Math.floor(array_Points.length / 2);

	var left = divideAndConquer(array_Points.slice(0, middle));
	var right = divideAndConquer(array_Points.slice(middle));

	var middlePoint;
	
	if(left.length - 1 > 0) {
		middlePoint = new points_interest( left[left.length - 1], right[0] );
		middlePoint.distance = Math.sqrt( Math.pow(middlePoint.pt1.x - middlePoint.pt2.x, 2) + Math.pow( middlePoint.pt1.y - middlePoint.pt2.y, 2) );
	}
	else{
		middlePoint = new points_interest(left[0], right[0]);
		middlePoint.distance = INFINITO;
	}

	if (left.distance < right.distance && left.distance < middlePoint.distance) {
		return left;
	}
	else if (right.distance < middlePoint.distance) {
		return right;
	}
	else {
		return middlePoint;
	}
	
}