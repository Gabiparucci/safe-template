function isEmail(email) {
    var email = document.getElementById('email');

    teste = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/;

    if (teste.exec(email)) {
        return true;
    } if (email.value == "") {
        return false;
    }else{
        return false;
    }
}

function enviar() {

    var name, email, phone;

    name = document.getElementById('name');
    email = document.getElementById('email');
    phone = document.getElementById('phone');
   
    if (name.value == "") {
        alert("Por favor, digite um nome válido");
    }
    if (!isEmail()) {
        alert("Por favor, digite um email válido");
    } 
    if(phone.value.length > 11 || phone.value.length < 10){
        alert("Por favor, digite um telefone válido");
    }
}

