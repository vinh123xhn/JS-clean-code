var FizzBuzz =  {
    fizzBuzz: function (number){
        var fizz = number % 3 === 0;
        var buzz = number % 5 === 0;
        if(fizz){
            return "Fizz";}
        if(buzz){
            return "Buzz";}
        if(fizz && buzz)
            return "FizzBuzz";
        return number + "";
    }
};

module.exports = FizzBuzz;