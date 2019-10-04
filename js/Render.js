class Render{

	constructor(_canvas, _context){
        this.canvas = _canvas;
        this.context = _context;
		return this;
	}

	drawPoints(x, y, raio)  {
        var ctx = this.context;

        ctx.save();
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.arc(x, y, raio, 0, 2 * Math.PI);
        ctx.fill();

        ctx.restore();
    }


    paintPointsInterest(){

        if(!points_interest){
            if(points_interest.pt2){
                var ctx = this.context;

                ctx.save();
                ctx.fillStyle = "#FF0000";
                ctx.beginPath();
                ctx.arc(points_interest.pt1.x, points_interest.pt1.y, raio, 0, 2 * Math.PI);
                ctx.fill();

                ctx.restore();

                ctx.beginPath();
                ctx.arc(points_interest.pt2.x, points_interest.pt2.y, raio, 0, 2 * Math.PI);
                ctx.fill();

                ctx.restore();
            }
        }
    }    

    clear(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

};