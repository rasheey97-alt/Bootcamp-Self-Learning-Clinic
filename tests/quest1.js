/*
describe("MathUtils", function() {
    var calc;
 
    //This will be called before running each spec
    beforeEach(function() {
        calc = new MathUtils();
    });
 
    describe("when calc is used to peform basic math operations", function(){
         
        //Spec for sum operation
        it("should be able to calculate sum of 3 and 5", function() {
            expect(calc.sum(3,5)).toEqual(8);
        });
 
        //Spec for multiply operation
        it("should be able to multiply 10 and 40", function() {
            expect(calc.multiply(10, 40)).toEqual(400);
        });
 
        //Spec for factorial operation for positive number
        it("should be able to calculate factorial of 9", function() {
            expect(calc.factorial(9)).toEqual(362880);
        });
         
        //Spec for factorial operation for negative number
        it("should be able to throw error in factorial operation when the number is negative", function() {
            expect(function() { 
                calc.factorial(-7)
            }).toThrowError(Error);
        });
         
    });
});
*/

describe("quest1", function() {
    var calc;
 
    //This will be called before running each spec
    beforeEach(function() {
        calc = new MathUtils();
    });
/*describe ("quest1" , function() {
  'use strict';
*/

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

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

    });

  });

})();