
/* Navbar toggler */


/* Add icon on .nav-item if dropdown exists */
const navItems = document.querySelectorAll(".nav-item");



//form
const form = document.getElementById("contactForm");
const errorBox = document.getElementById("errorBox");

try{

  form.addEventListener("submit", function (e) {
    if (!form.checkValidity()) {
      e.preventDefault();
      errorBox.style.display = "block";
    } else {
      errorBox.style.display = "none";
    }
  });
}
catch(e){
  
}


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



//tabs
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const selected = tab.getAttribute("data-tab");
    contents.forEach((c) => {
      c.style.display = c.id === selected ? "block" : "none";
    });
  });
});



// <!-- Image opacity can be adjusted in the const opacity = index === activeIndex ? 1 : 0.7; line -->
const testimonials = [
  {
    quote: "I was impressed by the food — every dish is bursting with flavor! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive, going the extra mile. I'll definitely be back for more!",
    name: "Tamar Mendelson",
    designation: "Restaurant Critic",
    src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "This place exceeded all expectations! The atmosphere is inviting, and the staff truly goes above and beyond to ensure a fantastic visit. I'll definitely keep returning for more exceptional dining experience.",
    name: "Joe Charlescraft",
    designation: "Frequent Visitor",
    src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
  },
  {
    quote: "Shining Yam is a hidden gem! From the moment I walked in, I knew I was in for a treat. The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
    name: "Martina Edelweist",
    designation: "Satisfied Customer",
    src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
  },
];

let activeIndex = 0;
const imageContainer = document.getElementById('image-container');
const nameElement = document.getElementById('name');
const designationElement = document.getElementById('designation');
const quoteElement = document.getElementById('quote');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function updateTestimonial(direction) {
  const oldIndex = activeIndex;
  activeIndex = (activeIndex + direction + testimonials.length) % testimonials.length;

  testimonials.forEach((testimonial, index) => {
    let img = imageContainer.querySelector(`[data-index="${index}"]`);
    if (!img) {
      img = document.createElement('img');
      img.src = testimonial.src;
      img.alt = testimonial.name;
      img.classList.add('testimonial-image');
      img.dataset.index = index;
      imageContainer.appendChild(img);
    }

    const offset = index - activeIndex;
    const absOffset = Math.abs(offset);
    const zIndex = testimonials.length - absOffset;
    const opacity = index === activeIndex ? 1 : 0.7;
    const scale = 1 - (absOffset * 0.15);
    const translateY = offset === -1 ? '-20%' : offset === 1 ? '20%' : '0%';
    const rotateY = offset === -1 ? '15deg' : offset === 1 ? '-15deg' : '0deg';

    img.style.zIndex = zIndex;
    img.style.opacity = opacity;
    img.style.transform = `translateY(${translateY}) scale(${scale}) rotateY(${rotateY})`;
  });

  nameElement.textContent = testimonials[activeIndex].name;
  designationElement.textContent = testimonials[activeIndex].designation;
  quoteElement.innerHTML = testimonials[activeIndex].quote.split(' ').map(word => `<span class="word">${word}</span>`).join(' ');

  animateWords();
}

function animateWords() {
  const words = quoteElement.querySelectorAll('.word');
  words.forEach((word, index) => {
    word.style.opacity = '0';
    word.style.transform = 'translateY(10px)';
    word.style.filter = 'blur(10px)';
    setTimeout(() => {
      word.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out, filter 0.2s ease-in-out';
      word.style.opacity = '1';
      word.style.transform = 'translateY(0)';
      word.style.filter = 'blur(0)';
    }, index * 20);
  });
}

function handleNext() {
  updateTestimonial(1);
}

function handlePrev() {
  updateTestimonial(-1);
}

// prevButton.addEventListener('click', handlePrev);
// nextButton.addEventListener('click', handleNext);

// Initial setup
updateTestimonial(0);

// Autoplay functionality
const autoplayInterval = setInterval(handleNext, 5000);

// Stop autoplay on user interaction
[prevButton, nextButton].forEach(button => {
  button.addEventListener('click', () => {
    clearInterval(autoplayInterval);
  });
});


prevButton.addEventListener('click', handlePrev);
nextButton.addEventListener('click', handleNext);


var galleryThumbs = new Swiper('.gallery-thumbs', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: '2',
  // coverflowEffect: {
  //   rotate: 50,
  //   stretch: 0,
  //   depth: 100,
  //   modifier: 1,
  //   slideShadows : true,
  // },

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 50,
    modifier: 6,
    slideShadows: false,
  },

});


var galleryTop = new Swiper('.swiper-container.testimonial', {
  speed: 400,
  spaceBetween: 50,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  direction: 'vertical',
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
    type: 'bullets',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});

function toggleAudio(e) {
  let icons = e.firstElementChild
  let video = document.getElementById('video_')
  if (icons.classList.contains('fa-volume-mute')) {
    icons.classList.replace('fa-volume-mute', 'fa-volume-up')
    video.muted = !video.muted;
  }
  else {
    icons.classList.replace('fa-volume-up', 'fa-volume-mute')
    video.muted = !video.muted;
  }
}

// -----------------------------------------------------------
// Contact PopUP window 
function toggleChatBox(type = 'b') {
  const box = document.getElementById('chatBox');
  if (type === 'e') {
    box.classList.remove('active');
    contacti_button.classList.remove('active');
    return;
  }
  box.classList.toggle('active');
  contacti_button.classList.toggle('active');
}
let whatsapp_btn = document.getElementById("contacti_button")
let whatsapp_card = document.getElementById("chatBox")

// Close on outside click
document.addEventListener('click', (event) => {
  if (!whatsapp_card.contains(event.target) && !whatsapp_btn.contains(event.target)) {
    toggleChatBox("e")
  }
});

// Close on Escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    dropdownMenu.classList.add('hidden');
    toggleChatBox("e")
  }
});
