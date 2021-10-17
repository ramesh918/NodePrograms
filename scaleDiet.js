/** 
 * 0-6 hours have to be converted as 0-16 percent
 * 
 *        (b-a)(x - min)
f(x) = --------------  + a
          max - min
* here b-a is percentageDifference
* max - min is exerciseDifference
* x - min is actualToMinimumDietDifference
* a is minimumPercentage
* b is maximumPercentage
*/

let minimumDiet = 0;
let maximumDiet = 5;
let minimumPercentage = 0;
let maximumPercentage = 25;
let actualDiet = 5

let dietPercentage = (actualDiet)=>{

    let percentageDifference = maximumPercentage - minimumPercentage
    let exerciseDifference = maximumDiet - minimumDiet
    let actualToMinimumDietDifference = actualDiet - minimumDiet

    let percentage = ((percentageDifference*actualToMinimumDietDifference)/exerciseDifference)+minimumPercentage

    return percentage
}


// let dietInput = "ragi java, dry fruits, egg, chapthi, glass of milk "

let value = dietPercentage(actualDiet)
let fixedValue = parseFloat(value.toFixed(2))
console.log(value.toFixed(2))
console.log(typeof(fixedValue))


