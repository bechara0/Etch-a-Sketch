const container = document.querySelector("#container");
container.setAttribute(
  "style",
  "display: flex; flex-wrap: wrap; width: 80vh; height:100vh"
);

for (i = 0; i <= 16 * 16; i++) {
  const divCreator = document.createElement("div");
  divCreator.setAttribute(
    "style",
    "border: 1px solid black; width: calc(100% / 16); height: calc(100% / 16)"
  );
  container.appendChild(divCreator);
}
