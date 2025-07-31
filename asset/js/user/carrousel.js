// carrousel du debut
const carrosel = document.getElementById('carrousel');
var image = carrosel.querySelector('.limage');
let couleurActuelle = 'vert';

// fonctionnement du carrousel sans appuyer sur le bouton
setInterval(()=>{
    if(couleurActuelle === 'vert'){
        carrosel.classList.add('blue');
        image.src = 'asset/images/fruits.png';
        couleurActuelle = 'blue';
    }else{
        carrosel.classList.remove('blue');
        image.src = 'asset/images/legume.png';
        couleurActuelle = 'vert';
    }
}, 5000);

//en appuyant sur le bouton gauche
const gauche = carrosel.querySelector('#gauche');
gauche.addEventListener('click', function(){
    if(carrosel.classList.contains('blue')){
        carrosel.classList.remove('blue');
        image.src = 'asset/images/legume.png';
    }else{
        carrosel.classList.add('blue');
        image.src = 'asset/images/fruits.png';
    }
});

//en appuyant sur le bouton droite
const droite = carrosel.querySelector('#droite');
droite.addEventListener('click', function(){
    if(carrosel.classList.contains('blue')){
        carrosel.classList.remove('blue');
        image.src = 'asset/images/legume.png';
    }else{
        carrosel.classList.add('blue');
        image.src = 'asset/images/fruits.png';
    }
});


// carrosel de phare 
var boutonavancer = document.querySelector('.card .phare .produits .action #avancer');
var boutonreculer = document.querySelector('.card .phare .produits .action #reculer');
var liste = document.querySelectorAll('.card .phare .produits .contenu');
// appuie sur le bouton avancer 

function defiler(){
    liste.forEach(liste => {
        liste.classList.remove('active');
    });
}

let i=0;
let j=0
function defilerdevant(){
    if(i==4){
        liste[3].classList.add('active');
        liste[4].classList.add('active');
        liste[5].classList.add('active');
    }else{
        for (let index = 0; index < 3; index++) {
            i++;
            liste[i-1].classList.add('active');
        }
        j++;
        i = j;
    }
    
}

function defilerderriere(){
    j--;
    i=j;
    if(i<0){
        liste[0].classList.add('active');
        liste[1].classList.add('active');
        liste[2].classList.add('active');
    }else{
        for (let index = 0; index < 3; index++) {
            i++;
            liste[i-1].classList.add('active');
        }
        
    }
}

boutonavancer.addEventListener('click', function(){
    defiler()
    defilerdevant();
})

boutonreculer.addEventListener('click', function(){
    defiler();
    defilerderriere();
})