export function showErrorMessage(message) {
  const errorElement = document.getElementById("error");
  errorElement.textContent = message;
}

export function removeErrorMessage() {
  const errorElement = document.getElementById("error");
  errorElement.textContent = "";
}
