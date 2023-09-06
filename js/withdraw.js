/*
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValue function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw total and set the value
4-5. set new withdraw total by using setTextElementValue
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementById

*/ 


document.getElementById('btn-withdraw').addEventListener('click',function(){

    const newWithdrawAmount = getInputValueById('withdraw-field');

    const previousWithdrawTotal = getTextElementValueById('withdraw-total');


    const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;

    setTextElementValueById('withdraw-total',newWithdrawTotal);

    const previousBalanceTotal= getTextElementValueById('balance-total');

    const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;

    setTextElementValueById('balance-total',newBalanceTotal);
})