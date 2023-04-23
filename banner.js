window.addEventListener('load', function(){
//je déclare mon indice
let indice = 0;

/*//Début : flèches intéractives
const flecheGauche = document.querySelector(".arrow_left");
//Ajout des event listener sur la flèche gauche
flecheGauche.addEventListener("click",function()
{
    //je décrémente l'indice
    indice--;
    //si indice est négatif
    if(indice<0)
    {
        //je fais tourner en boucle indice
        indice = slides.length-1;
    }
    //je pointe vers la class dot_selected
    const bulletMarque = document.querySelector(".dot_selected");
    //je supprime la class
    bulletMarque.classList.remove("dot_selected");
    // je pointe ID en cours
    const idEnCours = document.getElementById(indice);
    //J'ajoute la class dot_selected sur l'ID en cours
    idEnCours.classList.add("dot_selected");
    //Pointe l'image dans le html
    const imageBanner = document.querySelector(".banner-img");
    //je modifie l'image en fonction de l'ID
    imageBanner.src = "assets/images/slideshow/"+slides[indice]["image"];
    //je pointe le texte avec la class rajouter dans le html
    const texteBanner = document.querySelector(".banner_texte");
    //je modifie le texte en fonction de l'indice
    texteBanner.innerHTML = slides[indice]["tagLine"];
});

const flecheDroite = document.querySelector(".arrow_right");
//Ajout des event listener sur la flèche droite
flecheDroite.addEventListener("click",function()
{
    //acrémente l'indice
    indice++;
    //l'indice ne dépasse pas du tableau
    if(indice>slides.length-1)
    {
        //je fais tourner en boucle l'indice
        indice=0;
    }
    //je pointe vers la class dot_selected
    const bulletMarque = document.querySelector(".dot_selected");
    //je supprime la class
    bulletMarque.classList.remove("dot_selected");
    // je pointe ID en cours
    const idEnCours = document.getElementById(indice);
    //J'ajoute la class dot_selected sur l'ID en cours
    idEnCours.classList.add("dot_selected");
    //Pointe l'image dans le html
    const imageBanner = document.querySelector(".banner-img");
    //je modifie l'image en fonction de l'ID
    imageBanner.src = "assets/images/slideshow/"+slides[indice]["image"];
    //je pointe le texte avec la class rajouter dans le html
    const texteBanner = document.querySelector(".banner_texte");
    //je modifie le texte en fonction de l'indice
    texteBanner.innerHTML = slides[indice]["tagLine"];
});
//Fin : flèches intéractives*/

//Début : mise à jours réelle de la bannière
//Les deux flèches ont plusieurs éléments en commun => Début : de la fonction
function bannerMiseAJour ()
{
    const bulletMarque = document.querySelector(".dot_selected");
    bulletMarque.classList.remove("dot_selected");
    const idEnCours = document.getElementById(indice);
    idEnCours.classList.add("dot_selected");
    const imageBanner = document.querySelector(".banner-img");
    imageBanner.src = "assets/images/slideshow/"+slides[indice]["image"];
    const texteBanner = document.querySelector(".banner_texte");
    texteBanner.innerHTML = slides[indice]["tagLine"];
}
//Fin : de la fonction
const flecheDroite = document.querySelector(".arrow_right");
flecheDroite.addEventListener("click", function()
{
    indice++;
    if(indice>slides.length-1)
    {
        indice=0;
    }
    //Ajout de la fonction créée plus haut
    bannerMiseAJour();
});

const flecheGauche = document.querySelector(".arrow_left");
flecheGauche.addEventListener("click",function()
{
    indice--;
    if(indice<0)
    {
        indice = slides.length-1;
    }
    //Ajout de la fonction créée plus haut
    bannerMiseAJour();
});
//Fin : mise à jours réelle de la bannière

//Début : bullet points
const bulletPoints = document.querySelector(".dots");
for (let i=0 ; i<slides.length ; i++)
{
    const newBullet = document.createElement("div");
    newBullet.classList.add("dot");
    //donne l'attribut
    newBullet.setAttribute("id", i);
    if (i==0)
    {
        newBullet.classList.add("dot_selected");
    }
    bulletPoints.appendChild(newBullet);
}
//Fin : bullet points
})