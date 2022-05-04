function startRating(array) {
    let sumOfArray = array.reduce((sum, value) => {
        return sum + value
    }, 0);


    let sumOfProducts = array.map((element, index) => {
        index = ++index;
        return element * index;
    });

    let resultOfProducts = sumOfProducts.reduce((acc, ele) => {
        return acc + ele
    }, 0);

    let resultOfDivided = resultOfProducts / sumOfArray;
    let roundedNum = Math.round(resultOfDivided);
    let roundedWith2Num = Array(resultOfDivided.toFixed(2)); //[3.15]
    let a = JSON.stringify(roundedWith2Num) //"[3.15]"
    return a + "".padStart(roundedNum, "*");

}
console.log(startRating([55, 67, 98, 115, 61]));
console.log(startRating([0, 2, 0, 1, 23]));
console.log(startRating([16, 17, 23, 40, 45]));


