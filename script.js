
// odd numbers in anonyums function
let arr=[1,2,3,4,5,6,7,8,9,10,11,12];
let even=arr.filter(n => n%2)
console.log(even)

//add array

const myarr = [5, 15, 45];

const sum = myarr.reduce((accumulator, value) => {
  return accumulator + value;
});

console.log(sum);

// prime number
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);

//palindrome
let str = "pain";
let strReverse = str.split("").reverse().join("");

if (str === strReverse) {
  console.log("The string is a palindrome");
} else {
  console.log("NOT a palindrome");
}

//duplicate

var arr1 = ["apple", "mango", "apple",
            "orange", "mango", "mango"];
 
    function removeDuplicates(arr1) {
        return arr1.filter((item,index)=> arr1.indexOf(item) === index);

    }
        
        console.log(removeDuplicates(arr1))

       