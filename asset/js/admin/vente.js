var lignes= document.querySelectorAll('#montableau tr');
lignes.forEach((lignes, index) => {
    if(index % 2===0){
        lignes.classList.add('blanc');
    }
});