const mpayment = document.querySelector(".wynik");
const updatedValue = document.querySelector(".updated-value");
const commissionInfo = document.querySelector(".commission-info");
const loanUpdate = document.querySelector(".loan-update");

function wynik() {
    let cvalue = Number(document.querySelectorAll("input")[0].value) || 0;
    let rrso = (Number(document.querySelectorAll("input")[1].value) || 0) / 100;
    let years = (Number(document.querySelectorAll("input")[2].value) || 0) * 12;
    let prowizja = (Number(document.querySelectorAll("input")[3].value) || 0) / 100;

    cvalue += cvalue * prowizja;
    let base = Number(
    document.querySelectorAll("input")[0].value.replace(/\s/g,"")
) || 0;


if(base > 0 && prowizja > 0){

    let commission = cvalue - base;

    updatedValue.textContent =
        "Zaktualizowana kwota: " +
        cvalue.toLocaleString("pl-PL",{
            minimumFractionDigits:2,
            maximumFractionDigits:2
        }) +
        " PLN";


    commissionInfo.textContent =
        "z " +
        commission.toLocaleString("pl-PL",{
            minimumFractionDigits:2,
            maximumFractionDigits:2
        }) +
        " PLN prowizji";


    loanUpdate.classList.add("show");

}else{

    loanUpdate.classList.remove("show");

}

    if (years <= 0) {
        mpayment.textContent = "0 PLN";
        return;
    }

    if (rrso === 0) {
        mpayment.textContent = (cvalue / years).toFixed(2) + " PLN";
        return;
    }

    const mrrso = rrso / 12;
    const rata =
        (cvalue * mrrso) /
        (1 - Math.pow(1 + mrrso, -years));

    mpayment.textContent =
        isFinite(rata) ? rata.toFixed(2) + " PLN" : "0 PLN";
}

wynik();