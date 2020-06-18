//Task 1.

class Author {
    constructor(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    get gender() {
        return this._gender;
    }

    set name(value) {
        if (typeof value === "string" &&  value.length > 1){
            this._name = value;
        }
        else {
            console.log("Wrong input name");
        }
    }

    set email(value) {
        if (typeof value === "string"){
            this._email = value;
        } else {
            console.log("Wrong input email");
        }
        
    }

    set gender(value) {
        if (typeof value === "string" &&  value.length > 3){
            this._name = value;
        }
        else {
            console.log("Wrong input gender");
        }
    }
    
    toString() {
        console.log("Author");
    }
}

class Book {
    constructor(title, author, price, quantity) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }

    get title() {
        return this._title; 
    }

    get author() {
        return this._author;
    }

    get price() {
        return this._price;
    }

    get quantity() {
        return this._quantity;
    }

    set title(value) {
        this._title = value;
    }

    set author(value) {
        if (value instanceof Author) {
            this._author = value;
        } else {
            console.log(value + "is not a valid author");
        }
    }

    set price(value) {
        if (typeof value === "number" && value > 0) {
            this._price = value;
        } else {
            console.log(value + "is not a valid price")
        }
    }

    set quantity(value) {
        if (typeof value === "number" && value >= 0) {
            this._quantity = value;
        } else {
            console.log(value + "is not a valid quantity")
        } 
    }

    getProfit() {
        return this.price * this.quantity;
    }

    toString() {
        console.log("Book");
    }
}

//Task 2.

class Account{
    constructor(id, name, balance) {
        this._id = id;
        this.name = name;
        this.balance = balance;
    }
    
    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get balance() {
        return this._balance;
    }

    set name(value) {
        if (typeof value === "string" &&  value.length > 0){
            this._name = value;
        }
        else {
            console.log("Invalid name");
        }
    }

    set balance(value) {
        if (typeof value === "number") {
            this._balance = value;
        } else {
            console.log("Invalid balance")
        }  
    }

    credit(amount) {
        this.balance += amount;
        return this.balance;
    }

    debit(amount) {
        if (amount < this.balance) {
            this.balance -= amount;
        } else {
            console.log("Amount exceeded the balance");
        }
    }

    transferTo(account,amount){
        if (amount < this.balance) {
            this.balance -= amount;
            account.balance += amount;
        } else {
            console.log("Amount exceeded the balance")
        }
    }

    static identifyAccounts(account1, account2) {
        if(account1 instanceof Account && account2 instanceof Account) {
            let acc1Props = Object.getOwnPropertyNames(account1);
            for (let i = 0; i < acc1Props.length; i++) {
                let propertyName = acc1Props[i];
                if (account1[propertyName] !== account2[propertyName]){
                    console.log("Accounts aren't the same");
                    return;
                }
            }
            console.log("Accounts are the same"); 
        } else {
            console.log("Invalid input");
        }       
    }

    toString() {
        console.log("Account");
    }
}

//Task 3.

class Person {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get gender() {
        return this._gender;
    }
    get age() {
        return this._age;
    }

    set firstName(firstname) {
        this._firstName = firstname;
    }
    set lastName(lastname) {
        this._lastName = lastname;
    }
    set gender(gender) {
        if (typeof gender === "string" && gender.length > 3) {
            this._gender = gender;
        } else {
            console.log("Invalid gender")
        }
        
    }
    set age(age) {
        if (typeof age === "number" && age > 0) {
            this._age = age;
        } else {
            console.log("Invalid age")
        }
    }

    toString() {
        console.log("Person");
    }
}

class Student extends Person{
    #data;
    constructor(firstName, lastName, gender, age, program, year, fee) {
        super(firstName, lastName, gender, age);
        this.program = program;
        this.year = year;
        this.fee = fee;
    }

    get program() {
        return this._program;
    }

    get year() {
        return this._year;
    }

    get fee() {
        return this._fee;
    }
    setData(){
        let dataObj = {};
        let arr = this.program;
        for (let i = 0; i < arr.length; i++) {
            dataObj[arr[i]] = null;
        }
        return dataObj;
    }

    set program(value) {
        if (Array.isArray(value)) {
            this._program = value;
            this.#data = this.setData();
        } else {
            console.log(value + "is not an array");
        }
    }

    set year(year) {
        if (typeof year === "number" && year > 0) {
            this._year = year;
        } else {
            console.log("Invalid year");
        }
    }

    set fee(fee) {
        if (typeof fee === "number" && fee > 0) {
            this._fee = fee;
        } else {
            console.log("Invalid fee"); 
        }  
    }

    passExam(program, grade) {
        let arr = Object.entries(this.#data);
        let count = 0;
        let contains = false;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] === program) {
                data[program] = grade;
                contains = true;
            }
            if (this.#data[program] >= 50){
                count++;
            }
        }
        if (count === arr.length) {
            this._year = this.year + 1;
        }
        if (!contains) {
            console.log("Wrong program input");
        }
    }

    toString() {
        console.log("Student");
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, gender, age, program, pay) {
        super(firstName, lastName, gender, age);
        this.program  = program;
        this.pay = pay;
    }

    get program() {
        return this._program;
    }

    get pay() {
        return this._pay;
    }

    set program(string) {
        if (typeof string === "string" && string.length > 0){
            this._program = string;
        } else {
            console.log("Invalid program")
        }
    }

    set pay(pay) {
        if (typeof pay === "number" && pay > 0) {
            this._pay = pay;
        } else {
            console.log("Invalid pay"); 
        }
    }
     
    toString() {
        console.log("Teacher");
    }
}



