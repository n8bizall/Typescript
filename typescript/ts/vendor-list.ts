import { Vendor } from './Vendor';
let arrVendor: Vendor[] = [
    new Vendor(1,"Nate", "2705192", "n8bizall@yahoo.com"),
    new Vendor(2,"James",  "2705192", "n@yahoo.com"),
    new Vendor(3,"Dolly", "27097895192", "n8bizall@ya.com"),
    new Vendor(4,"Janis",  "27192", "n8bizallo.com"),
    new Vendor(5, "Hello", "2708525192", "n8bizall@.com")
  ];
  
  
  
  for(let vendor of arrVendor){
       vendor.printOut();
  }