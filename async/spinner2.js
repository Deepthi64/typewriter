process.stdout.write('hello from spinner2.js... \rheyyy\n');
const spinnerChars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

let delay = 100;
for (const char of spinnerChars) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
  delay += 200;
}

//setTimeout(() => {
  //process.stdout.write('\r|   ');
//}, 100);

//setTimeout(() => {
  //process.stdout.write('\r/   ');
//}, 300);

//setTimeout(() => {
  //process.stdout.write('\r-   ');
//}, 500);

//setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  //process.stdout.write('\r\\   '); 
//}, 700);

//setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  //process.stdout.write('\r/   '); 
//}, 900);

//setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  //process.stdout.write('\r-   '); 
//}, 1000);

//setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  //process.stdout.write('\r|   '); 
//}, 1300);