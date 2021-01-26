//encaptultions

class Account {
    private balance: number = 0;

    public deposit(amount: number){
       this.balance+=amount;
    }

    withdraw(amount: number){
        this.balance-=amount;
    }

    public getBalance(){
        return this.balance;
    }
}

const cc = new Account();
    cc.deposit(30);
    cc.withdraw(40);
    console.log(cc.getBalance())

//polymorphism

abstract class UIControl {
    public abstract draw();
}

class TextBox extends UIControl{
   draw(){
       console.log("text box")
   }
}

class CheckBox extends UIControl{
    draw(){
        console.log("check box")
    }
 }

 class CheckingAccount {
    open(initialAmount: number) {
     console.log("initialAmount- bse clss: ", initialAmount)
    }
  }

  class BusinessCheckingAccount extends CheckingAccount {
    open(initialAmount: number) {
      if (initialAmount < 1000) {
        throw new Error("Business accounts must have an initial deposit of 1.000 Euros")
      }
      super.open(initialAmount);
    }
  }
  class PersonalCheckingAccount extends CheckingAccount {
    open(initialAmount: number) {
      if (initialAmount <= 0) {
        throw new Error("Personal accounts must have an initial deposit of more than zero Euros")
      }
      super.open(initialAmount);

    }
  }


  const bc = new BusinessCheckingAccount();
  console.log(bc.open(20000));
