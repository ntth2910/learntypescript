"use strict";
exports.__esModule = true;
exports.Payment = exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    function Invoice(client, work, amount) {
        this.client = client;
        this.work = work;
        this.amount = amount;
    }
    //phai co ham print tra lai
    Invoice.prototype.print = function () {
        return this.client + " owes " + this.amount + " dollar(s) for this work: " + this.work + "\n        ";
    };
    return Invoice;
}());
exports.Invoice = Invoice;
var Payment = /** @class */ (function () {
    function Payment(recipiont, job, amt) {
        this.recipiont = recipiont;
        this.job = job;
        this.amt = amt;
    }
    Payment.prototype.print = function () {
        return "i owe " + this.recipiont + "  " + this.amt + " dollar(s) for this job: " + this.job + "\n        ";
    };
    return Payment;
}());
exports.Payment = Payment;
