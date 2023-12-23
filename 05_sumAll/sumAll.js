const sumAll = function(startNum, endNum) {
    let sum = 0;

    if(typeof startNum != "number" || typeof endNum != "number" || 
    startNum < 0 || endNum < 0){
        return "ERROR";
    }

    for(; startNum < endNum + 1; startNum++){
        sum += startNum;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
