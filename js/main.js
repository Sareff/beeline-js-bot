let chat = document.getElementById("chat");
let send = document.getElementById("submit");
let input = document.getElementById("input-box");
let botActive = false;

function createMsg(text, author) {
  let div = document.createElement('div');
  div.innerHTML = "<strong>" + author + "</strong>: " + text;
  return div
}

send.onclick = function() {
  console.log(input.value);
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
  }

  if (botActive === true) {
    //let reName = /[\/]name:/;
    //let reCalc = /[\/]number:/;
    if (request.includes("/name:")) {
      let answer = "Привет " + request.slice(6) + ", приятно познакомится. Я умею считать, введи числа которые надо посчитать";
      chat.append(createMsg(answer, "Bot"));
    }
    /*  switch(request) {
        case :
          let answer = "Привет" + request.slice(0,7) + ", приятно познакомится. Я умею считать, введи числа которые надо посчитать";
          chat.append(createMsg(answer, "Bot"));
          break;
        default:
          chat.append(createMsg("Я не понимаю, введите другую команду!", "Bot"));
          break;
      }
    */
  }
}
