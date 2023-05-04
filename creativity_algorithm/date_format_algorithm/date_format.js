/**
    Create function that able to change time format to 24 hour format.
    Input format : hh:mm:ssAM or hh:mm:ssPM
    Note : 12:00:00AM will be 00:00:00 in 24-hour format, and 12:00:00PM will be 12:00:00
    
    
    Example :
    Input : 07:05:45PM
    Output : 19:05:45

*/

function dateFormatConverter(inputDate) {
    const arrayDate = inputDate.split(':');
    const [hour, minutes, secondAMPM] = arrayDate;
    const dayEvening = secondAMPM.substr(2);
    const second = secondAMPM.substr(0, 2);
    const convertDate = [];
    
    // construct hours
    
    if (dayEvening === 'AM') {
        
        if ( parseInt(hour, 10) < 12 ) convertDate.push(hour);
        
        if ( parseInt(hour, 10) === 12) convertDate.push('00');
        
        if ( parseInt(hour, 10) > 12) throw Error ('Invalid Error on Hours');
        
    } else if (dayEvening === 'PM') {
        
        if ( parseInt(hour, 10) < 12 ) {
            const normalizeHour = parseInt(hour, 10) + 12;
            convertDate.push(`${normalizeHour}`);
        }
        
        if ( parseInt(hour, 10) === 12) convertDate.push('12');
        
        if ( parseInt(hour, 10) > 12) throw Error ('Invalid Error on Hours');
    }
    
    // construct minutes
    
    if (parseInt(minutes, 10) > 59) throw Error ('Invalid Error on Minutes');
    
    convertDate.push(minutes);
    
    // construct seconds
    
    if (parseInt(second, 10) > 59) throw Error ('Invalid Error on Seconds');
    
    convertDate.push(second);
    
    console.log(`${convertDate.join(':')}`)
    
    
}
dateFormatConverter('07:05:45PM')