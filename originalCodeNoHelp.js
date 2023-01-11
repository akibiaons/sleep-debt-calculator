/* Step one, is to write a function that can return any given nights number of hours of rest.
We will use one function with the parameter day
*/
const getSleepHours = day => {
    // Step two is to get our new function to accept the day as an argument and return the number of hours slept per night.
    if (day === 'Monday') {
      return 6;
    } 
    else if (day === 'Tuesday') {
      return 8;
    } 
    else if (day === 'Wednesday') {
      return 4;
    } 
    else if (day === 'Thursday') {
      return 5;
    } 
    else if (day === 'Friday') {
      return 8;
    } 
    else if (day === 'Saturday') {
      return 8;
    } 
    else if (day === 'Sunday') {
      return 8;
    } else {

    } // In the revised code I am using a switch statement or whatever...
  };
  // console.log(getSleepHours('saturday'));
  // The log above should print the # of hours assigned to tuesday
  
  
  // Below is a function of the sleep hours that have actually been slept...
  const getActualSleepHours = () => {
    getSleepHours('Monday') 
    + getSleepHours('Tuesday')
    + getSleepHours('Wednesday')
    + getSleepHours('Thursday')
    + getSleepHours('Friday')
    + getSleepHours('Saturday')
    + getSleepHours('Sunday') 
  };
  
  const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours * 7;
  };
  /* 
  - Below is console logging for calculating sleep hours. Undefined does seem to show up however.
  ===========
  console.log(getActualSleepHours()); //This should print all the sleep hours in the week.
  
  console.log(getIdealSleepHours()); //Ideal hours is 8 so 56 should print.
  =================
  */
  // Below is a function with if else statements, which are used in conjunction to verify of the user overslept, underslept, or followed their schedule. 
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('Great Job, Keep Resting Regularly!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' extra hours of sleep. Use an alarm to wake up in a timley manner.');
    } else (actualSleepHours < idealSleepHours); {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed this week. Go get some rest.');
    }
  };
  
  calculateSleepDebt();