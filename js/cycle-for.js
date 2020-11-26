const target = 5;
let finalCount = 0;

for(let i = 1; i <= target; i += 1) {
    console.log(i);
    // finalCount = finalCount += 1;
    finalCount = finalCount += i;
}
console.log(`finalCount if += i: ${finalCount}`);