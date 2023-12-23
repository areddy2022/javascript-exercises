const removeFromArray = function(arr, arg1) {
    ansArr = [];
    for(index in arr){
        if(arr[index] !== arg1){
            ansArr.push(arr[index]);
        }
    }
    return ansArr;
};

// Do not edit below this line
module.exports = removeFromArray;
