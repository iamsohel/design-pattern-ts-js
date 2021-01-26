//encaptultions
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
var Account = /** @class */ (function () {
    function Account() {
        this.balance = 0;
    }
    Account.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    Account.prototype.withdraw = function (amount) {
        this.balance -= amount;
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    return Account;
}());
var cc = new Account();
cc.deposit(30);
cc.withdraw(40);
console.log(cc.getBalance());
//polymorphism
var UIControl = /** @class */ (function () {
    function UIControl() {
    }
    return UIControl;
}());
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.draw = function () {
        console.log("text box");
    };
    return TextBox;
}(UIControl));
var CheckBox = /** @class */ (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckBox.prototype.draw = function () {
        console.log("check box");
    };
    return CheckBox;
}(UIControl));
var CheckingAccount = /** @class */ (function () {
    function CheckingAccount() {
    }
    CheckingAccount.prototype.open = function (initialAmount) {
        console.log("initialAmount- bse clss: ", initialAmount);
    };
    return CheckingAccount;
}());
var BusinessCheckingAccount = /** @class */ (function (_super) {
    __extends(BusinessCheckingAccount, _super);
    function BusinessCheckingAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BusinessCheckingAccount.prototype.open = function (initialAmount) {
        if (initialAmount < 1000) {
            throw new Error("Business accounts must have an initial deposit of 1.000 Euros");
        }
        _super.prototype.open.call(this, initialAmount);
    };
    return BusinessCheckingAccount;
}(CheckingAccount));
var PersonalCheckingAccount = /** @class */ (function (_super) {
    __extends(PersonalCheckingAccount, _super);
    function PersonalCheckingAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PersonalCheckingAccount.prototype.open = function (initialAmount) {
        if (initialAmount <= 0) {
            throw new Error("Personal accounts must have an initial deposit of more than zero Euros");
        }
        _super.prototype.open.call(this, initialAmount);
    };
    return PersonalCheckingAccount;
}(CheckingAccount));
var bc = new BusinessCheckingAccount();
console.log(bc.open(20000));
