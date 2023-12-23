const removeFromArray = function(arr, ...args) {
    let ansArr = [];
    let indexNotContains;
    for(index in arr){
        for (argindex in args){
            if(arr[index] !== args[argindex]){
                indexNotContains = true;
            }
            else{
                indexNotContains = false;
                break;
            }
        }
        indexNotContains ? ansArr.push(arr[index]) : ansArr;
    }
    return ansArr;
};

// Do not edit below this line
module.exports = removeFromArray;
