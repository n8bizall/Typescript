export class Vendor {
    id: number; 
    name:string;
    phone:string; 
    email:string;
    constructor(id:number, name:string,phone:string, email:string) {
        this.id = id; this.name =name ; this.phone = phone; this.email = email;
    }
    printOut():void {
        console.log(`id = ${this.id}, userName=${this.name}, phone=${this.phone}, email=${this.email}`)
    }
}