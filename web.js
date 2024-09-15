var a,b;

function newSet() {
    document.getElementById("btn-reveal").disabled = false
    a = Math.floor(Math.random()*100)
    b = Math.floor(Math.random()*100)

    document.getElementById("num1").innerHTML = a
    document.getElementById("num2").innerHTML = b

    document.getElementById("answer-text").innerHTML = ' '
}

function showAnswer() {
    document.getElementById("answer-text").innerHTML = a*b
}