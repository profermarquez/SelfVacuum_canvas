class Basura{
    constructor(x,y,width,height)
    {   
        this.x=x;
        this.y=y;
        this.width=width;
        this.heigth=height;
        this.angle=0;
        
       
    
        
    }
   getPuntosFomateados(){

   }

    draw(contexto)
    {
        contexto.beginPath();
        contexto.fillStyle = "red";
        contexto.rect(
            this.x-this.width/2,
            this.y-this.heigth/2,
            this.width,
            this.heigth
            
        );    
        contexto.fill();
        //console.log("entre draw basura");
    }

    update(habitacionBorders)
    {
        this.polygon=this.#createPoligono();
       // console.log(habitacionBorders);
    }

    
    #createPoligono()
        {
            let points=[];
            const rad=Math.hypot(this.width,this.heigth)/2;
            const alpha =Math.atan2(this.width, this.heigth);
            points.push({
                x:this.x-Math.sin(this.angle-alpha)*rad,
                y:this.y-Math.cos(this.angle-alpha)*rad
            });

            points.push({
                x:this.x-Math.sin(this.angle+alpha)*rad,
                y:this.y-Math.cos(this.angle+alpha)*rad
            });

            points.push({
                x:this.x-Math.sin(Math.PI+this.angle-alpha)*rad,
                y:this.y-Math.cos(Math.PI+this.angle-alpha)*rad
            });

            points.push({
                x:this.x-Math.sin(Math.PI+this.angle+alpha)*rad,
                y:this.y-Math.cos(Math.PI+this.angle+alpha)*rad
            });
            //console.log("puntos de la basura ",points);
            return points;

        }
}