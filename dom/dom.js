console.log('Document Object Modelling');
let i = document.getElementById('Isaac');
let parentDiv = document.getElementById('container');
// console.log(parentDiv);
i.innerText = 'testing testing';

let tagNames = document.getElementsByTagName('p');
// console.log(tagNames);

let classNames = document.getElementsByClassName('test');
// console.log(classNames);

// i.classList.add('bg');
// i.classList.remove('mk');

let dynamicH = document.createElement('h1')
dynamicH.textContent = 'a dynamically generated paragraph';
parentDiv.appendChild(dynamicH);

let dynamicP = document.createElement('p');
dynamicP.textContent = 'testing testing, 1 2, 12';
let firstChild = parentDiv.childNodes[0];
parentDiv.insertBefore(dynamicP, firstChild);

let addButton = document.getElementById('btnAdd');
addButton.addEventListener('click', addStyle);

let removeButton = document.getElementById('btnRemove');
removeButton.addEventListener('click', removeStyle);

function addStyle() {
    i.classList.add('bg');
}

function removeStyle() {
    i.classList.remove('bg');
}

let firstQuerry = document.querySelectorAll('.test');
console.log(firstQuerry);
