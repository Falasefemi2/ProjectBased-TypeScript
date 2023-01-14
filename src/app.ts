// classes
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice('femi', 'work on website', 300);
const invTwo = new Invoice('tayo', 'work on website doping', 700);
console.log(invOne);
console.log(invTwo);


const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

// inputs
const types = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(types.value, tofrom.value, details.value, amount.valueAsNumber);
});
