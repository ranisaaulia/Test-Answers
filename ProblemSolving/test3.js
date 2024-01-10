console.log("---------Soal 1----------");
console.log(" ");

function timeConversion(s) {
    if (s.includes('PM') && s.substring(0, 2) !== '12') {
        let timeArray = s.split(':');
        timeArray[0] = String(Number(timeArray[0]) + 12); 
        s = timeArray.join(':');
    }
    
    if (s.includes('AM') && s.substring(0, 2) === '12') {
        s = '00' + s.substring(2);
    }
    
    s = s.replace('AM', '').replace('PM', '');

    return s;
}

time_12_hour = '12:01:00PM';
time_24_hour = timeConversion(time_12_hour);
console.log(time_24_hour); 

time_12_hour = '12:01:00AM';
time_24_hour = timeConversion(time_12_hour);
console.log(time_24_hour); 

console.log(" ");
console.log("---------Soal 2----------");
console.log(" ");


function convertTo24HourClock(time) {
    let timeComponents = time.split(':');
    let hours = parseInt(timeComponents[0]);
    let minutes = parseInt(timeComponents[1]);
    let seconds = parseInt(timeComponents[2].slice(0, 2)); 
    let period = timeComponents[2].slice(-2); 

    if (period === 'PM' && hours !== 12) {
        hours += 12;
    }

    if (period === 'AM' && hours === 12) {
        hours = 0;
    }

    let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return formattedTime;
}

let inputTime = "07:05:45PM";

let outputTime = convertTo24HourClock(inputTime);
console.log(outputTime); 
