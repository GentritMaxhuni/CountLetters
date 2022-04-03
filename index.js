let text = document.querySelector("#textId").innerText;

const formId = document.querySelector("#formId");

let input = document.querySelector("#letterInput");

let result = document.querySelector("#divId");

formId.addEventListener("submit", (e) => {
  e.preventDefault();
  containsLetter();
  input.value = "";
});

const containsLetter = () => {
  let maxLetter = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] == input.value) {
      maxLetter++;
    }
  }
  divId.innerHTML = `Jane gjetur ${maxLetter} shkronja ${input.value} ne tekstin e dhene`;
};
