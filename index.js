let menuButton = document.querySelector(".burger-btn")
let navLinks = document.querySelector(".navLinks");


function menuSlide() {
    menuButton.addEventListener('click',function(){
        navLinks.classList.toggle("active");
        console.log('active')
    })
}
menuSlide()


let blurBtn = document.querySelector(".btn");
function toggleOne(){
    let blur = document.getElementById('blur-one')
   blur.classList.toggle("blur-active");

   let pop = document.querySelector('.pop-one')
   pop.classList.toggle('pop-active')
}

function toggleTwo() {
  let blur = document.getElementById("blur-two");
  blur.classList.toggle("blur-active");

  let pop = document.querySelector(".pop-two");
  pop.classList.toggle("pop-active");
}

function toggleThree() {
  let blur = document.getElementById("blur-three");
  blur.classList.toggle("blur-active");

  let pop = document.querySelector(".pop-three");
  pop.classList.toggle("pop-active");
}

