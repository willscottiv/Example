console.log("Connected to JS");


function al() {
    alert("You did it!")
}


function remove() {
    var remove = document.querySelector(".bottom-main")
    remove.remove();
}


function c2f(temp) {
    return math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return math.round(5 / 9 * (temp - 32));
}



function convert(element) {
    console.log(element.value);
    for (var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i)
        var tempVal = parseInt(tempSpan.innerText);
        if (element.value == "celsius") {
            tempSpan.innerText =  f2c(tempVal);
        } else {
            tempSpan.innerText = c2f(tempVal);

        }

    }


}
