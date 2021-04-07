const input ='Everything it is gonna be just fine';
const vowels =['a', 'e', 'i','o','u'];
const resultArray = [];
for (let x = 0; x < input.length; x++) {
    console.log(x);
    console.log(input[x]);
    console.log(input.lenght);

    for (let y=0; y < vowels.lenght; y++){
        if (input[x] === vowels[y]) {
            if (input[x] === "e"){ 
                resultArray.push("ee");
            } else if (input[x] === "u") {
                resultArray.push("uu");
             } else {
               resultArray.push(input[x]);           
             }
            }
    }
}
console.log(resultArray.join("").toUpperCase());