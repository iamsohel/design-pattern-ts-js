import { CustomerService } from './CustomerService';
import { Command } from './command';
export class AddCustomerCommand implements Command{
    service: CustomerService;
    constructor(service: CustomerService){
        this.service = service;
    }
   execute(){
     this.service.addCustomer()
   }
}