

// function Login(){
//     if (label.style.display == "block")
//         document.getElementById("data__label").style.display = "none";
//     login__ = login;
// }

// function viewDiv(){
//     if (label.style.display == "block")
//         document.getElementById("data__label").style.display = "none";
//     else
//         document.getElementById("data__label").style.display = "block";
// }

// let log = document.getElementById("info");

// let button = document.getElementById("button");


let click = document.getElementById('menu').onclick = clone
let parent = document.getElementById('author_main');

function clone(){
    for (i=0; i<5; i++) {
        let elem = parent.querySelector('.author_block');
        let clone = elem.cloneNode(true);
        parent.appendChild(clone)
        console.log(clone);
    }
}
// var ar = ['qwertyuiopasdfghjklzxcvbnm'];
// var sum = 0;
// for (var i=0, len=ar.length; i<len; i++) {
//     if ( typeof ar[i] === 'number' ) {
//         sum += ar[i];
//     }
// }
// console.log( sum );

// let button__next = document.getElementById('button__next');

// let latin = ['qwertyuiopasdfghjklzxcvbnm']


// latin.forEach(function(person){
//     console.log(person[0])
// })

// data_input.value = ['']

// data_input.forEach(function(person){
//     console.log(person[0])
// })


// function login(){
//     console.log(data_input.value)
// }
