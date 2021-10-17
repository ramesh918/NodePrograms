/** 
 * 0-6 hours have to be converted as 0-16 percent
 * 
 *        (b-a)(x - min)
f(x) = --------------  + a
          max - min
* here b-a is percentageDifference
* max - min is sleepDifference
* x - min is actualToMinimumSleepDifference
* a is minimumPercentage
* b is maximumPercentage
*/

let minimumSleep = 0;
let maximumSleep = 6;
let minimumPercentage = 0;
let maximumPercentage = 25;
let actualSleep = 8

let getSleepPercentage = (actualSleep)=>{

    if (actualSleep > 6)
    {
        actualSleep = actualSleep - 6
    }
    console.log(actualSleep)

    let percentageDifference = maximumPercentage - minimumPercentage
    let sleepDifference = maximumSleep - minimumSleep
    let actualToMinimumSleepDifference = actualSleep - minimumSleep

    let percentage = ((percentageDifference*actualToMinimumSleepDifference)/sleepDifference)+minimumPercentage

    return percentage
}

let value = getSleepPercentage(actualSleep)
console.log(value)