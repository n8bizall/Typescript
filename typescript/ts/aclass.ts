class Customer {
    id:number; name:string; active:boolean; creditLimit:number;
    constructor(id:number, name:string, active:boolean, creditLimit:number) {
        this.id = id;this.name =name; this.active = active, this.creditLimit = creditLimit;
    }
    printOut():void{
        console.log(`id=${this.name}, name=${this.name}, active= ${this.active}, creditLimit=${this.creditLimit}`)
    }
}

let custs:Customer[] = [
    new Customer(1,"MAX", true,10000), 
    new Customer(2,"MIN", true,100000),
    new Customer(3,"MED", true ,5000)
];

for(let customer of custs){
    customer.printOut();
}


