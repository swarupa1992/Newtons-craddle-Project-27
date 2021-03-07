class Bob
{
	constructor(x,y)
	{
			var options={
				
				restitution:1,
				friction:0.3,
				density:0.8
				
				}	
		
		this.body=Bodies.circle(x, y, 25 ,options);
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		
			strokeWeight(2);
			fill(255,0,255)
			ellipse(pos.x,pos.y,50,50);
					
	}

}