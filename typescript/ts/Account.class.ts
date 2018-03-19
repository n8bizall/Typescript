export class Account {

balance:number = 0;
deposit(amount:number):number{
    if(amount < 0){
        console.log("no neg deposits");
        return this.balance;
    }
this.balance += amount;
return this.balance;

}
withdraw(amount:number):number{
   if(amount < 0){
       console.log("no neggy");
       return this.balance;
   }
    if(amount > this.balance){
        console.log("NSF")
        return this.balance;
    }
    this.balance -= amount;
    return this.balance;
} 
getBalance(amount:number):number{
   return this.balance;
}
}
