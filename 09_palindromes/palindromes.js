const palindromes = function (word) {
    let procWord = word.split("");
    for(x in procWord){
        if(procWord[x] != procWord[procWord.length - 1 - x]){
            return false;
        }
        return true;
    }
};

palindromes("racecar");

// Do not edit below this line
module.exports = palindromes;
