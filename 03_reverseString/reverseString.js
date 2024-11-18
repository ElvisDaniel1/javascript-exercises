const reverseString = function(message) {
    let new_message = "";
    
    msg_length = message.length - 1;

    for (let i = msg_length; i >= 0; i--)
    {
        new_message += message[i];
    }

    return new_message;
};

// Do not edit below this line
module.exports = reverseString;
