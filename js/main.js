let chat = document.getElementById("chat");
let send = document.getElementById("submit");
let input = document.getElementById("input-box");
let botActive = false;
var numbers;

function createMsg(text, author) {
  let div = document.createElement('div');
  if (author === "Human") {
    div.classList.add("humanMessage");
    div.innerHTML = "<p class=\"humanCloud\"><strong>" + author + "</strong>: " + text + "</p>";
  } else if (author === "Bot") {
    div.classList.add("botMessage");
    div.innerHTML = "<p class=\"botCloud\"><strong>" + author + "</strong>: " + text + "</p>";
  }
  return div
}

send.onclick = function() {
  //console.log(input.value);
  chat.append(createMsg(input.value, "Human"));
  botResponse(input.value);
  input.value = "";
};

function botResponse(request) {
  if (botActive === false && request === "/start") {
    chat.append(createMsg("Привет, меня зовут Чат-бот, а как зовут тебя?", "Bot"));
    botActive = true;
  } else if (botActive === false) {
    chat.append(createMsg("Введите команду /start, для начала общения", "Bot"));
  } else if (botActive === true) {
    if (request.includes("/name:")) {
      let answer = "Привет " + request.slice(6) + ", приятно познакомится. Я умею считать, введи числа которые надо посчитать";
      chat.append(createMsg(answer, "Bot"));
    } else if (request.includes("/number:")) {
      numbers = request.match(/\d+/g);
      chat.append(createMsg("Что вы хотите посчитать? +,-,*,/", "Bot"));
    } else if (request === "+") {
      let answer = +numbers[0] + +numbers[1];
      chat.append(createMsg(answer, "Bot"));
    } else if (request === "-") {
      let answer = numbers[0] - numbers[1];
      chat.append(createMsg(answer, "Bot"));
    } else if (request === "*") {
      let answer = numbers[0] * numbers[1];
      chat.append(createMsg(answer, "Bot"));
    } else if (request === "/") {
      let answer = numbers[0] / numbers[1];
      chat.append(createMsg(answer, "Bot"));
    } else if (request.includes("/stop")) {
      botActive = false;
      chat.append(createMsg("Всего доброго, если хочешь поговорить пиши /start", "Bot"));
    } else {
      chat.append(createMsg("Я не понимаю, введите другую команду!","Bot"));
    }
  }
}
