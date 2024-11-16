const repeatString = function(message, n) {
    let newMessage = "";

    if (n < 0)
        return "ERROR"; 

    for(let i = 0; i < n; i++)
    {
        newMessage += message;
    }
   
    return newMessage;

};

// Do not edit below this line
module.exports = repeatString;
