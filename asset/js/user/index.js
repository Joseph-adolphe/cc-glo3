// defilement de la barre des legumes 
var drop_legume = document.querySelector('#drop_legume');
var legume = document.querySelector('.menu ul li .legumes');
drop_legume.addEventListener('click', function(){
    legume.classList.toggle('active');
});

// defilement de la barre des fruits 
var drop_fruit = document.querySelector('#drop_fruit');
var fruit = document.querySelector('.menu ul li .fruit');
drop_fruit.addEventListener('click', function(){
    fruit.classList.toggle('active');
});

// defilement de la barre de boutique 
var drop_boutique = document.querySelector('#boutique');
var boutique = document.querySelector('.menu ul li .boutique');
drop_boutique.addEventListener('click', function(){
    boutique.classList.toggle('active');
});

// defilement des catégories 
var drop_cat= document.querySelector('#cat');
var cat = document.querySelector('nav .search .select .cat');
drop_cat.addEventListener('click', function(){
    cat.classList.toggle('active');
});

// modal connexion 
var connexion = document.querySelector('.connexion');
var connet = document.getElementById('conect');
var btn_fermer_con = document.getElementById('close-connection');
connet.addEventListener('click', function(){
    connexion.classList.add('active');
});
btn_fermer_con.addEventListener('click', function(){
    connexion.classList.remove('active');
});
// modal connexion 

// sidebar
var sidebar = document.querySelector('.sidebar');
var fermer_sidebar = document.querySelector('#fermer_sidebar')
var open_sidebar = document.querySelector('#open_sidebar');
open_sidebar.addEventListener('click', function(){
    sidebar.classList.add('active');
});
fermer_sidebar.addEventListener('click', function(){
    sidebar.classList.remove('active');
});
// sidebar