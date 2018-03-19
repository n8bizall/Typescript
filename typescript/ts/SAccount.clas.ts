export class SAccount {

    balance:number = 0;
    interestRate:number = 1.0;
    interestEarned:number = 0;
    addBalance:number =0;
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
    interest(interestRate:number, termInMonths:number):number{
       this.interestEarned  = this.balance * interestRate *termInMonths
      
      return this.deposit(this.interest)
    }   