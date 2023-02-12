document.getElementById('btn-submit').addEventListener('click',function(){

    
    const emailField=document.getElementById('user-email');
    const Email=emailField.value;
 
    
    const passWordField=document.getElementById('user-password')
    const Password=passWordField.value;
    if(Email=='baburasel675@gmail.com'&&Password==='12345')
    {
        window.location.href='bank.html';
      
    }
    else{
        alert('please enter valid user name or password');
    }



})