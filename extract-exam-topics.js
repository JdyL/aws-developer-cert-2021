const questionsOnPage = document.querySelectorAll(".card.exam-question-card");

const output = [];

questionsOnPage.forEach((val) => {
  const body = {};
  body.question = val.querySelector(".card-text").innerText.trim();
  body.choices = [];
  val.querySelectorAll(".multi-choice-item").forEach((element) => {
    body.choices.push(element.innerText.trim());
  });
  body.answer = [];
  val.querySelectorAll(".correct-hidden").forEach((el) => {
    body.answer.push(el.innerText.trim());
  });
  output.push(body);
});

console.log(output);
