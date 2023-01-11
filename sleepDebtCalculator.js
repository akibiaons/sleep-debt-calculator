/* Step one is to ask the user how many hours of sleep they got each night of the week. 
To do this I will declare a function that returns any given nights number of hours of rest. */
//====================================
const getSleepHours = day => {
    switch(day) {
        case 'monday':
            return 5
            break;
        case 'tuesday':
            return 5
            break;
        case 'wednesday':
            return 4
            break;
        case 'thursday':
            return 5
            break;
        case 'friday':
            return 4
            break;
        case 'saturday':
            return 8
            break;
        case 'sunday':
            return 8
            break;            
        default: //using default at the end of the switch statement is like the else statement in my original writeup.
            return 'Error!'
    }
};
//In the code above I wrote a function to get the number of hours of sleep for each night.
// Now we need to get the total sleep hours per week, ideal sleep hours, and calculate any sleep debt...
// Below I will declare a new function with no parameters named getActualSleepHours
const getActualSleepHours = () => 
    getSleepHours('monday') +
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');

console.log(getSleepHours('friday'));
console.log(getActualSleepHours());
// For step 4 we will call the getSleepHours function within the getActualSleepHours add them all together and return a result

// For step 5 we will now declare a function named getIdealSleepHours and within the function's block I will declare a variable named ideal hours
// idealHours will have it's value set to the ideal amount of hours I would like to sleep per night. Finally I need to return the idealHours with a multiple of 7 to track the hours of sleep per week.
const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
};
// Step five above is done, we now have calculated all the sleep hours per day and returned a weekly value.

















// ======================================================================//
/*
    if(day === 'monday') {
        return 8;
    } 
    else if(day === 'tuesday') {
        return 7;
    } 
    else if (day === 'wednesday') {
        return 8;
    }
    else if (day === 'thursday') {
        return 4;
    } 
    else if (day === 'friday') {
        return 10;
    }
    else if (day === 'saturday') {
        return 7;
    }
    else if (day === 'sunday') {
        return 7;
    }
    .....
    else {
    
    }
*/
//=====================================
// Inside the getSleepHours function block I will use an if / else statement to return the actual number of hours of sleep per night