const container = document.querySelector(".container");
const inputValueRef = document.querySelector(".input-field");
const div = document.createElement("div");

const bgColors = ["#C1FFD7", "#B5DEFF", "#FCFFA6", "#cab8ff"];

const firstChip = document.getElementById("firstChip");

firstChip.addEventListener("click", (e) => {
  container.removeChild(e.target.parentNode);
});

inputValueRef.addEventListener("keyup", chipHandler);

function chipHandler(e) {
  const chipsArray = [];
  const test = document.querySelectorAll("close-btn");

  if (e.key === "Enter" && e.target.value !== "") {
    const inputValue = inputValueRef.value;

    div.innerText = inputValue;
    chipsArray.push(inputValue);
    chipsArray.map((item) => {
      container.innerHTML += `<div class="chips" >
      <small class="chip-text">${item} </small><i class="fas fa-times-circle close-btn"></i>

    </div>`;
    });

    const closeBtnArr = document.querySelectorAll(".close-btn");

    for (i = 0; i < closeBtnArr.length; i++) {
      closeBtnArr[i].addEventListener("click", (e) => {
        container.removeChild(e.target.parentNode);
      });
    }
    e.target.value = null;
  }
}
// arr = [1,2,3,4]
