class Company{
    constructor(name, taxId, yearEstablished, taxRate){
        this.name = name;
        this.id = taxId;
        this.year = yearEstablished;
        this.taxRate = taxRate;
    }
}

class Person{
    constructor(name, ssn, birthYear, taxRate){
        this.name = name;
        this.id = ssn;
        this.year = birthYear;
        this.taxRate = taxRate;
    }
}

class Car{
    constructor(model, vin, year){
        this.name = model;
        this.id = vin;
        this.year = year;
    }
}

class Agable{
    constructor(year, age){
        this.year = year;
        this.age = age;
    }

    draw() {
        return `<select id="${this.year}" name= "${this.name}">
        ${use.new.Date().getFullYear().to.get.the.current.year}
        </select>`
    }



}

//should create a class named Agable that takes a year and has an age 
// method that calculates the age (current year - objects year) 
// (use new Date().getFullYear() to get the current year)

//should inherit from Agable in Company class and pass yearEstablished 
// to Agable in the constructor

//should inherit from Agable in Person class and pass birthYear to 
// Agable in the constructor

//should inherit from Agable in Car class and pass year to Agable in 
// the constructor