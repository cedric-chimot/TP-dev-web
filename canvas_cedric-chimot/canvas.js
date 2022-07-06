var canvas = document.getElementById("myCanvas");               /*référence au html et variable canvas*/
var ctx = canvas.getContext("2d");                              /*stockage du contexte de rendu 2d*/

/*imprimer un rectangle rouge sur le canva*/
ctx.beginPath();                                                /*début chemin d'instruction*/
ctx.rect(20, 40, 50, 50);                                       /*coordonnées du coin supérieur gauche et H/L */                                     
ctx.fillStyle = "#FF0000"                                       /*stockage de couleur*/
ctx.fill();                                                     /*utilisation de la couleur stockée*/
ctx.closePath();                                                /*fin chemin d'instruction*/

/*imprimer un cercle vert */
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);                     /*coord. x/y, rayon, angle départ/fin, direction du dessin */
ctx.fillStyle = "green"
ctx.fill();
ctx.closePath();

/*afficher un rectangle vide aux traits bleus*/
ctx.beginPath();
ctx.rect(160 ,10, 100, 40);                                     /*couleur bleu semi-transparente */
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";                       /*coloré le contour extérieur */
ctx.stroke();
ctx.closePath