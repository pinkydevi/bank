// handle deposite button

function getInputValue(inputId) {

    const inputValue = document.getElementById('inputId');
    const newText = inputValue.value;
    const amountText = parseFloat(newText);

    // clear the deposite input field 
    inputValue.value = '';
    return amountText;


}




document.getElementById('deposite-button').addEventListener('click', function () {

    // const inputValue = document.getElementById('deposite-input');
    // constnewText = inputValue.value;
    // const amountText = parseFloat(newDepositeText);
    // console.log(depositeAmount);

    const amountText = getInputValue('deposit-input');

    // Update deposite total
    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositText = depositeTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositText);
    const newDepositeTotal = previousDepositeAmount + amountText;
    depositeTotal.innerText = newDepositeTotal;

    // update account balance 

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + amountText;
    balanceTotal.innerText = newBalanceTotal;





});
// handle withdraw event handlar 
document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('withdraw clicked')
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(newWithdrawAmount);
    const newWithdrawAmount = getInputValue('withdraw-input');

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-balance');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;





});