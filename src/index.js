module.exports = function toReadable(number) {
    if (number == 0) return "zero";
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

    var result = "";
    if (number < 20) return static.get(String(number));
    if (numberString.length == 3) {
        result += static.get(numberString[0]);
        result += " hundred";
    }
    if (numberString.length > 1) {
        var temp = numberString.length == 2 ? numberString[0] : numberString[1];
        if (temp != "0" && numberString.length > 2) result += " ";
        if (numberString[1] == "1" && numberString.length == 3) {
            result += static.get(numberString[1] + numberString[2]);
            return result;
        } else if (temp == "2") result += "twen";
        else if (temp == "3") result += "thir";
        else if (temp == "4") result += "for";
        else if (temp == "5") result += "fif";
        else if (temp == "8") result += "eigh";
        else result += static.get(temp);
        if (numberString[1] != "0") result += "ty";
        if (numberString[1] == 0 && numberString.length == 2) result += "ty";
    }

    if (numberString[numberString.length - 1] != "0") result += " ";
    result += static.get(numberString[numberString.length - 1]);
    return result;
};
