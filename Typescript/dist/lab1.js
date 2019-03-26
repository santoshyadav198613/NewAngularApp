var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mobile = /** @class */ (function () {
    function Mobile(mobileId, mobileName, mobileCost) {
        this.fId = mobileId;
        this.fName = mobileName;
        this.fCost = mobileCost;
    }
    Mobile.prototype.printMobileDetail = function () {
        return "ID: " + this.fId + " \n Name: " + this.fName + " \n Cost: " + this.fCost;
    };
    return Mobile;
}());
var BasicPhone = /** @class */ (function (_super) {
    __extends(BasicPhone, _super);
    function BasicPhone(mobileType) {
        var _this = _super.call(this, 12345, "Hiren", 5000) || this;
        _this.BType = mobileType;
        return _this;
    }
    return BasicPhone;
}(Mobile));
var SmartPhone = /** @class */ (function (_super) {
    __extends(SmartPhone, _super);
    function SmartPhone(mobileType) {
        var _this = _super.call(this, 123456, "Sachin", 20000) || this;
        _this.SType = mobileType;
        return _this;
    }
    return SmartPhone;
}(Mobile));
var obj = new BasicPhone("Nokia 500");
console.log(obj.printMobileDetail(), "\nType: ", obj.BType);
