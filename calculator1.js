const resault = document.querySelector(".res1");
const keys = document.querySelectorAll(".num");
const sin1 = document.querySelector(".sin");
const cos1 = document.querySelector(".cos");
const sqrt1 = document.querySelector(".sqrt");
const exp1 = document.querySelector(".exp");


//eventlistener

keys.forEach((key) => {
  key.addEventListener("click", calculator);
});
sin1.addEventListener('click', function(){
    resault.textContent =  Math.sin(resault.innerText);

});
cos1.addEventListener('click', function(){
    resault.textContent =  Math.cos(resault.innerText);

});
sqrt1.addEventListener('click', function(){
    resault.textContent =  Math.sqrt(resault.innerText);

});
exp1.addEventListener('click', function(){
    resault.textContent =  resault.innerText / 100;

});

function calculator() {
  let buttonText = this.innerText;
  if (buttonText === "AC") {
    resault.innerText = "";

    return;
  }
  if (buttonText === "DEL") {
    resault.textContent = resault.textContent.toString().slice(0, -1);

    return;
  }
  function sin(resault) {
    resault.innerText = Math.sin(resault.innerText);
  }
  
  if (buttonText === "=") {
    resault.innerText = eval(resault.innerText);
  }
  if (resault.innerText === "0") {
    resault.textContent = buttonText;
  } else {
    resault.textContent += buttonText;
    return;
  }
}

