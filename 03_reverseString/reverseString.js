const reverseString = function(string) {
    reversedString = '';
    for(let i = string.length + 1; i > -1; i--){
        reversedString += string.charAt(i);
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
