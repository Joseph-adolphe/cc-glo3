// ..................Dropdown categori.................. 

var cat = document.querySelector('#cat');
var list = document.querySelector('#list');
cat.addEventListener('click', e=>{
    list.classList.toggle('voir');
    const classe = cat.className;
    if (classe === "fas fa-caret-right"){
        cat.className="";
        cat.classList.add('fas');
        cat.classList.add('fa-caret-down');
    }else if (classe === "fas fa-caret-down"){
        cat.className="";
        cat.classList.add('fas');
        cat.classList.add('fa-caret-right');
    }
});

// ..................Dropdown categori.................. 

// .....................sidebar..................... 

var aside = document.querySelector('aside');

aside.addEventListener('mouseenter', function(){
    aside.classList.add('active');
})

aside.addEventListener('mouseleave', function(){
    aside.classList.remove('active');
})

// .....................sidebar..................... 


