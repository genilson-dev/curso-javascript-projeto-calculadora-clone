class CalController {
  constructor() {
    this._locale = "pt-BR";
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#data");
    this._horaEl = document.querySelector("#hora");
    this._currentDate;
    this.initialize();
  }
    initialize() {

    this.setDisplayDateTime();
    
    setInterval(() => {
        this.setDisplayDateTime();
    }, 1000);
  }

  setDisplayDateTime() {
    this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
  }

  get displayTime() {
    return this._horaEl.innerHTML;
  }

  set displayTime(x) {
    return this._horaEl.innerHTML = x;
  }

  get displayDate() {
    return this._dateEl.innerHTML;
  }

  set displayDate(x) {
    return this._dateEl.innerHTML = x;
  }

  get displayCalc() {
    return this._displayCalcEl.innerHTML;
  }

  set displayCalc(y) {
    this._displayCalcEl.innerHTML = y;
  }

  get currentDate() {
    return new Date();;
  }

  set currentDate(x) {
    this._currentDate = x;
  }
}
