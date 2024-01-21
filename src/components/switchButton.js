import home from "../pages/home";

export default function switchButton() {
  const switchInput = document.getElementById("toggle");
  const switchlabel = document.getElementById("unit");
  let switchValue = false;

  switchInput.addEventListener("click", () => {
    const searchInput = document.getElementById("search");
    const searchValue = searchInput.dataset.oldValue || "";
    switchValue = !switchValue;
    switchlabel.classList.add("hidden");
    setTimeout(function () {
      switchlabel.textContent = switchValue ? "Fahrenheit" : "Celsius";
      switchlabel.classList.remove("hidden");
    }, 200);
    home(searchValue, switchValue);
  });
}
