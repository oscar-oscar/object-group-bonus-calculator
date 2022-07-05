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

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);
console.table(employees);

/**
 * 
 * @param {*} employeeObj 
 * @param {*} employees 
 */
 function calculateBonus(cohortArray){
  // let empBonus = "";
  
  for(employeeObj of cohortArray){
    console.log('Calculating bonus for', employeeObj.name);
    // empBonus += "<li>" + newObject + "</li>";
    let bonusPercent = 0;
    
    if (employeeObj.rating <= 2) {
      console.log('No bonus', employeeObj.name);
        bonusPercent = 0;
    } else if (employeeObj.reviewRating === 3) {
        bonusPercent += 0.04;
    } else if (employeeObj.reviewRating === 4) {
        bonusPercent += 0.06;
    } else if (employeeObj.reviewRating === 5) {
        bonusPercent += 0.1;
    } ;
    
    if(employeeObj.employeeNumber.length === 4){
        bonusPercent += 0.05;}

    if(parseInt(employeeObj.annualSalary) > 65000){
      bonusPercent -= 0.01;}
    
    if(bonusPercent > .13){
      bonusPercent = .13;
    } else if( bonusPercent <= 0){
      bonusPercent = 0;
    } 

    let bonusAmount = parseInt(employeeObj.annualSalary) * bonusPercent;

    let totalComp = Math.ceil(parseInt(employeeObj.annualSalary) + bonusAmount);
    let newObject = {
      name: employeeObj.name,
      bonusPercent: bonusPercent,
      bonusAmount: bonusAmount,
      totalComp: totalComp,
    }
    console.log(newObject);
    
  }
  // bonusData.innerHTML = empBonus;
};


calculateBonus(employees);



// // for(let penguin of penguins){
//   console.log('is small and cute' , penguin.name);
//   //isCute is property of object as is name, colors, size... see object in js
//   if(penguin.isCute === true && penguin.size < 0.9)
