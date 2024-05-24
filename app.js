function myFunction(b) {

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
    let dltBtn = document.getElementById('inp')
    dltBtn.value = dltBtn.value.slice(0, dltBtn.value.length-1)
}