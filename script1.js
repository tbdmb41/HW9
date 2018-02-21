


function ProcessBox1() {
    var randomNumber1 = 0;
    while ((randomNumber1 == 0) || (randomNumber1 >= 4)) {
        randomNumber1 = Math.floor((Math.random() * 10) + 1)
        alert("randomNumber1 = " + randomNumber1)
    };
    if (randomNumber1 == 1) {
        document.getElementbyID("one1").className = "one";
    }
    else if (randomNumber1 == 2) {
        document.getElementbyID("two2").className = "two";
    }
    else if (randomNumber1 == 3) {
        document.getElementbyID("three3").className = "three";
    }
}
function ProcessBox2() {
    do {
        randomNumber2 = Math.floor((Math.random() * 10) + 1);
    } while (randomNumber2 == 0 || randomNumber2 >= 4);

    if (randomNumber2 == 1) {
        document.getElementbyID("two2").className = "one";
    }
    else if (randomNumber2 == 2) {
        document.getElementbyID("two2").className = "two";
    }
    else if (randomNumber2 == 3) {
        document.getElementbyID("two2").className = "three";
    }
    return result;
}

function ProcessBox3() {
    do {
        randomNumber3 = Math.floor((Math.random() * 10) + 1);
    } while (randomNumber3 == 0 || randomNumber3 >= 4);

    if (randomNumber3 === 1) {
        document.getElementbyID("three3").className = "one";
    }
    else if (randomNumber3 === 2) {
        document.getElementbyID("three3").className = "two";
    }
    else if (randomNumber3 === 3) {
        document.getElementbyID("three3").className = "three";
    }
    return result;
}

function Congrat(randomNumber1, randomNumber2, randomNumber3) {
    if ((randomumNumber1 === 1 && randomNumber2 === 1) &&
        (randomNumber2 == 1 && randomNumber3 === 1)) {
        document.getElementbyID('msg').innerHTML = "You won! Whoop Whoop!!!";
    }
    if ((randomumNumber1 === 2 && randomNumber2 === 2) &&
        (randomNumber2 == 2 && randomNumber3 === 2)) {
        document.getElementbyID('msg').innerHTML = "You won! Whoop Whoop!!!";
    }
    if ((randomumNumber1 === 3 && randomNumber2 === 3) &&
        (randomNumber2 == 3 && randomNumber3 === 3)) {
        document.getElementbyID('msg').innerHTML = "You won! Whoop Whoop!!!";
    }
    else {
        document.getElementbyID('msg').innerHTML = "You lost! Maybe next time";
    }
}
   /* Congrats(randomNumber1, randomNumber2, randomNumber3);  */
