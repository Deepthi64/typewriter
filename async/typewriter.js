const sentence = "hello there from lighthouse labs";
let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
    if (char === sentence[sentence.length - 1]) {
      console.log("\n");
    }
  }, delay);
  delay += 1000;
}