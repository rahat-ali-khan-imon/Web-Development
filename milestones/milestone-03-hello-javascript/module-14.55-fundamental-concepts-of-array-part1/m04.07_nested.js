let age = 20;
let hasTicket = true;

if (age >= 18) {
  if (hasTicket) {
    console.log("You can enter");
  } else {
    console.log("Buy a ticket first");
  }
} else {
  console.log("You are underage");
}