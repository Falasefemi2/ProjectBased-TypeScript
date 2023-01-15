import { Invoice } from "./classes/invoice.js";
const invOne = new Invoice("femi", "work on website", 300);
const invTwo = new Invoice("tayo", "work on website doping", 700);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// inputs
const types = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(types.value, tofrom.value, details.value, amount.valueAsNumber);
});
