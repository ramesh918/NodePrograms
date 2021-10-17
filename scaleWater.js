/** 
 * 0-6 hours have to be converted as 0-16 percent
 * 
 *        (b-a)(x - min)
f(x) = --------------  + a
          max - min
* here b-a is percentageDifference
* max - min is sleepDifference
* x - min is actualTominimumWaterDifference
* a is minimumPercentage
* b is maximumPercentage
*/

let minimumWater = 0;
let maximumWater = 2;
let minimumPercentage = 0;
let maximumPercentage = 25;
let actualWater = 2

let getWaterPercentage = (actualWater)=>{

   

    let percentageDifference = maximumPercentage - minimumPercentage
    let sleepDifference = maximumWater - minimumWater
    let actualToMinimumWaterDifference = actualWater - minimumWater

    let percentage = ((percentageDifference*actualToMinimumWaterDifference)/sleepDifference)+minimumPercentage

    return percentage
}

let value = getWaterPercentage(actualWater)
console.log(value)