class Mobile{
    fId:number;
    fName:string;
    fCost:number;
    constructor(mobileId:number, mobileName:string, mobileCost:number){
        this.fId=mobileId;
        this.fName=mobileName;
        this.fCost=mobileCost;
   }
   printMobileDetail(){
         return `ID: ${this.fId} \n Name: ${this.fName} \n Cost: ${this.fCost}`;
   }
}
class BasicPhone extends Mobile{
    BType:string;
    constructor(mobileType:string){
        super(12345, "Hiren", 5000);
        this.BType=mobileType;
    }
}
class SmartPhone extends Mobile{
    SType:string;
    constructor(mobileType:string){
        super(123456, "Sachin", 20000);
        this.SType=mobileType;
    }
}

const obj = new BasicPhone("Nokia 500");

console.log(obj.printMobileDetail(), "\nType: ",obj.BType);