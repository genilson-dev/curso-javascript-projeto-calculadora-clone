class CalController {
  constructor() {
    this._displayCal = 0;
    this._currentDate;
    this.initialize();
  }
  initialize() {
    let displaiCalEl = document.querySelector("#display");
    let dateEl = document.querySelector("#data");
    let horaEl = document.querySelector("#hora");

    displaiCalEl.innerHTML = "89631139";
    dateEl.innerHTML = "1985-02-23";
    horaEl.innerHTML = "12:00:00";
    let data = new Date();



  }

  get displayCal() {
    return this._displayCal;
  }
  set displayCal(y) {
    this._displayCal = y;
  }
  get currentDate() {
    return this._currentDate;
  }
  set currentDate(x) {
    this._currentDate = x;
  }
}
