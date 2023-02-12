document.getElementById('btn-withdraw').addEventListener('click',function(){



    const withdrawField=document.getElementById('withdraw-amount');

    const newWithdrawAmountString=withdrawField.value ;
    const newWithdrawAmount=parseFloat(newWithdrawAmountString);
    
    withdrawField.value='';


    const withDrawTotalElement=document.getElementById('withdraw-balance');

    const previousWithdrawTotalString=withDrawTotalElement.innerText;
    const previousWithdraw=parseFloat( previousWithdrawTotalString);

    const newWithdrawTotal=previousWithdraw + newWithdrawAmount;


    withDrawTotalElement.innerText=newWithdrawTotal;


    const BalanceElement=document.getElementById('balance-total');

    const preTotalbalanceString=BalanceElement.innerText;

    const preTotalbalance=parseFloat(preTotalbalanceString);

    const newBalanceTotal=preTotalbalance - newWithdrawAmount;

   BalanceElement.innerText=newBalanceTotal;







})