let form = document.getElementById("form");
const email = document.getElementById("email");
const error = document.querySelector(".error-msg");
const success = document.querySelector(".success-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});

refresh();

function validate() {
  let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let value = email.value.trim();
  //error
  if (!value.match(emailFormat)) {
    success.classList.add("hide");
    error.classList.remove("hide");
  } // success
  else {
    error.classList.add("hide");
    success.classList.remove("hide");
    email.value = "";
  }
}

function refresh() {
  email.value = "";
}

// inline validation

// const formInput = document.querySelector(".form__input");

// email.addEventListener("input", () => {
//   let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   let value = email.value.trim();
//   if (!value.match(emailFormat)) {
//     formInput.classList.remove("border-success");
//     formInput.classList.add("border-error");
//   } else {
//     formInput.classList.add("border-success");
//     formInput.classList.remove("border-error");
//   }
// });
