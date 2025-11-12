const main = document.querySelector("main");
let active = null;

main.addEventListener("click", (event) => {
  const content = event.target.closest("#content");

  if (content) {
    const answer = content.children[1];
    const question = content.querySelector("#question");
    const arrow = content.querySelector("#arrow");

    if (active) {
      active.children[1].style.display = "none";
      active.querySelector("#question").style.fontWeight = "normal";
      active.querySelector("#question").style.color = "#4b4c5f";
      active.querySelector("#arrow").style.transform = "rotate(0deg)";
    }

    if (content === active) {
      active.children[1].style.display = "none";
      active.querySelector("#question").style.fontWeight = "normal";
      active.querySelector("#question").style.color = "#4b4c5f";
      active.querySelector("#arrow").style.transform = "rotate(0deg)";
      active = null;
    } else {
      answer.style.display = "block";
      question.style.fontWeight = "bold";
      question.style.color = "#1e1f36";
      arrow.style.transform = "rotate(180deg)";
      active = content;
    }
  }
});
