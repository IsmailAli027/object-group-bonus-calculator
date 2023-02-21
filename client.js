// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );



// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
for(let i=0; i<employees.length; i++){
  console.log(employees[i]);
}

function calculateIndividualEmployeeBonus( xxx ) {
  console.log('information passed in:', xxx);  
  let bonusResults = {};
   bonusResults.name = 7;
   bonusResults.bonusPercentage = 7;
   bonusResults.totalCompensation = 7;
   bonusResults.totalBonus = xxx;
   console.log(bonusResults);

 // need to figure out a way to make dynamic
  
} 
calculateIndividualEmployeeBonus(6)
  // return new object with bonus results
// return bonusResults
// }


// if(reviewRating <= 2){
//   annualSalary
// }
// else if( reviewRating = 3){
//   annualSalary * .04
// }
// else if( reviewRating =4){
//   annualSalary * .06
// }
// else if (reviewRating = 5) {
//   annualSalary * .1
// }
// else if (reviewRa) {
  
// }