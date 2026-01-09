const btn = document.getElementById("btn");
const container = document.getElementById("toast-container");

function showToast (message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.classList.add("toast");
  container.appendChild(toast);

  setTimeout( () => toast.remove(), 3000);
}
btn.addEventListener("click", () => {
    showToast("This is notification");
});


