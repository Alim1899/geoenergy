'use strict';

//Adding menu toolbar to navbar
const toggleBtn = document.querySelector('.toggle');
const list = document.querySelector('.list');

toggleBtn.addEventListener('click', function(e){
    e.preventDefault()
    if(list.classList.contains('toggler'))  list.classList.remove('toggler');
    else list.classList.add('toggler');
})