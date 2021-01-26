import { AuditTrail } from "./AuditTrail";
import { Task } from "./Task";

export class MoneyTransfer extends Task{
    constructor(){
        super(new AuditTrail);
    }
    protected doExecute(): void{
        console.log("Transfer Money")
    }
}