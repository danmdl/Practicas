var a = document.getElementById("dibujito");
var lienzo = a.getContext("2d");

dibujarLinea("blue",10,300,200,200)
dibujarLinea("red",100,30,200,200)

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal)
{
    lienzo.beginPath();     //comenzar a escribir
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);   //Desde donde comenzar
    lienzo.lineTo(xFinal, yFinal);      //hasta donde
    lienzo.stroke();           //hacer el trazo
    lienzo.closePath();       //tapar la birome.
}