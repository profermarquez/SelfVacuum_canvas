class Habitacion{

    constructor(x,width,y,height){

        this.x=x;
        this.width=width;

        this.left =x-width/2;
        this.rigth =x+width/2;
        //agregado
        
        this.y=y;
        this.height =height;
       

        this.left2=this.y-height/2;
        this.rigth2=this.y+height/2;

        const topLeft ={x:this.left,y:-this.height};
        const topRight ={x:this.left,y:1};
        const bottomLeft ={x:this.left2,y:this.rigth2};
        const bottomRight ={x:this.rigth2,y:this.rigth2};
        const botonLeft2 = {x:this.left2,y:this.left2};
        const botonRight2 = {x:this.rigth2,y:1};
        const topRight2= {x:-10000,y:this.rigth2};
        const topLeft2= {x:this.rigth2,y:this.rigth2-55};
        

        this.border=[ [topLeft, bottomLeft], [topRight, bottomRight],[botonLeft2,botonRight2],[topRight2,topLeft2]];
        console.log(this.border);
        
        
    }

    draw(contexto)
    {
        contexto.lineWidth=5;
        contexto.strokeStyle="white";
        //console.log("llega");
        contexto.beginPath();//left
        contexto.moveTo(this.left,this.height);
        contexto.lineTo(this.left,1);
        contexto.stroke();

        contexto.beginPath();
        contexto.moveTo(this.rigth,-this.height);
        contexto.lineTo(this.rigth,this.height);
        contexto.stroke();

        //agregado
        //console.log("linas ",this.left2);
        contexto.beginPath();
        contexto.moveTo(this.left2,this.left2);
        contexto.lineTo(this.rigth2,this.left2);///superior
        contexto.stroke();

        contexto.beginPath();//inferior
        contexto.moveTo(-10000,this.rigth2);
        contexto.lineTo(this.rigth2,this.rigth2-55);
        contexto.stroke();






    }
}