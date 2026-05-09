

function filterEvenNumbers(numbers: number[]):number[]{
  return numbers.filter((number)=>number%2==0);
}

const inputNumbers:number[]=[1,2,3,4,5,6];
const result :number[]= filterEvenNumbers(inputNumbers);

result;