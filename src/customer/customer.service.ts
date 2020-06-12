import { Injectable } from '@nestjs/common';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {

    customer: Array<Customer> = [];

    constructor() {

        const customer = new Customer();

        customer.name = "Gabriel";
        customer.cpf = "07734175910"
        customer.rg = "110595255";
        customer.birth = "23/05/2020";
        customer.gender = "Masculino";
        customer.cellphone = 45998622332;
        customer.age = 23;
        customer.address = "Rua Almirante Barroso, 789"

        this.customer.push(customer);
    }

    findAll() {
        return this.customer;
    }

    save(customer: Customer) {
        this.customer.push(customer);
        return this.customer;
    }

}