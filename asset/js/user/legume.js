const barre = document.querySelector('.barre');
const promax = document.querySelector('.promax');
const fermer_pro = document.querySelector('.fermer-pro');

barre.addEventListener('click', function(){
    promax.classList.add('active');
});

fermer_pro.addEventListener('click', function(){
    promax.classList.remove('active');
});