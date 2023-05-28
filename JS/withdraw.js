

// step-1 add event handler to the withdraw button
// step-2 get the withdraw amount from the withdraw input field
// -2.5 also make sure to convert the input value into a number by using parseFloat
// step-3 get previous withdraw total
// step-4 calculate total withdraw amount
// 4.5 set total withdraw amount
// step-5 clear the input field
document.getElementById('btn-withdraw').addEventListener('click',function() {
    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawString);

    
    // step-3
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawTotalString = withdrawAmount.innerText;
    const previousWithdrawTotal =  parseFloat(withdrawTotalString);   

    // step-6
    const balanceTotalEl = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalEl.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalString);
    if (newWithdrawAmount > balanceTotalAmount) {
        alert('baap er bank e eto tk nai');
        return;
    }

    // step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // step-5
    withdrawAmount.innerText = currentWithdrawTotal;

    // step-7
    const finalBalance = balanceTotalAmount - newWithdrawAmount;
    balanceTotalEl.innerText = finalBalance;
  
    // step-8
    withdrawField.value = '';
})