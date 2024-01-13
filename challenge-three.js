let randomizer = parseInt((Math.random() * 4).toFixed());
let fate;
if (randomizer === 0) {
  fate = "A certain victory";
} else if (randomizer === 1) {
  fate = "not so certain victory";
} else if (randomizer === 2) {
  fate = "an uneasy victory";
} else {
  fate = "Your fate is unclear, ô chosen undead";
}
console.log(randomizer);
console.log(`Your fate is: ${fate}`);
