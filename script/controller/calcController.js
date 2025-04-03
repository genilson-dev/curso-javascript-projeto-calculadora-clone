class CalController {
  constructor() {
    this._operation = [];
    this._locale = "pt-BR";
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#data");
    this._horaEl = document.querySelector("#hora");
    this._currentDate;
    this.initialize();
    this.initButtonsEvents();
  }
  initialize() {
    this.setDisplayDateTime();

    setInterval(() => {
      this.setDisplayDateTime();
    }, 1000);
  }
  addEventListenerAll(element, events, fn) {
    events.split(" ").forEach((event) => {
      element.addEventListener(event, fn, false);
    });
  }

  clearAll() {
    this._operation = [];
  }
  clearEntry() {
    this._operation.pop();
  }
  addOperation(value) {
    this._operation.push(value);
    console.log(this._operation);
  }
  setError() {
    this.displayCalc = "Error";
  }

  execBtn(value) {
    switch (value) {
      case "ac":
        this.clearAll();
        break;
      case "ce":
        this.clearEntry();
        break;
      case "soma":
        break;
      case "subtracao":
        break;
      case "multiplicacao":
        break;
      case "divisao":
        break;
      case "porcento":
        break;
      case "igual":
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        this.addOperation(parseInt(value));
        break;
      default:
        this.setError();
        break;
    }
  }

  initButtonsEvents() {
    let buttons = document.querySelectorAll("#buttons > g, #parts > g");
    buttons.forEach((btn, index) => {
      this.addEventListenerAll(btn, "click drag", (e) => {
        let textBtn = btn.className.baseVal.replace("btn-", "");
        this.execBtn(textBtn);
      });
      this.addEventListenerAll(btn, "mouseover mouseup mousedown", (e) => {
        btn.style.cursor = "pointer";
      });
    });
  }

  setDisplayDateTime() {
    this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
  }

  get displayTime() {
    return this._horaEl.innerHTML;
  }

  set displayTime(x) {
    return (this._horaEl.innerHTML = x);
  }

  get displayDate() {
    return this._dateEl.innerHTML;
  }

  set displayDate(x) {
    return (this._dateEl.innerHTML = x);
  }

  get displayCalc() {
    return this._displayCalcEl.innerHTML;
  }

  set displayCalc(y) {
    this._displayCalcEl.innerHTML = y;
  }

  get currentDate() {
    return new Date();
  }

  set currentDate(x) {
    this._currentDate = x;
  }
}
