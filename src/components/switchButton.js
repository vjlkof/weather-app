export default function switchButton() {
  const switchInput = document.getElementById("toggle");
  const switchlabel = document.getElementById("unit");
  let switchValue = false;

  switchInput.addEventListener("click", () => {
    switchValue = !switchValue;
    switchlabel.classList.add("hidden");
    setTimeout(function () {
      switchlabel.textContent = switchValue ? "Fahrenheit" : "Celsius";
      switchlabel.classList.remove("hidden");
    }, 200);
    console.log(switchValue);
    console.log(switchlabel);
  });
}
