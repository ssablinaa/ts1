"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleStorageImpl = exports.Motorbike = exports.Car = exports.CarClass = exports.CarBody = exports.Vehicle = exports.Owner = exports.DocumentsType = void 0;
var DocumentsType;
(function (DocumentsType) {
    DocumentsType["Passport"] = "\u043F\u0430\u0441\u043F\u043E\u0440\u0442";
    DocumentsType["BirthCertificate"] = "\u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438";
    DocumentsType["DrivingLicense"] = "\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u0432\u0430";
    DocumentsType["Other"] = "\u0434\u0440\u0443\u0433\u043E\u0435";
})(DocumentsType || (exports.DocumentsType = DocumentsType = {}));
class Owner {
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get middleName() {
        return this._middleName;
    }
    set middleName(value) {
        this._middleName = value;
    }
    get birthDate() {
        return this._birthDate;
    }
    set birthDate(value) {
        this._birthDate = value;
    }
    get documentType() {
        return this._documentType;
    }
    set documentType(value) {
        this._documentType = value;
    }
    get documentSeries() {
        return this._documentSeries;
    }
    set documentSeries(value) {
        this._documentSeries = value;
    }
    get documentNumber() {
        return this._documentNumber;
    }
    set documentNumber(value) {
        this._documentNumber = value;
    }
    constructor(firstName, lastName, middleName, birthDate, documentType, documentSeries, documentNumber) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._middleName = middleName;
        this._birthDate = birthDate;
        this._documentType = documentType;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }
    info() {
        return 'Firstname: ' + this._firstName + '\n Lastname: ' + this._lastName + '\n middlename: ' + this._middleName + '\n type: ' + this.birthDate.toString() + '\n Document: ' + this._documentType + '\n DocumentSerie: ' + this._documentSeries + '\n DocumentNumber: ' + this._documentNumber;
    }
}
exports.Owner = Owner;
class Vehicle {
    get brand() {
        return this._brand;
    }
    set brand(value) {
        this._brand = value;
    }
    get model() {
        return this._model;
    }
    set model(value) {
        this._model = value;
    }
    get releaseYear() {
        return this._year;
    }
    set releaseYear(value) {
        this._year = value;
    }
    get vin() {
        return this._vin;
    }
    set vin(value) {
        this._vin = value;
    }
    get registerNumber() {
        return this._registrationNumber;
    }
    set registerNumber(value) {
        this._registrationNumber = value;
    }
    get owner() {
        return this._owner;
    }
    set owner(value) {
        this._owner = value;
    }
    constructor(brand, model, year, vin, registrationNumber, owner) {
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
    }
    info() {
        return 'model: ' + this._model + '\n year: ' + this._year + '\n vin: ' + this._vin + '\n registrationNumber: ' + this._registrationNumber + '\n owner: ' + this._owner;
    }
}
exports.Vehicle = Vehicle;
//Создайте интерфейс Автомобиль (Car), наследующий интерфейс Транспортное средство
var CarBody;
(function (CarBody) {
    CarBody["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
    CarBody["Hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
    CarBody["Universal"] = "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B";
})(CarBody || (exports.CarBody = CarBody = {}));
;
var CarClass;
(function (CarClass) {
    CarClass["Econom"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
    CarClass["Middle"] = "\u0421\u0440\u0435\u0434\u043D\u0438\u0439";
    CarClass["Premium"] = "\u041F\u0440\u0435\u043C\u0438\u0443\u043C";
})(CarClass || (exports.CarClass = CarClass = {}));
;
class Car extends Vehicle {
    constructor(brand, model, year, vin, registrationNumber, owner, carBody, carClass) {
        super(brand, model, year, vin, registrationNumber, owner);
        this.carBody = carBody;
        this.carClass = carClass;
    }
    info() {
        return super.info() +
            `
            Тип кузова: ${this.carBody}
            Класс автомобиля: ${this.carClass}`;
    }
}
exports.Car = Car;
class Motorbike extends Vehicle {
    constructor(brand, model, year, vin, registrationNumber, owner, frameType, isSport) {
        super(brand, model, year, vin, registrationNumber, owner);
        this.frameType = frameType;
        this.isSport = isSport;
    }
    info() {
        return (super.info() +
            `
            Тип рамы: ${this.frameType}
            Вид спортивного мотоцикла: ${this.isSport ? 'Да' : 'Нет'}`);
    }
}
exports.Motorbike = Motorbike;
class VehicleStorageImpl {
    constructor(vehicles) {
        this.creationDate = new Date();
        this.vehicles = vehicles;
    }
    getAll() {
        return this.vehicles;
    }
}
exports.VehicleStorageImpl = VehicleStorageImpl;
const vehicleStorage = new VehicleStorageImpl([
    new Vehicle('Toyota', 'Corolla', 2015, 'WAUZZZ8V8K5123456', 'AA1234AA', new Owner('Ivanov', 'Ivan', 'Ivanovich', new Date('1980-01-01'), DocumentsType.Passport, 123456, 123456)),
    new Vehicle('BMW', '320i', 2018, 'WBAZZZ8C0DW123456', 'AB1234AB', new Owner('Petrov', 'Petr', 'Petrovich', new Date('1990-02-02'), DocumentsType.Passport, 234567, 234567)),
]);
console.log(vehicleStorage.getAll());
