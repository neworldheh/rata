let mpayment = document.querySelector(".wynik")
document.querySelectorAll("input")[3].innerHTML = 0
function wynik(){
    let cvalue = Number(document.querySelectorAll("input")[0].value);
    let rrso = Number(document.querySelectorAll("input")[1].value) / 100
    let years = Number(document.querySelectorAll("input")[2].value) * 12
    let prowizja = Number(document.querySelectorAll("input")[3].value) / 100
    cvalue = cvalue + cvalue * prowizja
    let mrrso = rrso / 12;
    let rata = (cvalue * mrrso) / (1 - Math.pow(1 + mrrso, -years))
    mpayment.innerHTML = rata.toFixed(2) + " PLN"
}