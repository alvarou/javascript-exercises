const leapYears = (year) => {

    //leap years are divisible by 4, 
    //unless they are divisible by 100, 
    //but not divisible by 400    
    if (year % 100 === 0) {
        return year % 400 === 0;
    } else {
        return year % 4 === 0;
    }

};

// Do not edit below this line
module.exports = leapYears;
