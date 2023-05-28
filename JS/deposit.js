// step-1 add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function() {
// step-2 get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDeposit = depositField.value;
    const newDepositAmount = parseFloat(newDeposit);

// step-3 get the current deposit total
// for non input (element other than input,textarea) use innerText to get the text
    const depositAmount = document.getElementById('deposit-amount');
    const previousDepositTotalString = depositAmount.innerText;
    const previousDepositAmount = parseFloat(previousDepositTotalString);

// step-4 add numbers to set the total deposit
    const currentDepositTotal = previousDepositAmount + newDepositAmount;
    depositAmount.innerText = currentDepositTotal;

// step-5 get balance current total

    const balanceTotal = document.getElementById('balance-total');
    const previousbalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousbalanceTotalString);
    
// step-6 calculate current total balance

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = currentBalanceTotal;







    // step-7 clear the input field
    depositField.value = ' ';
})