var canvas = document.getElementById("myCanvas");                       /*référence au html et variable canvas*/
var ctx = canvas.getContext("2d");                                      /*stockage du contexte de rendu 2d*/
var x = canvas.width / 2;                                               /*variable x/y pour définir la position du cercle*/
var y = canvas.height - 30;
var ballRadius = 10;                                                    /*rayon du cercle dessiné*/
var dx = 2;                                                             /*ajout de valeur à x/y pour que la balle bouge*/
var dy = -2;

/*dessin avec fonction simplifiée*/
/*ajout de la var ballRadius pour effet de collision direct*/
function drawBall() {
    ctx.beginPath();                                                    /*début chemin d'instruction*/
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);                          /*coord. x/y, rayon, angle départ/fin, direction du dessin*/
    ctx.fillStyle = "#0095DD"                                           /*stockage de couleur*/
    ctx.fill();                                                         /*utilisation de la couleur stockée*/
    ctx.closePath();                                                    /*fin chemin d'instruction*/
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);                   /*efface la trace laisser par la balle*/
    drawBall();


    if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;                                                       /*rebondissement de la balle sur le bord gauche et droit*/
    }

    if (y + dy > canvas.height-ballRadius || y + dy < ballRadius) {                 
        dy = -dy;                                                       /*rebondissement de la balle sur le bord inférieur & */
    }                                                                   /*inversion de la direction de la balle pour effet de limite zone de jeu*/
                                                                        
    x += dx;                                                            /*mise à jour des variables x/y*/
    y += dy;
}

setInterval(draw, 10);                                                  /*Appel de la fonction"draw" toutes les 10 millisecondes*/
