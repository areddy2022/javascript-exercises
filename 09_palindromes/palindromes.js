const palindromes = function (word) {
    let procWord = wordProcessor(word);
    for(x in procWord){
        if(procWord[x] != procWord[procWord.length - 1 - x]){
            return false;
        }
    }
    return true;
};

function wordProcessor(word){
    newword = [];
    for(each in word){
        if(word[each].toUpperCase() != word[each].toLowerCase() || !isNaN(parseInt(word[each]))){
            newword.push(word[each].toLowerCase());
        }
    }
    return newword;
}

// Do not edit below this line
module.exports = palindromes;
