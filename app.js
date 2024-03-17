// Таймер
let timer;
let sec;
let min;
min = 2;
sec = 60;
countdown();
function countdown() {
  // функция обратного отсчета
  document.querySelector(".timer__seconds").innerHTML = sec;
  document.querySelector(".timer__minutes").innerHTML = "0" + min;

  sec--;

  if (sec < 10) {
    sec = "0" + sec;
  }
  if (sec === "0" + 0) {
    sec = 60;
    min = min - 1;
  }
  if (min == 0) {
    switch (sec) {
      case 60:
        document.querySelector(".timer__seconds").classList.add("time_active");
        document.querySelector(".timer__minutes").classList.add("time_active");
        document.querySelector(".time_el").classList.add("time_active");
        break;
      case 29:
        document
          .querySelector(".timer__seconds")
          .classList.add("time_active_scale");
        document
          .querySelector(".timer__minutes")
          .classList.add("time_active_scale");
        document.querySelector(".time_el").classList.add("time_active_scale");
        break;
    }
  }

  timer = setTimeout(countdown, 1000);
  if (min <= -1) {
    document.querySelector(".timer__seconds").innerHTML = "00";
    document
      .querySelector(".timer__seconds")
      .classList.remove("time_active_scale");
    document
      .querySelector(".timer__minutes")
      .classList.remove("time_active_scale");
    clearTimeout(timer);
  }        
}
// Таймер

var opInfo = [
  {
    scidka: '30',
    oldPrice: '999',
    text: 'Чтобы просто начать 👍🏻',
  },
  {
    scidka: '40',
    oldPrice: '1690',
    text: 'Привести тело впорядок 💪🏻',
  },
  {
    scidka: '50',
    oldPrice: '5990',
    text: 'Изменить образ жизни 🔥',
  },
  {
    scidka: '70',
    oldPrice: '18 990',
    text: 'Всегда быть в форме и поддерживать своё здоровье ⭐️',
  },
]

var apiTest = [
  {
    prise: '699',
    isPopApp: false,
    isScidka: true,
  },
  {
    prise: '999',
    isPopApp: false,
    isScidka: true,
  },
  {
    prise: '2990',
    isPopApp: false,
    isScidka: true,
  },
  {
    prise: '5990',
    isPopApp: false,
    isScidka: true,
  },
]

