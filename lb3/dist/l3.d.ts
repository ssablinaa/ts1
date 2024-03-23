export declare enum DocumentsType {
    Passport = "\u043F\u0430\u0441\u043F\u043E\u0440\u0442",
    BirthCertificate = "\u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438",
    DrivingLicense = "\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u0432\u0430",
    Other = "\u0434\u0440\u0443\u0433\u043E\u0435"
}
interface IOwner {
    firstName: string;
    lastName: string;
    middleName: string;
    birthDate: Date;
    documentType: DocumentsType;
    documentSeries: number;
    documentNumber: number;
    info(): string;
}
export declare class Owner implements IOwner {
    private _firstName;
    private _lastName;
    private _middleName;
    private _birthDate;
    private _documentType;
    private _documentSeries;
    private _documentNumber;
    get firstName(): string;
    set firstName(value: string);
    get lastName(): string;
    set lastName(value: string);
    get middleName(): string;
    set middleName(value: string);
    get birthDate(): Date;
    set birthDate(value: Date);
    get documentType(): DocumentsType;
    set documentType(value: DocumentsType);
    get documentSeries(): number;
    set documentSeries(value: number);
    get documentNumber(): number;
    set documentNumber(value: number);
    constructor(firstName: string, lastName: string, middleName: string, birthDate: Date, documentType: DocumentsType, documentSeries: number, documentNumber: number);
    info(): string;
}
interface IVehicle {
    brand: string;
    model: string;
    releaseYear: number;
    vin: string;
    registerNumber: string;
    owner: IOwner;
    info(): string;
}
export declare class Vehicle implements IVehicle {
    private _brand;
    private _model;
    private _year;
    private _vin;
    private _registrationNumber;
    private _owner;
    get brand(): string;
    set brand(value: string);
    get model(): string;
    set model(value: string);
    get releaseYear(): number;
    set releaseYear(value: number);
    get vin(): string;
    set vin(value: string);
    get registerNumber(): string;
    set registerNumber(value: string);
    get owner(): IOwner;
    set owner(value: IOwner);
    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: IOwner);
    info(): string;
}
export declare enum CarBody {
    Sedan = "\u0421\u0435\u0434\u0430\u043D",
    Hatchback = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A",
    Universal = "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B"
}
export declare enum CarClass {
    Econom = "\u042D\u043A\u043E\u043D\u043E\u043C",
    Middle = "\u0421\u0440\u0435\u0434\u043D\u0438\u0439",
    Premium = "\u041F\u0440\u0435\u043C\u0438\u0443\u043C"
}
interface ICar extends Vehicle {
    carBody: CarBody;
    carClass: CarClass;
}
export declare class Car extends Vehicle implements ICar {
    carBody: CarBody;
    carClass: CarClass;
    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: IOwner, carBody: CarBody, carClass: CarClass);
    info(): string;
}
interface IMotorbike extends Vehicle {
    frameType: string;
    isSport: boolean;
}
export declare class Motorbike extends Vehicle implements IMotorbike {
    frameType: string;
    isSport: boolean;
    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: IOwner, frameType: string, isSport: boolean);
    info(): string;
}
interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];
    getAll(): T[];
}
export declare class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
    creationDate: Date;
    vehicles: T[];
    constructor(vehicles: T[]);
    getAll(): T[];
}
export {};
