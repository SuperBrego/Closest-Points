class Render{

	constructor(_context){
        this.context = _context;
		return this;
	}

	drawPoints(x, y, raio)  {
        var ctx = this.context;

        ctx.save();

        if( (points_interest.pt1.x == x && points_interest.pt1.y == y) || 
            (points_interest.pt2.x == x && points_interest.pt2.y == y)
          )
            ctx.fillStyle = "#FF0000";
        else
            ctx.fillStyle = "#000000";

        ctx.beginPath();
        ctx.scale(6, 6);
        ctx.arc(x + 50 , y + 50, raio, 0, 2 * Math.PI);
        ctx.fill();

        ctx.restore();
    }

};