function getInput() {
    var inputName = document.getElementById("y-name").value;

    var inputDeposit = document.getElementById("amount").value;
    var InputTerm = document.getElementById("deposit-term").value;
    var monthPercent = 20 / 12;
    var result = ((InputTerm * monthPercent).toFixed(2) * inputDeposit) / 100;
    alert('Шановний ' + inputName + ',  Ви внесли ' + inputDeposit + ' грн., під 20% річних, на термін ' + InputTerm + ' місяців. За цей період часу Ви заробите ' + result + ' грн.')
}



document.getElementById("submit").onclick = getInput;