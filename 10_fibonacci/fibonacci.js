const fibonacci = function(n) {

    if (typeof(n) == "string")
        n = parseInt(n);
     
    function fib(n){
        if (n == 1)
            return 1;
        if (n == 0)
            return 0;
        if (n < 0)
            return 'OOPS';
        return fib(n-1) + fib(n-2);
    }

    return fib(n);
};

// Do not edit below this line
module.exports = fibonacci;
