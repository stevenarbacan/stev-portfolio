const exampleText = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
];
const exampleTyping = new AutoTyping(".typing-text", exampleText, {
  typeSpeed: 50,
  deleteSpeed: 50,
  waitBeforeDelete: 2000,
  waitBetweenWords: 500,
});
exampleTyping.start();
