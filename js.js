const levels = [
  {
    label: " בחר תבנית לעוגה שלך",
    options: [
      {
        option_label: "לב",
        option_id: "heart",
      },
      {
        option_label: "עיגול",
        option_id: "circle",
      },
      {
        option_label: "ריבוע",
        option_id: "square",
      },
    ],
  },
  {
    label: " בחר בצק לעוגה שלך",
    options: [
      {
        option_label: "שוקולד",
        option_id: "choclate",
      },
      {
        option_label: "וניל",
        option_id: "vanil",
      },
      {
        option_label: "מוקה",
        option_id: "mocha",
      },
    ],
  },
  {
    label: " בחר קישוט לעוגה שלך",
    options: [
      {
        option_label: "סוכריות",
        option_id: "candies",
      },
      {
        option_label: "שוקולד",
        option_id: "choclate",
      },
      {
        option_label: "קצפת",
        option_id: "whipped cream",
      },
    ],
  },
];

const printCake = document.querySelector("#print");
const buttonLevel1 = document.querySelector("#level1");
const buttonLevel2 = document.querySelector("#level2");
const titleElemnt = document.querySelector("#title");
const parent = document.querySelector("#buttons_container");
let names = [];
let img = new Image();
let selectedoption = "";
let level_index = 0;
let index = 7000;
let printTimer = document.querySelector("#timer");
let currentStep = 0;
let clicked = false;
let timerInterval;
let timerfunc;
let timerElement;
let currentTime = 0;
const levelsTime = [
  { level: 1, numSeconds: 5 },
  { level: 2, numSeconds: 10 },
];


// פונקציה שמקבלת את הרמה שנבחרה ומגדירה את הזמן לטיימר
onLevelSelected = (selectedLevel) => {
  const level = levelsTime.find((l) => l.level === selectedLevel);
  timerDuration = level.numSeconds;
};

// פונקציה ששומרת את השם שהוכנס באינפוט בלוקל סטורג
saveName = (name) => {
  names.push(name);
  localStorage.setItem("names", JSON.stringify(names));
};

// פונקציה שמחזירה את השמות שנשמרו בלוקל סטורג
// function a()
// {
// document.querySelector("#c").onclick=getNames();
// }
// a();
// function getNames() {
//   let storedNames = JSON.parse(localStorage.getItem("names"));
//   return storedNames;
// };

// alertNames = () => {
//   names.push(getNames());
//   const alertNames = names.p;
//   names.map((name) => alert(name));
// };

// פונקציה שמציגה את הטיימר וקוראת לפונקציה הראשית בסיום הזמן
startTimer = function () {
  // יצירת טיימר בגודל התצוגה של הטיימר
  timerElement = document.querySelector("#timer");
  timerElement.classList.add("TimerClass");
  document.body.appendChild(timerElement);
  // קביעת הזמן המרבי לטיימר (במילישניות)
  currentTime = timerDuration;
  // // ניתוב פונקציה שמתעדכנת ומציגה את הזמן בכל שנייה
  function updateTime() {
    timerElement.textContent = currentTime;
    if (currentTime === 0) {
      timerElement.textContent = "הפסדת את המשחק :(";
      setTimeout(function () {
        window.location.href = "file:///F:/!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!%D7%A4%D7%A8%D7%95%D7%99%D7%A7%D7%98%20js%20!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/HomePage.html";
      }, 3000);
    } else {
      currentTime--;
      timerfunc = setTimeout(updateTime, 1000);
    }
    updateTime();
  };

  start_level = function () {
    startTimer(timerDuration);
    /* 1. שליפת השלב הנוכחי מתוך מערך השלבים */
    let currentLevel = levels[currentStep];
    titleElemnt.innerHTML = currentLevel.label;
    currentLevel.options.forEach((option) => {
      let btn = document.createElement("button");
      btn.dataset.id = option.option_id;
      btn.innerHTML = option.option_label;
      btn.classList.add("BtnClass");
      parent.appendChild(btn);
      btn.onclick = function () {
        click_on_option(btn.dataset.id);
      };
    });
    function click_on_option(btn_id) {
      clearTimeout(timerfunc);
      timerElement.textContent = null;
      selectedoption = selectedoption.concat(btn_id) + ".";
      currentStep = currentStep + 1;
      if (currentStep == 3) {
        currentStep = 0;
        selectedoption = "../images/" + selectedoption + "png";
        const img = document.createElement("img");
        img.src = selectedoption;
        img.style.fontSize = "50px";
        document.body.appendChild(img);
        setTimeout(function () {
          img.remove(img);
        }, 5000);
        printCake.disabled = false;
        printCake.onclick = printCake => { window.print() };
      }
      function deleteButtons() {
        const buttons = document.querySelectorAll("button");
        buttons.forEach(function (button) {
          button.remove();
        });
      }
    }
    deleteButtons();
    start_level();
  }

  start_level();
}
  // const btncancal=document.querySelector(".cancelbtn");
// btncancal.onclick=() => {
//   window.location.href="file:///F:/!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!%D7%A4%D7%A8%D7%95%D7%99%D7%A7%D7%98%20js%20!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/html/GameHtml.html";
// }

// const form = document.getElementsByClassName(".modal-content animate");
// form.keyCode(function (e) {
//     if (e.keyCode = 13) {
//         document.querySelector(".a_start").onclick;
//     }});\
