const modal = document.querySelector('.modal');
const btn = document.querySelector('.add-modal');

const fermer = document.querySelectorAll('.fermer');

function afficherModal(){
    modal.classList.add('active');
};

function fermerModal(){
    modal.classList.remove('active');
};

btn.addEventListener('click', function(){
    afficherModal();
});

fermer.forEach(fermer => {
    fermer.addEventListener('click', function(){
        fermerModal();
    });
});

