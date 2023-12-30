const fibonacci = function(i) {
    i = parseInt(i);
    let sumarr = [0, 1];
    if(i < 0){
        return "OOPS";
    }
    for(let x = 2; x < i + 1; x++){
        sumarr[x] = sumarr[x - 1] + sumarr[x - 2];
        console.log(sumarr[x]);
    }
    console.log(sumarr[i])
    return sumarr[i];
};

// Do not edit below this line
module.exports = fibonacci;
