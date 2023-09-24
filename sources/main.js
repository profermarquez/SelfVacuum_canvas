const canvas=document.getElementById("miCanvas");
canvas.height=450;//window.innerHeight;
canvas.width=450;

const contexto =canvas.getContext("2d");
const habitacion = new Habitacion(canvas.width/2,canvas.width,canvas.height/2,canvas.height);
//console.log(canvas.width/2,canvas.width,canvas.height/2,canvas.height);
const vacuum = new Vacuum(50, 50, 50, 50);
const basuras2=[[new Basura(125,125,25,25)],[new Basura(150,150,25,25)],[new Basura(185,190,25,25)]];
const basuras= [new Basura(125,125,25,25),new Basura(150,150,25,25),new Basura(185,190,25,25)];



function cRU_x()
{}

animate();

function animate(){

    for(let i=0;i<basuras.length;i++){
        basuras[i].update(habitacion.borders);
    }
    
    vacuum.updated(habitacion.borders,basuras);
    
    canvas.height=400;
    habitacion.draw(contexto);
    //basura1.draw(contexto);
    vacuum.draw(contexto);
    
    for(let i=0;i<basuras.length;i++){
        basuras[i].draw(contexto);
    }

    requestAnimationFrame(animate);
}