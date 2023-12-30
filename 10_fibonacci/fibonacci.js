const fibonacci = function(i) {
    i = Number(i);
    let first = 1;
    let second = 1;
    let placehold;
    let sum = 0;
    let sumarr = [0];
    if(i < 0){
        return "OOPS";
    }
    switch(i){
        case 0:
            return sumarr[0];
        case 1:
            return 1;
        case 2:
            return 1;
    }
    sumarr = [1, 1];
    for(let x = 0; x < i; x++){
        sum = first + second;
        placehold = second + first;
        second = first;
        first = placehold;
        sumarr.push(sum);
    }
    return sumarr[i - 1];
};

fibonacci("1")

// Do not edit below this line
module.exports = fibonacci;
