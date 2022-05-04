//solution 1 with map
function accumulatingArray(array) {
    let pSum = 0;
    return array.map(sum => pSum += sum)
  }
   
  //solution2 with for loop
  /*function accumulatingArray(array) {
      for(let i = 1 ; i < array.length ; i++) {
        array[i] = array[i] + array[i-1];
      }
       return array;
  }*/
  
  //solution3 with reduce
  /*function accumulatingArray(array) {
      return array.reduce((sum, element, index) => {
          if(index === 0) return [element] ;
          else 
          return [...sum, element + sum[index - 1]]}
               , []);
      
    }*/
  console.log(accumulatingArray([]));
  console.log(accumulatingArray([1,2,3,4]));
  console.log(accumulatingArray([1,5,7]));
  console.log(accumulatingArray([1, 0, 1, 0, 1]));