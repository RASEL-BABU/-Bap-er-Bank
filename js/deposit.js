document.getElementById('btn-deposit').addEventListener('click',function(){


    const Deposite=document.getElementById('deposite-amount');

    const newdepositeAmountString=Deposite.value;
    const  newdeposite=parseFloat(newdepositeAmountString);

    



    const depositeTotalAmount=document.getElementById('deposite-total');

    const preTotalAmountString=depositeTotalAmount.innerText;

    const preTotalAmount=parseFloat(preTotalAmountString);
  

    const  totalDepoSite=preTotalAmount+ newdeposite;

    depositeTotalAmount.innerText=totalDepoSite;
    Deposite.value='';

    const  balanceTotal =document.getElementById('balance-total');


    const preBalanceString=balanceTotal.innerText;
    const prebalance=parseFloat(preBalanceString);
    const currentBalanceTotal=prebalance+newdeposite;
    balanceTotal.innerText=currentBalanceTotal;



})