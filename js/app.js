// Select input Field And Get value
function inputFieldAndGetvalue(inputFieldId) {
    return document.getElementById(inputFieldId).value;
}

function toSelectElement(ElementName) {
    return document.getElementById(ElementName);
}


const Calculate = toSelectElement('calculate').addEventListener('click', function () {

    const totalIncomeText = inputFieldAndGetvalue('income');
    const foodCost = inputFieldAndGetvalue('food');
    const rentCost = inputFieldAndGetvalue('rent');
    const clotheCost = inputFieldAndGetvalue('clothe');

    // when user do not corrent or valid input 

    if ((totalIncomeText <= 0) || (totalIncomeText == "") ||
        (foodCost <= 0) || (foodCost == "") ||
        (rentCost <= 0) || (rentCost == "") ||
        (clotheCost <= 0) || (clotheCost == "")) {
        verifyInput1();

    }

    // else if (isNaN(Number)) {
    //     verifyInput1();
    // }


    let totalIncome = parseInt(totalIncomeText);
    let totalExpense = parseInt(foodCost) + parseInt(rentCost) + parseInt(clotheCost);

    const totalCost = toSelectElement('total-expense');
    totalCost.innerText = totalExpense;

    let balanceTotal = totalIncome - totalExpense;
    let presentBalance = toSelectElement('balance');
    presentBalance.innerText = balanceTotal;



});

// saving calculation section

const saveMoney = toSelectElement('saving-click').addEventListener('click', function () {


    const totalIncomeText = inputFieldAndGetvalue('income');
    let totalincome = parseInt(totalIncomeText);
    const parseBalanceText = inputFieldAndGetvalue('saving-percentage');
    let parseBalance = parseInt(parseBalanceText);


    let afterCal = (totalincome * parseBalance) / 100;
    let savingAmount = toSelectElement('saving-amount');

    if ((totalincome <= 0) || (totalincome == "") ||
        (parseBalance <= 0) || (parseBalance == "") ||
        (parseBalance == totalincome) || (parseBalance == afterCal)) {
        verifyInput2();
    }

    // else if (isNaN) {
    //     verifyInput2();
    // }


    savingAmount.innerText = afterCal;

    let presentBalance = toSelectElement('balance');
    let presentBalanceTotal = parseInt(presentBalance.innerText);

    let remainingMoney = presentBalanceTotal - afterCal;

    const remainingBalance = toSelectElement('remaining-balance');
    remainingBalance.innerText = remainingMoney;

});

function verifyInput1() {

    const failerror = document.getElementById('notify-fail');
    failerror.style.display = 'block';
    successmessage.style.display = 'none';


};


function verifyInput2() {

    const successmessage = document.getElementById('notify-success');
    successmessage.style.display = 'block';
    failerror.style.display = 'none';


};

