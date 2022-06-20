// DOM
const openModal = document.querySelector("#open-modal");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const resetButton = document.querySelector(".button-reset");
const spanCounter = document.querySelector("#spanCounter");

// Initial counter value
const counterValueFromLocalStorage = localStorage.getItem("Counter");
// console.log({counterValueFromLocalStorage});

let counter = counterValueFromLocalStorage ? Number(counterValueFromLocalStorage) : 0;
// console.log({counter});
spanCounter.innerText = `${counter} times`;
resetButton.style.visibility = "hidden";

// Open modal
openModal.onclick = () => {
  modal.style.display = "block";
  // console.log("Modal was opened");
  counter += 1;
  // console.log({counter});
  spanCounter.innerText = `${counter} times`;
  counter >= 6 ? (resetButton.style.visibility = "visible") : (resetButton.style.visibility = "hidden");
  localStorage.setItem("Counter", counter);
};

// Close modal by X button
closeModal.onclick = () => {
  modal.style.display = "none";
  // console.log("Modal was closed");
};

// Close modal when a user clicks outside of the modal
window.onclick = (event) => {
  // console.log({event});
  if (event.target === modal) {
    modal.style.display = "none";
    // console.log("Modal was closed");
  }
};

// Close modal by pressing Escape
document.addEventListener("keydown", function (event) {
  // console.log({event});
  if (event.key === "Escape") {
    modal.style.display = "none";
    // console.log("Modal was closed");
  }
});

// Reset Counter
const resetCounter = () => {
  counter = 0;
  // console.log({counter});
  spanCounter.innerText = `${counter} times`;
  resetButton.style.visibility = "hidden";
  localStorage.setItem("Counter", counter);
  setTimeout(function () {
    modal.style.display = "none";
  }, 500);
};
resetButton.addEventListener("click", resetCounter);
