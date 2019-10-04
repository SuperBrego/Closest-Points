
class PointSaver{
	
	constructor(_element, _context) {
    	this.canvas = _element;
    	this.context = _context;
		this.render = new Render(this.canvas, this.context);

    	this.temporaryLocations = [];
		this.points = [];
		this.points_interest;

	}

	run(){

		this.canvas.onclick = event => {
			var rect = this.canvas.getBoundingClientRect();

    		var center_X = event.clientX - rect.left;
    		var center_Y = event.clientY - rect.top;
			this.render.drawPoints(center_X, center_Y, 5, "#000000");
			this.points.push(new Point(center_X, center_Y));
			
			sortByX(this.points);
			if(this.points.length > 2){
				points_interest = divideAndConquer(this.points);
				console.log(points_interest);
			}
    	}

	}

	clearPoints() {
		this.points = [];
		this.render.clear();
	}
}