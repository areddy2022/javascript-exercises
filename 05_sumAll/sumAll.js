const sumAll = function (startNum, endNum) {
    if (typeof startNum != "number" || typeof endNum != "number" ||
        startNum < 0 || endNum < 0) {
        return "ERROR";
    }

    let sum = 0;
    if (startNum > endNum) {
        let correctedStartNum = endNum;
        endNum = startNum;
        startNum = correctedStartNum;
    }

    for (; startNum < endNum + 1; startNum++) {
        sum += startNum;
    }

    return sum;
};

console.log(sumAll(1, 4))

// Do not edit below this line
module.exports = sumAll;