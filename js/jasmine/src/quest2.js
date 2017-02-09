quest2 = function() {};
 var new_arr= [];
quest2.prototype.fizzBuzz = function(num) {
        //var rem = num % 3
        if (num%3==0 && num%5!=0)
          return 'Fizz';
        else if(num%5==0 && num%3!=0)
          return 'Buzz';
        else if (num%5==0 && num % 3==0)
          return 'Fizzbuzz'
        else 
          return num
        

}

console.log(quest2.prototype.fizzBuzz(6));
