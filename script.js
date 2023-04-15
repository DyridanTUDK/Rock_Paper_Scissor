var rock = `
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
`;
var paper = `
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)

`;
var scissors = `
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)

`;
var game_images = [rock, paper, scissors];

var user_choice = parseInt(
  prompt(
    "What do you choose? type 0 for rock, 1 for paper or 2 for scissors.\n"
  )
);

// && and  / || or
if (user_choice >= 3 || user_choice < 0) {
  alert("You typed an invalid number, you lose:");
} else {
  console.log("Your choice:");
  console.log(game_images[user_choice]);
  var computer_choice = Math.floor(Math.random() * 3);
  console.log("Computer Chose:");
  console.log(game_images[computer_choice]);
  if (user_choice === 0 && computer_choice === 2) {
    console.log(game_images[user_choice]);
    console.log("You Win!");
  } else if (computer_choice === 0 && user_choice === 2) {
    console.log("You Lose!");
  } else if (computer_choice > user_choice) {
    console.log("You Lose");
  } else if (computer_choice < user_choice) {
    console.log("You Win!");
  } else if (computer_choice === user_choice) {
    console.log("It's a tie!");
  }
}
