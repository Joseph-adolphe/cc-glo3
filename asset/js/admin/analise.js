// ..................le premier Graph........................
const ctx= document.getElementById('premier').getContext('2d');
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
// ..................fin du premier Graph.................... 

// ..................le deuxieme Graph........................
const ctr= document.getElementById('deuxieme').getContext('2d');
const chart2 = new Chart(ctr, {
    type: 'bar',
    data:{
        labels:['Jan', 'Fev', 'Mars', 'Avr', 'Mai', 'Juin', 'Jul', 'Aôut', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets:[{
            label: 'Ventes',
            data: [10000, 11000, 11009, 11040, 11360, 11407, 11496, 11508, 11702, 11850, 11946, 12077],
            backgroundColor: 'rgba(247, 22, 74, 0.8)',
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
// ..................fin du deuxieme Graph.................... 

// ..................le troisieme Graph........................
const profil= document.getElementById('profil').getContext('2d');
const chart3 = new Chart(profil, {
    type: 'doughnut',
    data:{
        labels:['Reste', 'Achat', 'Taxe',],
        datasets:[{
            label: 'Ventes',
            data: [350000, 100000, 25000],
            backgroundColor: ['rgba(255, 99, 132, 0.5)','rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)'],
            borderColor:  ['rgb(255, 193, 99)','rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 2
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
// ..................fin du troisieme Graph.................... 


const capital= document.getElementById('capital').getContext('2d');
const chart4 = new Chart(capital, {
    type: 'pie',
    data:{
        labels:['Reste', 'Achat', 'Taxe',],
        datasets:[{
            label: 'Ventes',
            data: [350000, 100000, 25000],
            backgroundColor: ['rgba(255, 99, 132, 0.5)','rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)'],
            borderColor:  ['rgb(255, 193, 99)','rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 2
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
