function enviarFooter() {

    var name, phone;

    name = document.getElementById('name-footer');
    phone = document.getElementById('phone-footer');
   
    if (name.value == "") {
        alert("Por favor, digite um nome válido");
    }
    if(phone.value.length > 11 || phone.value.length < 10){
        alert("Por favor, digite um telefone válido");
    }
}
