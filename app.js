function myFunction(b) {
    console.log(b)

    document.getElementById('inp').value += b
}

function eq() {
    let evaluation = document.getElementById('inp');
    evaluation.value = eval(evaluation.value)

    document.getElementById('inp').value = eval(document.getElementById('inp').value)
}

function clr() {
    document.getElementById('inp').value = ' '
}

function dlt() {
    document.getElementById('inp').value = document.getElementById('inp').value.slice(0, document.getElementById('inp').value.length-1)
}