import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Invoice implements HasFormatter {
    // client: string;
    // details: string;
    // amount: number;

    constructor(
        private client: string,
        private details: string,
        private amount: number
        //c: string, d: string, a: number
        ) {
        // this.client = c;
        // this.details = d;
        // this.amount = a;
    }
    
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}