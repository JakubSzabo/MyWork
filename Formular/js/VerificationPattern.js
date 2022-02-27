function fNameVerifi(){
    var name = document.getElementById('fname');
    var pattern = /\D+/;
    
    if(pattern.test(name.value) == true){
        name.style.borderColor = 'black';
    }
    else{
        name.style.borderColor = 'red';
    }
}

function lNameVerifi(){
    var lastname = document.getElementById('lname');
    var pattern = /\D+/;
    
    if(pattern.test(lastname.value) == true){
        lastname.style.borderColor = 'black';
    }
    else{
        lastname.style.borderColor = 'red';
    }
}

function emailVerifi(){
    var email = document.getElementById('email');
    var pattern = /^(\w{3,})[@]((\w{1,}.){1,})([.]\w{2,4}$)/;
    
    if(pattern.test(email.value) == true){
        email.style.borderColor = 'black';
    }
    else{
        email.style.borderColor = 'red';
    }
}

function numberVerifi(){
    var number = document.getElementById('phoneNumber');
    var pattern = /\d{10}/;
    
    if(pattern.test(number.value) == true){
        number.style.borderColor = 'black';
    }
    else{
        number.style.borderColor = 'red';
    }
}


/*function checkPattern() {
    var elem = document.getElementById("name");

    var re = /^[a-zA-Z0-9_]+$/;

    return re.test(elem.value);
}*/