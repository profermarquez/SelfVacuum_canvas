class Habitacion{

    constructor(x,width,y,height){

        this.x=x;
        this.width=width;
        this.y=y;
        this.height=height;

        this.left =x-((width/2)-10);
        this.right =x+((width/2)-10);

        this.top = y-((height/2)-10);
        this.bottom = y+((height/2)-65);

        const topLeft= {x:this.left,y:this.top}
        const bottomLeft= {x:this.left,y:this.bottom}
        const topRight= {x:this.right,y:this.top}
        const bottomRight= {x:this.right,y:this.bottom}
        

        this.borders=[
            [topLeft,bottomLeft],[topRight,bottomRight],[topLeft,topRight],[bottomLeft,bottomRight]
        ];
    
    }
    draw(ctx)
    {
        ctx.lineWidth=5;
        ctx.strokeStyle="white";

        ctx.beginPath();
        ctx.moveTo(this.left,this.top);
        ctx.lineTo(this.left,this.bottom);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.left,this.bottom);
        ctx.lineTo(this.right,this.bottom);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.left,this.top);
        ctx.lineTo(this.right,this.top);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.right,this.top);
        ctx.lineTo(this.right,this.bottom);
        ctx.stroke();
    }
}