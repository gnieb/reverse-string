function reverseString(str) {
  let reverse = ""
  for( i = (str.length -1); i > -1; i--) {
    reverse += str[i]
  }
  return reverse
  
}

if (require.main === module) {
  console.log("Expecting: olleh")
  console.log("=>", reverseString("hello"))
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// declare a variable to store  the new string. 
// then loop through the string backwards, storing each letter as we go through the loop
//return the variable when the loop is finished, returning our newly reversed string

