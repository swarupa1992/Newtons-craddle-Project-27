class Roof
{
	constructor()
	{
		var options={
			isStatic:true			
			}
		
		this.body=Bodies.rectangle(400,100,300 ,10, options);
		this.w = 300;
		this.h = 10;
 		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		
			strokeWeight(4);
			fill(255,220,220)
			rect(pos.x,pos.y,300,10);//or this.w,this.h
			
			
	}

}