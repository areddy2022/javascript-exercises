const repeatString = function(string, repeatNumber) {
    if(repeatNumber < 0) {
        return "ERROR";
    }
    let repeatedString = '';
    for(let i = 0; i < repeatNumber; i++){
        repeatedString += string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
