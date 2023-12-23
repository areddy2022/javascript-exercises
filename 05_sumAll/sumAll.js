const sumAll = function(startNum, endNum) {
    let sum = 0;

    for(; startNum < endNum + 1; startNum++){
        sum += startNum;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
