let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");
let part4 = document.getElementById("part4");
let messageParagraph = document.getElementById("messageParagraph");

function day1Part1() {
  let playerOne;
  playerOne = {};
  playerOne.name = prompt("What is your name?");
  playerOne.hiScore = prompt("What is your all time hi-score?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.
  playerOne.superpower = prompt("What is your superpower?");

  // Try it!
  // TODO: add the answer to the new question here.
  messageParagraph.innerHTML = `Hi, ${playerOne.name}! Can you beat your hi score of ${playerOne.hiScore} with your superpower of ${playerOne.superpower}?`;

}

part1.onclick = day1Part1;


function day1Part2() {
  let customer = {};
  customer.name = prompt("What is your name?");
  customer.address = prompt("What is your address?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.
  customer.email = prompt("What is your email address?");

  
  // Try it!
  // TODO: add the answer to the new question to the innerHTML statment below.
  messageParagraph.innerHTML = `Hi, ${customer.name}! Your current address is ${customer.address}. We will send you updates to this email ${customer.email}.`;
}
part2.onclick = day1Part2;


function day1Part3() {
  let pet;
  pet = {};

  // Try it!
  // TODO: create a prompt to ask about a pet
  pet.name = prompt("What is the name of your pet?");
  pet.treat = prompt("What is your pet's favorite treat?");

  // Try it!
  // TODO: make a message based on the answers to the prompt.
  messageParagraph.innerHTML = `Your pet's name is ${pet.name}. And they love ${pet.treat}.`;
}
part3.onclick = day1Part3;


// Try it!
// TODO: add your own idea for a prompt. Use an object to store the user's response.
function day1Part4() {
  let pizzaOrder;
  pizzaOrder = {};

  pizzaOrder.customerName = prompt("What is the name for the order?");
  pizzaOrder.pizzaSize = prompt("What size pizza would you like?");
  pizzaOrder.toppings = prompt("What toppings would you like?");

  messageParagraph.innerHTML = `Hi ${pizzaOrder.customerName}! Your ${pizzaOrder.pizzaSize} pizza with ${pizzaOrder.toppings} toppings, will be ready for pick-up in 35 minutes.`





  
}

part4.onclick = day1Part4;