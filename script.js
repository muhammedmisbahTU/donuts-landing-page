
let emailInput = document.getElementById("emailInput");
let submitBtn = document.getElementById("submitBtn");


const validateEmail = (email)=> {
    return String(email)
    .toLowerCase()
    .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
}


submitBtn.addEventListener("click", ()=>{
    const emailvalue=emailInput.value.trim();


    if (validateEmail(emailvalue)){
        // alert("success!");
        emailInput.classList.remove("is-invalid");
        emailInput.classList.add("is-valid");
        emailInput.value="";
    }else{
        // alert("please enter a valid email address.");
        emailInput.classList.add('is-invalid');
    }
});