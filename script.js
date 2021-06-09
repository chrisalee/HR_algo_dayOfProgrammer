const dayOfProgrammer = (year) => {
    // Write your code here
    
    if (year == 1918) {
        console.log('1918 is weird');
        return "26.09.1918";
    } else if (
        (year < 1918 && year % 4 === 0) || 
        year % 400 == 0 || 
        (year % 4 === 0 && year % 100 != 0)
    ) {
        console.log('12.09.' + year);
        return "12.09." + year;
    } else {
        console.log('13.09.' + year);
        return "13.09." + year;
    }
        
}
