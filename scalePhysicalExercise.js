/** 
 * 0-6 hours have to be converted as 0-16 percent
 * 
 *        (b-a)(x - min)
f(x) = --------------  + a
          max - min
* here b-a is percentageDifference
* max - min is exerciseDifference
* x - min is actualToMinimumExerciseDifference
* a is minimumPercentage
* b is maximumPercentage
*/

let minimumExercise = 0;
let maximumExercise = 90;
let minimumPercentage = 0;
let maximumPercentage = 25;
let actualExercise = 90

let exercisePercentage = (actualExercise)=>{

    let percentageDifference = maximumPercentage - minimumPercentage
    let exerciseDifference = maximumExercise - minimumExercise
    let actualToMinimumExerciseDifference = actualExercise - minimumExercise

    let percentage = ((percentageDifference*actualToMinimumExerciseDifference)/exerciseDifference)+minimumPercentage

    return percentage
}

let value = exercisePercentage(actualExercise)
let fixedValue = parseFloat(value.toFixed(2))
console.log(value.toFixed(2))
console.log(typeof(fixedValue))
