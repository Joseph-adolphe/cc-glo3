// ..................le Graph........................
const ctx= document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data:{
        labels:['Jan', 'Fev', 'Mars', 'Avr', 'Mai', 'Juin', 'Jul', 'Aôut', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets:[{
            label: 'Ventes',
            data: [400, 3000, 2000, 1500, 1800, 2500, 3000, 3500, 3000, 2000, 1000, 2000, 400],
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'rgba(247, 22, 74, 1)',
            borderWidth: 1
        }]
    },
    options:{
        legend:{
            display:false
        },
        scales:{
            y:{
                beginAtZero: true
            }
        }
    }
});
// ..................fin le Graph.................... 


// ......colorer le tableu des commandes................
const ligne = document.querySelectorAll('#montableau tr');
ligne.forEach((ligne, index) => {
    if(index % 2 === 1){
        ligne.classList.add('noir')
    }
});
// ......colorer le tableu des commandes................

// ...........colorier le tableau des produits..............
const lignes = document.querySelectorAll('#montableau2 tr');
lignes.forEach((lignes, index)=>{
    if(index % 2 === 1){
        lignes.classList.add('blanc')
    }
})
// ...........colorier le tableau des produits..............

// ....................masquer le chart...............
var masquer = document.getElementById('masquer');
var partie = document.querySelector('.myChart');
masquer.addEventListener('click', function(){
    partie.style.display='none';
})
// ....................masquer le chart...............