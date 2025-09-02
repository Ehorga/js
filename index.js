const lis = document.querySelectorAll("#countries > li");
const flagBox = document.getElementById("flagBox");
const p = document.querySelector("#flagBox + p");
p.style.textAlign = "center";
p.style.textTransform = "uppercase"
lis.forEach((li) => {
  li.addEventListener("click", () => {
    flagBox.className = "";
    flagBox.textContent = "";
    flagBox.classList.add(li.textContent);
    p.textContent = li.textContent;
  });
});
