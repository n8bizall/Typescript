import { Account } from './Account.class';
import { SAccount } from './SAccount.clas';

export class Banking {

    constructor() {
        
    }
    main():void{                       //going to be the only method and it won't return a value
    let account: Account = new Account();
    let balance:number = account.deposit(100);
    if(balance != 100){
      console.log(  "we have a problem");
      return;
    }
    balance = account.withdraw(25)
    if(balance != 75){
        console.log(  "we have a problem");
        return;
      }
      
      balance = account.withdraw(100);
      if(balance != 75){
        console.log("still a problem")
      }
      balance = account.withdraw(-100);  //check for negative balance
      if(balance != 75){
        console.log("still a problem")
      }
      balance = account.deposit(-100);
      if(balance != 75){
        console.log("still a problem")
      }
    console.log("all good");
    }
}
let banking:Banking = new Banking();     
banking.main();                                  //create banking class instance and call main method