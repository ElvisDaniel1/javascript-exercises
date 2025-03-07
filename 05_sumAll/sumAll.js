function verifyNum(data) {
    if (data < 0)
        return false;
    if (data % 1 != 0)
        return false;
    if (typeof data != "number")
        return false;
    return true;
}

const sumAll = function(start, end) {
    let sum = 1;

    if (end < start) {
        let temp = start;
        start = end;
        end = temp;
    }
    
    if (!verifyNum(start) || !verifyNum(end)){
        return "ERROR";
    }

    for (let i = start; i < end; i++) {
        sum += (i+1); 
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
