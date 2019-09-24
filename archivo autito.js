// Class KeyboardListener.
<script type="text/javascript" src="archivo autito.js"></script>

function KeyboardListener() {  //Con esta Funcion se declaran las teclas que se van a usar
    // Properties
    this.keychar = null; 
    this.getPressed = function () {
    
    return this.keychar;
    
    };
    
    this.kLeft = function () { //la tecla izquierda se va a usar para girar a la izquierda
    return String.fromCharCode(27); //el numero 27 es el codigo ASCII de la flecha izquierda
    
    };
    
    this.kUp = function () {//la tecla arriba se va a usar para acelerar
    return String.fromCharCode(24); //el numero 24 es el codigo ASCII de la flecha arriba
    
    };
    
    this.kRight = function () {//la tecla derecha se va a usar para girar a la derecha
    
    return String.fromCharCode(26); //el numero 26 es el codigo ASCII de la flecha derecha
    
    };

// Metodos.

this.listenKeyleft = function (e) { //Este es el metodo para decirle que haga al apretar la tecla declarada
    var keynum;
    if(e.which) keynum = e.which; //se fija si es google chrome// IE9/Firefox/Chrome/Opera/Safari.
    else{
    Window.alert("Falla en el sistema, usted no está usando el navegador indicado");
    this.keychar = String.fromCharCode(keynum);//pasa lo que haya puesto el usuario al otro keychar y si es verdadero, pasa. Si es falso, se saca
    return true;
    };
};

this.listenKeyright = function (e) { //Este es el metodo para decirle que hacer al apretar la tecla declarada
var keynum;
if(e.which) keynum = e.which; //se fija si es google chrome
// IE9/Firefox/Chrome/Opera/Safari.
else{
window.alert("Falla en el sistema, usted no está usando el navegador indicado");//salta un mensaje de error
this.keychar = String.fromCharCode(keynum);//pasa lo que haya puesto el usuario al otro keychar y si es verdadero, pasa. Si es falso, se saca
return true;
};
};

this.listenKeyup = function (e) { //Este es el metodo para listar a tecla arriba

this.keychar = null;

return true;


//personajes

// Class Character.
function Character() {//aca se carga la imagen de nuestro personaje 
    // Properties.
    this.image = new Image(); this.image.src = "../img/Personajes/1.png";
    this.xPos = 10; this.yPos = 10;
    this.died = false;
    
    }

};

//Codigo modificado por Tomás Prado y Santiago Ollarce
//5°3°
}