class Render{

	constructor(){
		return this;
	}

	drawPoints()  {
    var ctx = this.context;

    ctx.save();

    ctx.fillStyle = this.cor;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.raio, 0, 2 * Math.PI, false);
    ctx.fill();

    ctx.restore();
  }

};