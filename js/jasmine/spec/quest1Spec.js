var findMinMax = require("../src/quest1").findMinMax;
( 
  function() {
  'use strict';
  
  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [3, 200] for [100,3,4,67,200]', function () {
        expect(findMinMax([100,3,4,67,200])).toEqual([3, 200]);
      });


      it('should return [12, 67] for [12,65,67,45]', function () {
        expect(findMinMax([12,65,67,45])).toEqual([12, 67]);
      });

      it('should return [12, 67] for [12,65,67,45]', function () {
        expect(findMinMax([12000,3000,5000,15000])).toEqual([5000,15000]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });
      it('should return [1] for [1,1,1,1]',function() {
        expect(findMinMax([1,1,1,1])).toEqual([1]);
      });
      it('should return [67] for [67,67,67,67,67,67,67]',function() {
        expect(findMinMax([67,67,67,67,67,67,67])).toEqual([67]);
      });
      it('should return [3] for [3,3,3]',function() {
        expect(findMinMax([3,3,3])).toEqual([3]);
      });

    });

  });

})();