let totalAmount = document.querySelector("#total-amount");
let recievedAmount = document.querySelector("#amount-recieved");
let buttonEl = document.querySelector("#calculate");
let lists = document.querySelectorAll(".lists");

let availableCurrencies = [2000, 500, 100, 20, 10, 5, 1];

buttonEl.addEventListener("click", () => {
  let amountEl = Number(totalAmount.value);
  let cashEl = Number(recievedAmount.value);

  calculateNotes(amountEl, cashEl);
});

function calculateNotes(bill, cash) {
  var returnAmt = cash - bill;

  for (let i = 0; i < availableCurrencies.length; i++) {
    console.log(returnAmt, availableCurrencies[i], i);
    returnAmt = compare(returnAmt, availableCurrencies[i], i);
  }
}

function compare(remainder, noteAmt, index) {
  if (remainder >= noteAmt) {
    let notes = Math.floor(remainder / noteAmt);
    remainder = remainder - notes * noteAmt;
    lists[index].innerText = `${notes}`;
  }
  return remainder;
}
