var canvas = document.getElementById("myCanvas");               /*référence au html et variable canvas*/
var ctx = canvas.getContext("2d");                              /*stockage du contexte de rendu 2d*/

/*code pour dessiner */
var x = canvas.width / 2;                                         /*variable x/y pour définir la position du cercle*/
var y = canvas.height - 30;
var dx = 2;                                                       /*ajout de valeur à x/y pour que la balle bouge*/
var dy = -2;

function drawBall() {
    ctx.beginPath();                                              
    ctx.arc(x, y, 10, 0, Math.PI * 2);                            
    ctx.fillStyle = "#0095DD"                                     
    ctx.fill();                                                  
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);             
    drawBall();                                             
    x += dx;                                                    
    y += dy;
}

setInterval(draw, 10);                                            /*Appel de la fonction"draw" toutes les 10 millisecondes*/

