// step-1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function (event) {
    // step-2 get the email adress inside the email input field
    // always remember to use .value to get text from an input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3 get password
    const passField = document.getElementById('user-password');
    const password = passField.value;
    
    // DANGER: DO NOT VERIFY email password on the client side
    // step-4 verify email and password
    if (email == 'sontan@baap.com' && password == 'secret') {
        window.location.href = 'bank.html';
    }
    else{
        alert('sorry incorrect password!!');
    }
})