document.getElementById('deposite-button').addEventListener('click', function () {

    const depositeInput = document.getElementById('deposite-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);

    // get current deposite

    const depositeTotal = document.getElementById('deposite-total');
    const depositeTotalText = depositeTotal.innerText;
    const previousDepositeTotal = parseFloat(depositeTotalText);
    depositeTotal.innerText = previousDepositeTotal + depositeAmount;
    console.log(depositeTotalText);


    // Upadte balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositeAmount;

    // clear input field
    depositeInput.value = '';
})


//Reduce current Withdraw

document.getElementById('withdraw-button').addEventListener('click', function () {


    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // Reduce Withdraw

    const withdrawTotal = document.getElementById('withdraw-balance');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotalText = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotalText + withdrawAmount;
    console.log(withdrawTotalText);



    // Update Balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;


    // clear input field
    withdrawInput.value = '';






})