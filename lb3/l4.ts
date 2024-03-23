import * as Transport from "./l3";

let owner: Transport.Owner = new Transport.Owner(
    'Иванов', 'Иван', 'Иванович', new Date('1985-12-31'),
    Transport.DocumentsType.Passport, 123456, 123456
);

let car: Transport.Vehicle = new Transport.Vehicle(
    'Toyota', 'Corolla', 2015,
    'WAUZZZ8V8K5123456', 'AA1234AA', owner
);

console.log(owner.info());
console.log(car.info());
