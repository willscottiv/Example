console.log("Connected to JS");

var counter = document.querySelector('#counter');
let count =  0;


function startCount() {
    count++;
    counter.innerText = count + ' like(s)';

}
