// Get the modal
const modal = document.querySelector("#modal-contact");

// Get the button that opens the modal
const buttons = [];
buttons.push(document.querySelector("#navbar-contact"));
buttons.push(document.querySelector("#final-contact"));

// Get the <span> element that closes the modal
const span = document.querySelector("#close-modal");

//Get body to set overflow hidden

const body = document.querySelector("body");

// When the user clicks on the button, open the modal
buttons.forEach((b) => {
  b.onclick = () => {
    modal.style.display = "flex"
  }
})


const closeModal = () => {
  modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  closeModal();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
} 