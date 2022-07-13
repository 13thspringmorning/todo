'use strict';

const input = document.getElementById('input'),
            list = document.querySelector('#list'),
            btn = document.querySelector('#btn');

console.log(input.value);

function createElement() {
    const li = document.createElement('li');
    li.innerHTML = input.value;
    list.appendChild(li);
    input.value = '';
    
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
}

btn.addEventListener('click', () => {
    if(input.value === "") {
        alert('Type something')
    } else {
        createElement();
    }
});

document.addEventListener('click', (e) => {
   if(e.target.tagName === 'LI') {
       e.target.classList.toggle('checked');
   }
})

document.addEventListener('click', (e) => {
        if(e.target.className === 'close') { 
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        }
})



