import { SAccount } from './SAccount.clas';

export class SBanking {

    constructor() {
        
    }
    main():void{                       //going to be the only method and it won't return a value
    let saccount: SAccount = new SAccount();
    let balance:number = saccount.deposit(100);
    if(balance != 100){
      console.log(  "we have a problem");
      return;
    }
   balance = saccount.withdraw(25)
    if(balance != 75){
        console.log(  "we have a problem");
        return;
      }
      
      balance = saccount.withdraw(100);
      if(balance != 75){
        console.log("still a problem")
      }
      balance = saccount.withdraw(-100);  //check for negative balance
      if(balance != 75){
        console.log("still a problem")
      }
      balance = saccount.deposit(-100);
      if(balance != 75){
        console.log("still a problem")
      }
      balance = saccount.interest(1.0, 5);
      {
       console.log("interest earned $")
      }

    console.log("all good");
    }
}
let sbanking:SBanking = new SBanking();     
sbanking.main();                                  //create banking class instance and call main method