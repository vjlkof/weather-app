import home from "../pages/home";

export default function searchInput() {
  const searchInput = document.getElementById("search");
  const searchButton = document.getElementById("search-button");
  let searchValue = "";

  searchInput.addEventListener("input", () => {
    searchValue = searchInput.value;
  });

  searchButton.addEventListener("click", async () => {
    const switchValue = document.getElementById("toggle").checked;
    home(searchValue, switchValue);
    searchInput.dataset.oldValue = searchValue;
    searchInput.value = "";
  });
}
