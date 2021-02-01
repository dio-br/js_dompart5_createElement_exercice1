let myDiv = document.getElementById('content')
let monTitre = document.createElement('h2')
monTitre.innerText = "Part 6 - Exercice 1";
myDiv.appendChild(monTitre)

// 2 // 
let myPara = document.createElement('p')
myPara.innerText = 'Ipsum ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut '
myDiv.appendChild(myPara)

// 3 // 
 
let myTitle = document.createElement('h1')
myTitle.innerText = "Le DOM - Création de HTML";
myDiv.appendChild(myTitle)
myDiv.insertBefore(myTitle, monTitre)


// 4 // 

let myDiv2 = document.getElementById('secondaire')
myDiv2.innerHTML = myDiv.innerHTML

let myh2 = document.querySelectorAll('h2')[1]
myh2.innerText = "Part 6 - Exercice 2 "

// 5 // 

let body = document.body;
let matiere = document.createElement('div');
matiere.setAttribute('id', 'matiere');
body.appendChild(matiere);

let listOrd = document.createElement('ol');
matiere.appendChild(listOrd);

let list1 = document.createElement('li');
let list2 = document.createElement('li');
let list3 = document.createElement('li');

listOrd.append(list1, list2, list3);

list1.innerText = "Manipulation d'éléments";
list2.innerText = "Récuperation d'éléments";
list3.innerText = "Events";
