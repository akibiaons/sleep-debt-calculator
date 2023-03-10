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
/* 
Now is step six, which will require that I use the actual and ideal hours to calculate sleep debt. 
To do this we must:
1.) Make a function with no parameters
2.) Create a variable within the function block to get actualSleepHours
3.) Create a third variable within the function block to get idealSleepHours 
4.) Use interpolation to calculate what sleep debt there is, and if the user must rest more or use an alarm to wake up on time.
*/
//STEP SIX BELOW 
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if(actualSleepHours === idealSleepHours) {
        console.log("You've got the perfect amount of sleep!");
    }

    else if (actualSleepHours > idealSleepHours) {
        console.log("You got " + (idealSleepHours - actualSleepHours) + " more hours of sleep than needed!");
    }

    else if (actualSleepHours < idealSleepHours) {
        console.log("You got " + (idealSleepHours - actualSleepHours) + " hours of sleep this week get some rest!");
    }

    else {
        console.log('Error something went wrong! Check your code!');
    }
};

calculateSleepDebt();
/*
Step 7 will involve using if / else statements to output three of the following outcomes for users
1.) actualSleepHours = idealSleepHours 'Great job you slept enough and on time!'
2.) actualSleepHours > idealSleepHours 'You got a lot of rest, try to set an alarm or increase idealSleepHours!'
3.) actualSleepHours < idealSleepHours 'You must get more rest, try getting ready for bed an hour before and use undwinding methods..'
*/
// Step 8 will utilize the amount of time a user is over or under their idealSleepHours!

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