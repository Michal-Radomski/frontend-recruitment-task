//DOM
const openModal = document.querySelector("#open-modal");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");

// Open modal
openModal.onclick = () => {
  modal.style.display = "block";
  // console.log("Modal was opened");
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
