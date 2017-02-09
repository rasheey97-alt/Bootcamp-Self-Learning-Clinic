
quest1 = function() {};
 var new_arr= [];
quest1.prototype.findMinMax = function(arr) {
        var len = arr.length;
        var max,min;        
        max= Math.max.apply(null, arr) // 4
        min =Math.min.apply(null, arr) // 1
        if (min == max)
          new_arr[0]=max;
        else
        new_arr[1]= max;
        new_arr[0]= min;
        return new_arr;

}
