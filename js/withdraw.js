
document.getElementById('btn-withdraw').addEventListener('click',function(){


    const withDraw=document.getElementById('withdraw-amount');

    const WithDrawString=withDraw.value;
    const newWithDraw=parseFloat(WithDrawString);


    const withDrawTotal=document.getElementById('withdraw-balance');

    const withDrawString=withDrawTotal.innerText;
    const  withDrawAmount=parseFloat(withDrawString);
   
    const TotalWithdraw= newWithDraw+withDrawAmount;
    withDrawTotal.innerText=TotalWithdraw;
    withDraw.value='';

    const withdraw2=document.getElementById('withdraw-amount');

    const withDrawString2=withdraw2.value;
    console.log(withDrawString2);
    
    



    


    
   

    

    
   











})