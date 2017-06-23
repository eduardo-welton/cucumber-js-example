var lastResult = 0;

module.exports = {
    sum: function(number1,number2) {
        
        if(number1 != undefined && number2 != undefined) {
            lastResult = 0
        }

        if(number1)
        {
            lastResult += number1 ;
        }

        if(number2)
        {
            lastResult += number2;
        }
        
        return lastResult
    }
}