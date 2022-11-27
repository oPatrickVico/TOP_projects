'use strict';
const p = (str) => console.log(str);

const password = document.querySelector("#password");
const confirm_password = document.querySelector("#password-confirmation");

function validatePassword(){
    if(password.value != confirm_password.value) {
      confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
      confirm_password.setCustomValidity('');
    }
  }
  
  password.onchange = validatePassword;
  confirm_password.onkeyup = validatePassword;