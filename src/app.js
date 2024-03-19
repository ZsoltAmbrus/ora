document.getElementById('egy').textContent = '37';

//document.querySelector('.ketto').textContent='245'

const a = document.getElementsByClassName('ketto');//ez tomb ad vissza
for (let i = 0; i<2; i++) {
    a[i].textContent = 'valamik';
}
//a[0].textContent = 'valami'; tömbökre igy hivatkozunk  
//a[1].textContent = 'valami';
//const b = document.getElementsByTagName('h2');//tömb
//b[1].textContent = 'alma';   //ezek is tömbök

const c =document.querySelectorAll('h2');
 for ( let i =0; i<2; i++) {
     c[i].innerHTML = '<i>szilva</i>';
     c[i].style.background = 'navy'
     c[i].style.color = 'white';
     c[i].style.padding = '6px';
 }
      //tömb
//ÖSSZESET IRJA ÁT

console.error('Igy a hiba')
console.warn('Figyelmeztessel')
console.log('Szimplacska te')

c.forEach(kiskutya => {
    kiskutya.style.borderRadius = '10px'
});


const mehetGomb = document.getElementById('mehetGomb');
//Névtelen függvény
//két paramétere van 1 string , és 1 névtelen föggvény
// click eseményt kezelünk 
mehetGomb.addEventListener('click', () => {// ide irom mi kell történjen
    doit();//fügvény meghívása


});
//függvény
function doit()
{
    alert("műkszik")
}

const inputs = document.querySelectorAll('form input')//Formon belül vannak az elmek
const formButton = document.querySelector('#formButton')

formButton.addEventListener('click', () => {
    inputs.forEach((input) => {
        console.log(input.value);
    });
});


//const lista = document.querySelector('#lista');
//const li = document.createElement('li');
//li.textContent = 'alma';
//lista.append(li)

//const li2 = document.createElement('li');
//li2.textContent = 'körte';
//lista.appendChild(li2)

const nevlista = document.querySelector('#nevlista');

const nevek = ['Béla', 'Lajos', 'Ferenc', 'Dénes'];

nevek.forEach((nev) => {
    const li = document.createElement('li');
    li.textContent = nev;
    nevlista.append(li)
});

const nameInput = document.querySelector('#name');
const addButton = document.querySelector('#addButton');
addButton.addEventListener('click', ()  => {
    //alert('megye') jo 
startAdd();
})

function startAdd(){
    //alert('egi') jo
    const name = nameInput.value;
    nevek.push(name) //hozzá fűzi
    //alert(nevek)
    nevlista.append(makeLi(name)); // hozzá adja most már alistához
    
}

function makeLi(text) {
    var li = document.createElement('li');
    li.textContent = text;
    return li; 
}