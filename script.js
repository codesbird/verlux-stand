
/* Navbar toggler */
const toggleBtn = document.querySelector(".navbar-toggler");
const navbarNav = document.querySelector(".navbar-nav");
const navCloseBtn = document.querySelector(".btn-nav-close");

toggleBtn.addEventListener("click", () => {
	navbarNav.classList.toggle("active");
});
navCloseBtn.addEventListener("click", () => {
	navbarNav.classList.remove("active");
});


/* Add icon on .nav-item if dropdown exists */
const navItems = document.querySelectorAll(".nav-item");



//form
const form = document.getElementById("contactForm");
const errorBox = document.getElementById("errorBox");

form.addEventListener("submit", function (e) {
  if (!form.checkValidity()) {
    e.preventDefault();
    errorBox.style.display = "block";
  } else {
    errorBox.style.display = "none";
  }
});


// Generate random CAPTCHA
function generateCaptcha() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 5; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
}

// Display CAPTCHA
const captchaElement = document.getElementById('captcha');
const refreshButton = document.getElementById('refresh-btn');
const verifyButton = document.getElementById('verify-btn');
const inputField = document.getElementById('captcha-input');
const resultMessage = document.getElementById('result-message');

let currentCaptcha = generateCaptcha();
captchaElement.textContent = currentCaptcha;

// Refresh CAPTCHA
refreshButton.addEventListener('click', () => {
  currentCaptcha = generateCaptcha();
  captchaElement.textContent = currentCaptcha;
  resultMessage.textContent = '';
  inputField.value = '';
});

// Verify CAPTCHA
// verifyButton.addEventListener('click', () => {
//   const userInput = inputField.value;
//   if (userInput === currentCaptcha) {
//     resultMessage.textContent = 'Captcha Verified Successfully!';
//     resultMessage.style.color = 'green';
//   } else {
//     resultMessage.textContent = 'Captcha Verification Failed. Try Again!';
//     resultMessage.style.color = 'red';
//   }
// });

// responsive js


// Brochuremodal
var modal = document.getElementById("myBrochre");

// Get the button that opens the modal
var btn = document.querySelectorAll(".modalBrochure-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeB")[0];

// When the user clicks the button, open the modal 
btn.forEach((elment)=>{
  elment.addEventListener("click",()=>{
    modal.style.display = "block";
  })
})

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}






