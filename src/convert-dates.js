const convertDate = function(dateString /*2003-08-05*/) {
    const dateArray = dateString.split('-');

    let month;

    switch (dateArray.at(1)) {
        case '01':
            month = 'Jan.';
            break;
        case '02':
            month = 'Feb.';
            break;
        case '03':
            month = 'Mar.';
            break;
        case '04':
            month = 'Apr.';
            break;
        case '05':
            month = 'May';
            break;
        case '06':
            month = 'June';
            break;
        case '07':
            month = 'July';
            break;
        case '08':
            month = 'Aug.';
            break;
        case '09':
            month = 'Sept.';
            break;
        case '10':
            month = 'Oct.';
            break;
        case '11':
            month = 'Nov.';
            break;
        case '12':
            month = 'Dec.';
            break;
    }

    let suffix;
    let day;

    if (dateArray.at(2).split('').at(1) === '4'||'5'||'6'||'7'||'8'||'9'||'0') {
        suffix = 'th';
    } else if (dateArray.at(2).split('').at(1) === '1') {
        suffix = 'st';
    } else if (dateArray.at(2).split('').at(1) === '2') {
        suffix = 'nd';
    } else if (dateArray.at(2).split('').at(1) === 3) {
        suffix = 'rd';
    }

    if (dateArray.at(2).split('').at(0) === '0') {
        day = dateArray.at(2).split('').slice(1, 2);
    } else {
        day = dateArray.at(2);
    }

    const convertedDate = `${month} ${day}${suffix}`;
    return convertedDate
}

export { convertDate }