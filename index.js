const container = document.querySelector("#container");
container.setAttribute(
  "style",
  "display: flex; flex-wrap: wrap; width: 600px; height:70vh; marging: 0 auto; padding: 0"
);

for (i = 1; i <= 16 * 16; i++) {
  const divCreator = document.createElement("div");
  divCreator.setAttribute(
    "style",
    "border: 2px solid black; width: calc(100% / 18); height: calc(100% / 17); marging: 0; padding: 0"
  );
  divCreator.addEventListener("mouseenter", () => {
    divCreator.style.background = "red";
  });
  container.appendChild(divCreator);
}
