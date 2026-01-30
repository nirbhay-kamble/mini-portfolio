//select elements
const form=document.querySelector("form");
const nameInput = document.querySelector("input[type='text']");
const emailInput = document.querySelector("input[type='email']");
const numberInput = document.querySelector("input[type='number']");
const messageInput = document.querySelector("textarea");

//event on form submit
form.addEventListener("submit", function(e){
    e.preventDefault(); //stop page refresh

    if(nameInput.value === "" || emailInput.value === "" || messageInput.value === "" || numberInput.value === ""){
        alert("Please Fill All The Fields");
        return;
    }

    alert("Thank you " + nameInput.value + "! Your message is sent successfully.");

    //clear form
    nameInput.value="";
    emailInput.value="";
    numberInput.value="";
    messageInput.value="";
} );
