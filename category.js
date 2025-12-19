function myFunction() {
  let x = document.getElementById("side-bar");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("card");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("show");
    if (x[i].className.indexOf(c) > -1) x[i].className += " show";
  }
}

var btnContainer = document.getElementById("side-bar");
var btns = btnContainer.getElementsByClassName("button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("current");
    current[0].className = current[0].className.replace(" current", "");
    this.className += " current";
  });
}

// document.addEventListener('DOMContentLoaded', () => {
//             const card = document.querySelector('.project-card');
//             if (!card) return;

//             const image = card.querySelector('img');
//             const maxTilt = 10; // Max tilt in degrees (slightly increased)
//             const imageMaxOffset = 12; // Max pixels the image will move for parallax

//             card.addEventListener('mousemove', (e) => {
//                 const rect = card.getBoundingClientRect();
//                 const x = e.clientX - rect.left - rect.width / 2;
//                 const y = e.clientY - rect.top - rect.height / 2;

//                 const rotateY = (x / (rect.width / 2)) * maxTilt;
//                 const rotateX = (y / (rect.height / 2)) * -maxTilt;

//                 card.style.transition = 'transform 0.05s linear';
//                 card.style.transform = `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`; // Slightly more scale

//                 if (image) {
//                     const imageOffsetX = (x / (rect.width / 2)) * -imageMaxOffset * 0.4; // Parallax factor
//                     const imageOffsetY = (y / (rect.height / 2)) * imageMaxOffset * 0.4; // Parallax factor (already inverted due to -maxTilt)
                    
//                     image.style.transition = 'transform 0.05s linear'; // Quick follow for image
//                     image.style.transform = `translateX(${imageOffsetX}px) translateY(${imageOffsetY}px) scale(1.1)`; // Image scales more
//                 }
//             });

//             card.addEventListener('mouseenter', () => {
//                 card.style.transition = 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)';
//                 if (image) {
//                     image.style.transition = 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)'; // Smooth scale in for image
//                     image.style.transform = `scale(1.1)`; // Initial scale on card hover
//                 }
//             });

//             card.addEventListener('mouseleave', () => {
//                 card.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
//                 card.style.transform = `perspective(1500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
//                 if (image) {
//                     image.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
//                     image.style.transform = 'translateX(0px) translateY(0px) scale(1)';
//                 }
//             });
//         });