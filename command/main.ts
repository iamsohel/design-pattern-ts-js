import { AddCustomerCommand } from './addCustomerCommand';
import { Button } from './Button';
import { CustomerService } from './CustomerService';
let service =  new CustomerService();
let command = new AddCustomerCommand(service);
let button = new Button(command);
button.click()