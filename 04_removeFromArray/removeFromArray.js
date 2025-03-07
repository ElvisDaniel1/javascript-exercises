const removeFromArray = function(array_input, ...remove) {
    array_length = array_input.length;
    
    let new_array = [];
    let count = 0;
    
    for (let i = 0; i < array_length; i++)
    {
        if (remove.includes(array_input[i])) {
            continue;
        }
        else {
            new_array.push(array_input[i]);
        }
    }
    
    return new_array;
    
};

// Do not edit below this line
module.exports = removeFromArray;
