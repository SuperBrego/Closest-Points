class Render{

	constructor(_canvas, _context){
        this.canvas = _canvas;
        this.context = _context;
		return this;
	}

	drawPoints(x, y, raio)  {
        var ctx = this.context;

        ctx.save();

        if(!points_interest){
            ctx.fillStyle = "#000000";
        }
        else {
            
            if(points_interest.pt2){
                if( 
                    (points_interest.pt1.x == x && points_interest.pt1.y == y) || 
                    (points_interest.pt2.x == x && points_interest.pt2.y == y)
                ) {
                    ctx.fillStyle = "#FF0000";
                }
                else{
                    ctx.fillStyle = "#000000";                    
                }
            }
        }

        ctx.beginPath();
        ctx.arc(x, y, raio, 0, 2 * Math.PI);
        ctx.fill();

        ctx.restore();
    }

    clear(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

};