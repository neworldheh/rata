let input1 = document.querySelectorAll("input")[0]
let input2 = document.querySelectorAll("input")[1]
let input3 = document.querySelectorAll("input")[2]
let payment = document.querySelectorAll(".loan")[1]
let mpayment = document.querySelector(".wynik")
function wynik() {
    let mstopa = input2.value / 12
    mpayment.innerHTML = mstopa
}