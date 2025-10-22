console.log('Document Object Modelling');
let i = document.getElementById('Isaac');
console.log(i);
i.innerText = 'testing testing';

let tagNames = document.getElementsByTagName('p');
console.log(tagNames);

let classNames = document.getElementsByClassName('test');
console.log(classNames);

// i.classList.add('bg');
i.classList.remove('mk');
