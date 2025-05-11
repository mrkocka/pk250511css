let imgbutton = document.getElementById("lada-js");

imgbutton.addEventListener("click", addClass);

/* function proba() {
  console.log("Próba!!!");
} */

function addClass() {
  const image = document.getElementById("myImage");
  image.classList.remove("hidden");
  image.classList.add("fadeInDown");
}
