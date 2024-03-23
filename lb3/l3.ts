export enum DocumentsType {
    Passport = "паспорт",
    BirthCertificate = "свидетельство о рождении",
    DrivingLicense = "водительские права",
    Other = "другое",
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

export class Owner implements IOwner {
    
        private _firstName: string;
        private _lastName: string ;
        private _middleName: string;
        private _birthDate: Date;
        private _documentType: DocumentsType;
        private _documentSeries: number;
        private _documentNumber: number;
     
    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get middleName(): string {
        return this._middleName;
    }

    set middleName(value: string) {
        this._middleName = value;
    }

    get birthDate(): Date {
        return this._birthDate;
    }

    set birthDate(value: Date) {
        this._birthDate = value;
    }

    get documentType(): DocumentsType {
        return this._documentType;
    }

    set documentType(value: DocumentsType) {
        this._documentType = value;
    }

    get documentSeries(): number {
        return this._documentSeries;
    }

    set documentSeries(value: number) {
        this._documentSeries = value;
    }

    get documentNumber(): number {
        return this._documentNumber;
    }

    set documentNumber(value: number) {
        this._documentNumber = value;
    }
    constructor(firstName: string,
         lastName: string,
         middleName: string,
         birthDate: Date,
         documentType: DocumentsType,
         documentSeries: number,
         documentNumber: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._middleName = middleName;
        this._birthDate = birthDate;
        this._documentType= documentType;
        this._documentSeries=documentSeries;
        this._documentNumber = documentNumber;
    }
    info() : string {
       
        return 'Firstname: ' + this._firstName + '\n Lastname: ' + this._lastName+ '\n middlename: ' + this._middleName + '\n type: ' + this.birthDate.toString()+'\n Document: ' + this._documentType +'\n DocumentSerie: ' + this._documentSeries+'\n DocumentNumber: ' + this._documentNumber;
    }
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

export class Vehicle implements IVehicle {
  
        private _brand: string ;
        private _model: string ;
        private _year: number ;
        private _vin: string ;
        private _registrationNumber: string ;
        private _owner: IOwner;
   

    get brand(): string {
        return this._brand;
    }

    set brand(value: string) {
        this._brand = value;
    }

    get model(): string {
        return this._model;
    }

    set model(value: string) {
        this._model = value;
    }

    get releaseYear(): number {
        return this._year;
    }

    set releaseYear(value: number) {
        this._year = value;
    }

    get vin(): string {
        return this._vin;
    }

    set vin(value: string) {
        this._vin = value;
    }

    get registerNumber(): string {
        return this._registrationNumber;
    }

    set registerNumber(value: string) {
        this._registrationNumber = value;
    }

    get owner(): IOwner {
        return this._owner;
    }

    set owner(value: IOwner) {
        this._owner = value;
    }

    constructor(brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: IOwner) {
       this._model = model;
       this._year = year;
       this._vin = vin;
       this._registrationNumber = registrationNumber;
       this._owner= owner;
   }
   info() : string {
      
       return 'model: ' + this._model + '\n year: ' + this._year+ '\n vin: ' + this._vin + '\n registrationNumber: ' + this._registrationNumber+'\n owner: ' + this._owner;
   }
}

//Создайте интерфейс Автомобиль (Car), наследующий интерфейс Транспортное средство

export enum CarBody {
    Sedan = "Седан",
    Hatchback = "Хэтчбек",
    Universal = "Универсал",
};

export enum CarClass {
    Econom = "Эконом",
    Middle = "Средний",
    Premium = "Премиум",
};

interface ICar extends Vehicle {
    carBody: CarBody;
    carClass: CarClass;
}

export class Car extends Vehicle implements ICar {
    carBody: CarBody;
    carClass: CarClass;
    constructor(brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: IOwner,carBody: CarBody,
        carClass: CarClass){super(brand, model, year, vin, registrationNumber, owner);
        this.carBody = carBody;
        this.carClass = carClass;}
        info() : string {
      
            return super.info() +
            `
            Тип кузова: ${this.carBody}
            Класс автомобиля: ${this.carClass}`
        }

}

interface IMotorbike extends Vehicle {
    frameType: string;
    isSport: boolean;
}

export class Motorbike extends Vehicle implements IMotorbike {
  
    frameType: string;
    isSport: boolean;

    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: IOwner,
        frameType: string,
        isSport: boolean
    ) {
        super(brand, model, year, vin, registrationNumber, owner);
        this.frameType = frameType;
        this.isSport = isSport;
    }
    info(): string {
        return (
            super.info() +
            `
            Тип рамы: ${this.frameType}
            Вид спортивного мотоцикла: ${this.isSport ? 'Да' : 'Нет'}`
        );
    }

}

// Реализуйте интерфейс Хранилище (VehicleStorage) с обобщением типа T, ограниченное типом Транспортное средство

interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];

    getAll(): T[];
}

export class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
    creationDate: Date;
    vehicles: T[];

    constructor(vehicles: T[]) {
        this.creationDate = new Date();
        this.vehicles = vehicles;
    }

    getAll(): T[] {
        return this.vehicles;
    }
}

const vehicleStorage = new VehicleStorageImpl<Vehicle>([
    new Vehicle('Toyota', 'Corolla', 2015, 'WAUZZZ8V8K5123456', 'AA1234AA', new Owner('Ivanov', 'Ivan', 'Ivanovich', new Date('1980-01-01'), DocumentsType.Passport, 123456, 123456)),
    new Vehicle('BMW', '320i', 2018, 'WBAZZZ8C0DW123456', 'AB1234AB', new Owner('Petrov', 'Petr', 'Petrovich', new Date('1990-02-02'), DocumentsType.Passport, 234567, 234567)),
]);

console.log(vehicleStorage.getAll());
