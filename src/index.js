module.exports = function toReadable (number) {
    if (number == 0)
        return 'zero'
    let numberString = String(number);
    let static = new Map([
        ["0", ""],
        ["1", "one"],
        ["2", "two"],
        ["3", "three"],
        ["4", "four"],
        ["5", "five"],
        ["6", "six"],
        ["7", "seven"],
        ["8", "eight"],
        ["9", "nine"],
        ["10", "ten"],
        ["11", "eleven"],
        ["12", "twelve"],
        ["13", "thirteen"],
        ["14", "fourteen"],
        ["15", "fifteen"],
        ["16", "sixteen"],
        ["17", "seventeen"],
        ["18", "eighteen"],
        ["19", "nineteen"],
    ]);

    var hundreds = 0;
    var tens = 0;
    var result = "";
    if (number <= 20) {
        console.log("static " + static.get(numberString));
        return static.get(number);
    }
    if (numberString.length == 3) {
        result += static.get(numberString[0]);
        result += " hundred ";
    }
    if (numberString.length > 1) {
        if (numberString[1] == '1') {
            result += static.get(numberString[1] + numberString[2]);
            console.log(result);
            return result;
        } else if (numberString[1] == '2'){
            console.log('here1');
            result += 'twen';
        } else if (numberString[1] == '3'){
            console.log('here1');
            result += 'thir';
        } else if (numberString[1] == '5'){
            console.log('here1');
            result += 'fif';
        } else {
            console.log('here');
            result += static.get(numberString[1]);
        }
        result += "ty ";
    }
    result += static.get(numberString[numberString.length - 1]);
    return result;
}