test ("generateRnadomNumbeers should return an array of numbers",()=>{
// test code

// expect result
const generate = new Generator();
const result = generate.getRandomNumbers(3);
console.log(result);
expect (result).toEqual([1,1,1]);
})