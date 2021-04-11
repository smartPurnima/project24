class Iron{
	constructor(x,y,r){
		var options={
     'restitution':0.8,
	 friction:3,
	 density:30
		}
	// assign options to the rubber ball
        this.x=x;
        this.y=y;
		this.body=Bodies.rectangle(this.x, this.y,50,30, options);
		this.height=30;
        this.width=50;
		World.add(world, this.body);
   
	}
	display()
	{
			var ironpos=this.body.position;		
			push();
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("brown");
			fill("brown");
			//draw the ellipse here to display the rubber ball
            rect(0, 0, this.width, this.height);
			pop();
	}

}