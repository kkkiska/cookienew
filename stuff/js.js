const moneyNow = document.querySelector ("#moneyNow")
const moneySec = document.querySelector ("#moneySec")
const cookie = document.querySelector (".cookie")
const clikerNum = document.querySelector ("#clicker-num")
const grannyNum = document.querySelector ("#granny-num")
const factoryNum = document.querySelector ("#factory-num")

const itemClicker = document.querySelector ("#item-clicker")
const itemGranny = document.querySelector ("#item-granny")
const itemFactory = document.querySelector ("#item-factory")
const animco = document.querySelector (".animco")

const gameButtonColor = document.querySelectorAll (".game-button-price")
let money = 0
let moneysec = 0
let clikers = 0
let grannys = 0
let factorys = 0

cookie.addEventListener ("click", Money);

function Money() {
  money = money + 1;
  moneyNow.textContent = money;
  Animation();
}

function SaveData() {
  localStorage.setItem ("moneysec", JSON.stringify(moneysec))
  localStorage.setItem ("money", JSON.stringify(money))
  localStorage.setItem ("clickers", JSON.stringify(clikers))
  localStorage.setItem ("grannys", JSON.stringify(grannys))
  localStorage.setItem ("factorys", JSON.stringify(factorys))
}

window.onload = function LoadData() {
  money = JSON.parse(localStorage.getItem ('money'))
  moneysec = JSON.parse(localStorage.getItem ('moneysec'))
  clikers = JSON.parse(localStorage.getItem ('clickers'))
  grannys = JSON.parse(localStorage.getItem ('grannys'))
  factorys = JSON.parse(localStorage.getItem ('factorys'))
  if (moneysec > 0) {
    moneySec.textContent = moneysec;
    } else {
      moneySec.textContent = 0;
    }
  if (clikerNum > 0) {
  clikerNum.textContent = clikers;
  } else {
    clikerNum.textContent = 0;
  }
  if (grannys > 0) {
  grannyNum.textContent = grannys;
  } else {
    grannyNum.textContent = 0;
  }
  if (factorys > 0) {
  factoryNum.textContent = factorys;
  } else {
    factoryNum.textContent = 0;
  }
}

itemClicker.addEventListener ("click", () => {
  if (money >= 10) {
    money = money - 10;
    clikers = clikers + 1;
    clikerNum.textContent = clikers;
    moneyNow.textContent = money;
    moneysec = moneysec + 1;
    clikerNum.textContent = clikers;
    moneySec.textContent = moneysec;
  } else {
    alert ("У вас недостаточно денег!")
  }
})

setInterval(() => {
  SaveData();
  Frame();
}, 1000);

function Frame() {
  money = money + moneysec;
  moneyNow.textContent = money;
  if (money >= 10) {
    gameButtonColor[0].style.color = "green"
  } else {
    gameButtonColor[0].style.color = "red"
  }
  if (money >= 100) {
    gameButtonColor[1].style.color = "green"
  } else {
    gameButtonColor[1].style.color = "red"
  }
  if (money >= 1000) {
    gameButtonColor[2].style.color = "green"
  } else {
    gameButtonColor[2].style.color = "red"
  }
}

itemGranny.addEventListener ("click", () => {
  if (money >= 100) {
    money = money - 100;
    grannys = grannys + 1;
    grannyNum.textContent = grannys;
    moneyNow.textContent = money;
    moneysec = moneysec + 10;
    moneySec.textContent = moneysec;
  } else {
    alert ("У вас недостаточно денег!")
  }
})

itemFactory.addEventListener ("click", () => {
  if (money >= 1000) {
    money = money - 1000;
    factorys = factorys + 1;
    factoryNum.textContent = factorys;
    moneyNow.textContent = money;
    moneysec = moneysec + 100;
    moneySec.textContent = moneysec;
  } else {
    alert ("У вас недостаточно денег!")
  }
})

function Animation() {
  animco.style.opacity = "100%"
  animco.style.top = "580px"
  setTimeout(() => {
  animco.style.transition = "0s"
  animco.style.opacity = "0%"
  animco.style.top = "0px"
  }, 1000);
  animco.style.transition = "1s"
}