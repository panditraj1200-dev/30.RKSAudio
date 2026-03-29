// alert("hello jii");
const element = document.querySelectorAll('.column img');
const elements = document.querySelectorAll('.column h1');
const button = document.querySelectorAll('.column button');
const paragraph = document.querySelectorAll('.column p');
const heading = document.querySelectorAll('.column h3');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

elements.forEach(el => observer.observe(el));
element.forEach(el => observer.observe(el));
button.forEach(el => observer.observe(el));
paragraph.forEach(el => observer.observe(el));
heading.forEach(el => observer.observe(el));

const frame = document.querySelector('.frame');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

let index = 0;

function uperslider(){
    const slideWidth = frame.clientWidth;
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
    
}
    right.addEventListener("click", () => {
       index = (index + 1) % 3;
      //    console.log(index)
       uperslider();
    });

   left.addEventListener("click", () => {
      index = (index - 1 + 3) % 3;
      uperslider();

   });
   
   setInterval(() => {

      index = (index + 1) % images.length;
      uperslider();
   }, 3000);

   function goPage() {
      window.location.href = "error.html";
      
  }
  function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").textContent = cart.length;
}

//    function updateCartCount() {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     let total = 0;

//     cart.forEach(item => {
//         total += item.quantity;
//     });

//     document.getElementById("cart-count").innerText = total;
// }
//    updateCartCount();

   function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log("Clicked", name);
  
  cart.push({ name, price });
  
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount(); // 👈 IMPORTANT

  alert("Added to cart!");
}
(localStorage.clear());
updateCartCount();

  


