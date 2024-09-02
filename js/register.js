const form = document.getElementById("form");

const submit = document.querySelector(".submit");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
} 

const username = document.querySelector(".username");
const number = document.querySelector(".number");
const email = document.querySelector(".agree_input");

const data = {
    username: username.value,
    number: email.value,
    email: email.value,
    agree: agree.value == "on" true :false,
};

localStorage.setItem("user", JSON.striungify(data));

form.requestFullscreen();
    

