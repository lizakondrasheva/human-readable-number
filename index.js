module.exports = function toReadable (value) {
        value = Math.floor(value)
        let result = '';
        let ones = [
            '',
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven',
            'eight',
            'nine',
            'ten',
            'eleven',
            'twelve',
            'thirteen',
            'fourteen',
            'fifteen',
            'sixteen',
            'seventeen',
            'eighteen',
            'nineteen'
        ]
        let tens = [
            '',
            '',
            'twenty',
            'thirty',
            'forty',
            'fifty',
            'sixty',
            'seventy',
            'eighty',
            'ninety'
        ]

        let numString = value.toString()

        if (value < 0) throw new Error('Negative numbers are not supported.')

        if (value === 0) {
            result = 'zero';
        }

        //the case of 1 - 20
        if (value < 20) {
            result = ones[value]
        }

        if (numString.length === 2) {
            result = tens[Number(numString[0])] + ' ' + ones[Number(numString[1])]
        }

        //100 and more
        if (numString.length === 3) {
            if (numString[1] === '0' && numString[2] === '0')
                result = ones[Number(numString[0])] + ' hundred'
            else
                result = (
                    ones[Number(numString[0])] +
                    ' hundred and ' +
                    toReadable(+(numString[1] + numString[2]))
                )
        }

        if (numString.length === 4) {
            let end = +(numString[1] + numString[2] + numString[3])
            if (end === 0) {
                result = ones[Number(numString[0])] + ' thousand'
            }
            if (end < 100)
                result = (
                    ones[Number(numString[0])] +
                    ' thousand and ' +
                    toReadable(end)
                )
            result = (
                ones[Number(numString[0])] + ' thousand ' + toReadable(end)
            )
        }
        return result
}

