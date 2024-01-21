export function loading() {
  const contentElement = document.getElementById("content");
  const mainElement = document.getElementById("main");
  const loadingDivElement = document.createElement("div");
  const h1Element = document.createElement("h1");

  mainElement.className = "loading";
  h1Element.textContent = "Loading...";
  loadingDivElement.id = "loading-container";

  loadingDivElement.appendChild(h1Element);
  contentElement.appendChild(loadingDivElement);
}

export function removeLoading() {
  const contentElement = document.getElementById("content");
  const mainElement = document.getElementById("main");
  const loadingDivElement = document.getElementById("loading-container");
  mainElement.classList.remove("loading");
  contentElement.removeChild(loadingDivElement);
}
