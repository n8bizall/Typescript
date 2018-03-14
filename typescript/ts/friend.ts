class Friends {
        name:string;
        email:string;
        years:number;
    constructor(  
        name:string,
        email:string,
        years:number
    )
    {
        this.name = name, 
        this.email= email, 
        this.years= years
    }
    printOut():void 
    {
        console.log('name=${name}, email=${email}, years=${years}`);
    }
    }
  