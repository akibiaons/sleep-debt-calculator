/* Step one is to ask the user how many hours of sleep they got each night of the week. 
To do this I will declare a function that returns any given nights number of hours of rest. */
//====================================
const getSleepHours = day => {
    switch(day) {
        case 'monday':
            return 8
            break;
        case 'tuesday':
            return 8
            break;
        case 'wednesday':
            return 8
            break;
        case 'thursday':
            return 8
            break;
        case 'friday':
            return 8
            break;
        case 'saturday':
            return 8
            break;
        case 'sunday':
            return 8
            break;            
        default: 
            return 'Error!'
    }
};
//In the code above I wrote a function to get the number of hours of sleep for each night.
// Now we need to get the total sleep hours per week, ideal sleep hours, and calculate any sleep debt...
// Below I will declare a new function with no parameters named getActualSleepHours
const getActualSleepHours = () => {

}
// For step 4 we will call the getSleepHours function within the getActualSleepHours add them all together and return a result



















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