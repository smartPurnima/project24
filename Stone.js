class Stone{
	constructor(x,y,r){
		var options={
     'restitution':0.8,
	 'friction':0.9,
	 'density':12
		}
	// assign options to the rubber ball
        this.x=x;
        this.y=y;
		this.body=Bodies.rectangle(this.x, this.y,100,100,options);
		this.width=100;
        this.height=100;
        World.add(world, this.body);
        
	}
	display()
	{
			var stonepos=this.body.position;		
			push();
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			//draw the ellipse here to display the rubber ball
            rect(0, 0, this.width, this.height);
			pop();
	}

}