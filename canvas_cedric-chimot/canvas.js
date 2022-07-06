var canvas = document.getElementById("myCanvas");               /*référence au html et variable canvas*/
var ctx = canvas.getContext("2d");                              /*stockage du contexte de rendu 2d*/

/*code pour dessiner */
function draw() {

}
setInterval(draw, 10);                                          /*Appel de la fonction"draw" toutes les 10 millisecondes*/

/*dessin de la balle */
ctx.beginPath();                                                /*début chemin d'instruction*/
ctx.arc(50, 50, 10, 0, Math.PI*2);                              /*coord. x/y, rayon, angle départ/fin, direction du dessin*/
ctx.fillStyle =                                                 /*"#0095DD" stockage de couleur*/
ctx.fill();                                                     /*utilisation de la couleur stockée*/
ctx.closePath();                                                /*fin chemin d'instruction*/


