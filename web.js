

function signin(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if(email == 'mikeappiah188@gmail.com' && password == 3437){
        alert('successfully signed in!')
        

    }

    else{
        alert('invaild logins!')
    }
}


document.getElementById('signupbtn').onclick = function(){
    let name = document.getElementById('name').value;
    let radio = document.getElementById('radio');
    let fradio = document.getElementById('fradio');
    let Terms = document.getElementById('CTS');
    let DOB = document.getElementById('dob').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let male = document.getElementById('male').value;
    let female = document.getElementById('female').value;

    if(radio || fradio && Terms.checked){
        alert('Succesfully signed up!')
    }


    else{
        alert('Agree to our terms ')
    }
}