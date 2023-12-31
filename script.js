const mainBody = document.querySelector("#main");
const agreeBtn = document.querySelector("#checkMarkIcon");
const iAgreeForm = document.querySelector("#iAgreeForm");
const numberForm = document.querySelector("#numberForm");
const doB_next_btn_section = document.querySelector("#doB_next_btn_section");
const promo_section = document.querySelector("#promo_section");



const doB = document.querySelector("#doB");
const url = "/webapp"


function startLoader() {
  const loader = document.querySelector(".loader");

  setTimeout(function () {
    loader.classList.add("block");
  }, 1000);

  window.addEventListener("DOMContentLoaded", function (event) {
    setTimeout(function () {
      loader.classList.add("hidden");
      mainBody.classList.remove("hidden");
    }, 3000);
  });
}

startLoader();





function onAgree() {
  const dobSection = document.querySelector(".dob_section");

  agreeBtn.classList.toggle("hidden");
  dobSection.classList.toggle("hidden");
}


doB.addEventListener("input", (e)=>{
  e.preventDefault();
  if(e.target.value >= 18){
    doB_next_btn_section.innerHTML = `<img class="scale-50 cursor-pointer" onclick="toNumberForm()" src="assets/images/Play-Button.png" alt="">`
  } else {
    doB_next_btn_section.innerHTML = `<p class="GraphikL text-xs mt-2 text-red-600 font-semibold">Sorry, you have to be 18+ !</p>`
  }
});


function toNumberForm() {
  iAgreeForm.classList.toggle("hidden");
  numberForm.classList.toggle("hidden");
}

function backToIAgreeForm() {
  iAgreeForm.classList.toggle("hidden");
  numberForm.classList.toggle("hidden");
}


function toPromoSection() {
  numberForm.classList.toggle("hidden");
  promo_section.classList.toggle("hidden");
 
}


// function calculateAge(dateOfBirth) {
//   const dobDate = new Date(dateOfBirth);
//   const currentDate = new Date();
//   const timeDiff = currentDate - dobDate;
//   const ageMilliseconds = new Date(timeDiff).getTime();
//   const ageYears = Math.abs(new Date(ageMilliseconds).getUTCFullYear() - 1970);

//   return ageYears;
// }


function LoadEndlessImage(){
    window.location.href = url;
}