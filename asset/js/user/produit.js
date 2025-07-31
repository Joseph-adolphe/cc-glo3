// affichage des div en fonction des boutons
var btn_descrip = document.getElementById('description');
var btn_comment = document.getElementById('commentaire');
var description = document.getElementById('descript');
var commentaire = document.getElementById('comment');

function fermer(){
    description.classList.remove('active')
    commentaire.classList.remove('active')
}

btn_descrip.addEventListener('click', function(){
    fermer();
    description.classList.add('active');
});

btn_comment.addEventListener('click', function(){
    fermer();
    commentaire.classList.add('active');
});

// javascript de l'image 
var principale = document.querySelector('.card .produit .image .principale img');
var secondaire = document.querySelectorAll('.card .produit .image .secondaire div img');
secondaire.forEach(secondaire => {
    secondaire.addEventListener('click', function(){
        let essai = secondaire.src;
        console.log(secondaire.src);
        principale.src = secondaire.src;
    });
});