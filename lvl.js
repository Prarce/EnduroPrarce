var canvas = document.getElementById('index.html'),//con esto estoy seleccionando el html 
    contexto = canvas.getContext('2d');

    var spriteSheet = new Image();
spriteSheet.src = '../img/Fondos/1.png';

contexto.fillStyle = "red";//esto sirve para el relleno
contexto.fillRect(90,100,7,30);//tamaño de la imagen
contexto.fillRect(100,100,50,30);
//Iniciamos el dibujo del contorno
contexto.beginPath();
contexto.arc(150,115,15,1,5 * Math.PI, 0,5 * Math.PI, false);//esto genera un semi circulo 
//Cerramos el contorno
contexto.closePath();
contexto.fill();

//Dibujamos la segunda bala
contexto.strokeStyle = "yellow";//esto crea el contorno
contexto.strokeRect(190, 100, 7, 30);
contexto.strokeRect(200, 100, 50, 30);
contexto.beginPath();
contexto.arc(250, 115, 15, 1,5 * Math.PI, 0,5 * Math.PI, false);//esto genera un semi circulo 
contexto.closePath();
//Aplicamos el contorno
contexto.stroke();

//Imagen del personaje
var spriteSheet = new Image();//esto es una variable acumuladora
spriteSheet.onload = function(){
    contexto.drawImage(spriteSheet, 0, 0);
}
