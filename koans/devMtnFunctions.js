describe('About Functions', function(){
  it('should create a function returns the current year', function(){
    //Write a function called getYear that returns the current year
    var getYear = function() {
          return(2014);
        }

    expect(getYear()).toBe(2014);
  });
  it('should create a function returns the current year and saves it', function(){
    //Write a function that returns the current year. Then call that function and save the returned value
    //to a variable called currentYearVar
    var currentYear = function() {
      return 2014;
    }     
    var currentYearVar = currentYear() {

    }
    expect(currentYearVar).toBe(2014);
    
  });
  it('should create a multiply function', function(){
    //Write a function called multiply that takes in two parametrs, multiplies them together, and returns the answer

    expect(multiply(2,4)).toBe(8);
  });
})

