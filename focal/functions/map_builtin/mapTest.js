const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];
// Creating a variable namesLength
//map lighthouse to find the each of the array elemnts length
//used arrow function 
const namesLength = lighthouses.map(lighthouse => lighthouse.length);
// console.log the new array which is namesLength
console.log(namesLength);