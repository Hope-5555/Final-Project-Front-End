// Navigations Section
const hamburgerMenu = document.querySelector("#hamburger");
const navList = document.querySelector("ul");
const closeBtn = document.querySelector("#close-btn");

hamburgerMenu.addEventListener("click", () => {
  navList.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  navList.style.display = "none";
});

// Page scrolling effect
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("show-on-scroll");
  } else {
    header.classList.remove("show-on-scroll");
  }
});

// Form Switching
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");
const form4 = document.getElementById("form4");
const form5 = document.getElementById("form5");
const btns = document.querySelectorAll(".next-btn");
const form = document.querySelector("form");

const nexBtn1 = document.getElementById("btn1");
const nexBtn2 = document.getElementById("btn2");
const nexBtn3 = document.getElementById("btn3");
const nexBtn4 = document.getElementById("btn4");
const allBtns = document.querySelectorAll(".next-btn");

// Personal Information Inputs
const personal1Input = document.querySelector(".pInput");
const personal2Input = document.querySelector(".pInput2");
const personal3Input = document.querySelector(".pInput3");
const personal4Input = document.querySelector(".pInput4");

// Academic Inputs
const academic1Input = document.querySelector(".aInput");
const academic2Input = document.querySelector(".aInput2");
const academic3Input = document.querySelector(".aInput3");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Personal Information Inputs Validation

  nexBtn1.onclick = () => {
    if (
      personal1Input.value == "" ||
      personal2Input.value == "" ||
      personal3Input.value == "" ||
      personal4Input.value == ""
    ) {
      alert("A field is Empty");
    } else {
      form1.classList.remove("show");
      form2.classList.add("show");
    }
  };
  // End

  // Academic Inputs Validation
  nexBtn2.onclick = () => {
    if (
      academic1Input.value == "" ||
      academic2Input.value == "" ||
      academic3Input.value == ""
    ) {
      alert("A field is Empty");
    } else {
      form2.classList.remove("show");
      form3.classList.add("show");
    }
  };

  nexBtn3.onclick = () => {
    form3.classList.remove("show");
    form4.classList.add("show");
  };

  nexBtn4.onclick = () => {
    alert("Thanks you Continue");

    form4.classList.remove("show");
    form5.classList.add("show");
  };
});

// School Section
// End

// Register and Login Forms
const registerForm = document.getElementById("register-container");
const loginForm = document.getElementById("login-container");
const registerFormBtn = document.getElementById("register-form-btn");
const loginFormBtn = document.getElementById("login-form-btn");

loginFormBtn.addEventListener("click", () => {
  registerForm.style.display = "none";
  loginForm.style.display = "flex";
});

registerFormBtn.addEventListener("click", () => {
  registerForm.style.display = "flex";
  loginForm.style.display = "none";
});
