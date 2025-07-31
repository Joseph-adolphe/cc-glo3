var payer = document.getElementById('payer');
var closer = document.getElementById('close');
var modal = document.querySelector('.modal');
payer.addEventListener('click', function(){
    modal.classList.add('active');
});
closer.addEventListener('click', function(){
    modal.classList.remove('active');
});

// calcul du panier 
var table = document.querySelectorAll('table tbody tr');
// let easy
let p1 = 1000;
let p2 = 2000;
let p3 = 3000;
let p4 = 1500;
var tableau = [p1, p2, p3, p4];
var prime = document.getElementById('prime')
var primes = document.getElementById('primes')
table.forEach((table, p) => {
    const nouveau = table.querySelector('table tbody tr td:nth-child(4)');
    const ancien = table.querySelector('table tbody tr td:nth-child(2)');
    const coef = table.querySelector('table tbody tr td input');

    coef.addEventListener('input', function(){
        const numcoef = coef.value;
        const ancienValeur = parseFloat(ancien.textContent);
        const nouvealleValeur = ancienValeur*numcoef;
        nouveau.textContent=nouvealleValeur;
        var element = 0;
        tableau[p] = nouvealleValeur;
        element = tableau[0] + tableau[1] + tableau[2] +tableau[3];
        prime.textContent = element;
        primes.textContent = element;
        // console.log(tableau);
        // console.log(element);
    });

    // easy = table.querySelector('table tbody tr td:nth-child(4)');
    // console.log(easy);
});

// CALCUL DE LA SOMME DU PANIER 


// let somme = 0;
// table.forEach(table => {
//     const tr = table.querySelectorAll('table tbody tr td')
//     const prix = tr[tr.length -2];
//     const valeur = parseFloat(prix.textContent);
//     somme += valeur;
// });

// console.log(somme);