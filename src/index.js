module.exports = function toReadable (number) {
    let str = '';
    let testNumber = '';

    switch ((number - number%100) / 100) {
        case 1 : 
            str = 'one';
            break;
        case 2 : 
            str = 'two';
            break;
        case 3 :   
            str = 'three';
            break;
        case 4 :    
            str = 'four';
            break;
        case 5 : 
            str = 'five';
            break;
        case 6 :   
            str = 'six';
            break;
        case 7 : 
            str = 'seven';
            break;
        case 8 : 
            str = 'eight';
            break;
        case 9 : 
            str = 'nine';
            break;
        default: 
            str = '';
            break;
    }
    if (str !== '') {
        testNumber = str + ' hundred';
    }

    if ((number % 100) > 19 || number % 100 < 10) {
        switch ((number%100 - (number%100)%10) / 10) {
            case 2 : 
                str = ' twenty';
                break;
            case 3 : 
                str = ' thirty';
                break;
            case 4 : 
                str = ' forty';
                break;
            case 5 : 
                str = ' fifty';
                break;
            case 6 : 
                str = ' sixty';
                break;
            case 7 : 
                str = ' seventy';
                break;
            case 8 : 
                str = ' eighty';
                break;
            case 9 : 
                str = ' ninety';
                break;
            default: 
                str = '';
                break;
            }
            
        testNumber = testNumber + str;

        switch (number%10) {
            case 1 : 
                str = ' one';
                break;
            case 2 : 
                str = ' two';
                break;
            case 3 : 
                str = ' three';
                break;
            case 4 : 
                str = ' four';
                break;
            case 5 : 
                str = ' five';
                break;
            case 6 : 
                str = ' six';
                break;
            case 7 : 
                str = ' seven';
                break;
            case 8 : 
                str = ' eight';
                break;
            case 9 : 
                str = ' nine';
                break;
            default:
                str = '';
                break;
        }
        testNumber = testNumber.trim() + str;

    } else {
        switch (number % 100) {
            case 10 : 
                str = ' ten';
                break;
            case 11 : 
                str = ' eleven';
                break;
            case 12 : 
                str = ' twelve';
                break;
            case 13 : 
                str = ' thirteen';
                break;
            case 14 : 
                str = ' fourteen';
                break;
            case 15 : 
                str = ' fifteen';
                break;
            case 16 : 
                str = ' sixteen';
                break;
            case 17 : 
                str = ' seventeen';
                break;
            case 18 : 
                str = ' eighteen';
                break;
            case 19 : 
                str = ' nineteen';
                break;
            default : 
                str = '';
                break;
    }
        testNumber += str;
    }
    if (testNumber.trim() === '') {
        testNumber = 'zero';
    }
    return testNumber.trim();
}
