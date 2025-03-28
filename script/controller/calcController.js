class CalController {
    constructor() {
        this._displayCal = 0;
        this._dataAtual;
    }
    get displayCal() {
        return this._displayCal;
    }
    set displayCal(value) {
        this._displayCal = value;
    }
}
