console.log("Connected to JS");

let count1 =  0;
let count2 =  0;
let count3 =  0;



function startCount() {
    count1++;
    document.querySelector("#counter1").innerText = count1 + ' like(s)';

}

function startCountTwo() {
    count2++;
    document.querySelector("#counter2").innerText = count2 + ' like(s)';

}

function startCountThree() {
    count3++;
    document.querySelector("#counter3").innerText = count3 + ' like(s)';

}
