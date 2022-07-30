module.exports = function toReadable (number) {
    const firstOrder = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const secondOrder = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const thirdOrder = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let numberStr = number.toString();
    let str = '';

    switch(numberStr.length){
        case 1:
            str = firstOrder[numberStr];
            break;
        case 2:
            if (numberStr-10 < 10) {
                str = secondOrder[numberStr-10];
            } else {
                if (numberStr.slice(-1) === '0') {
                    str = thirdOrder[numberStr.slice(0,1)-2];
                } else {
                    str = thirdOrder[numberStr.slice(0,1)-2] + ' ' + firstOrder[numberStr.slice(-1)];
                }
            }
            break;
        case 3:
            str = firstOrder[numberStr.slice(0,1)] + ' hundred';
            if (numberStr.slice(1,2) === '0' && numberStr.slice(-1) !== '0') {
                str += ' ' + firstOrder[numberStr.slice(-1)];
            } else if (numberStr.slice(1,2) === '1') {
                str += ' ' + secondOrder[numberStr.slice(1)-10];
            } else if (numberStr.slice(1,2) > 1) {
                if (numberStr.slice(-1) === '0') {
                    str += ' ' + thirdOrder[numberStr.slice(1,2)-2];
                } else {
                    str += ' ' + thirdOrder[numberStr.slice(1,2)-2] + ' ' + firstOrder[numberStr.slice(-1)];
                }
            }
            break;
    }

    return str;
}
