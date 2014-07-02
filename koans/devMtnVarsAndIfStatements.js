describe("About variables and If Statments", function() {
  it("should create a variable called myFirstVariable and set it equal to 1", function() {
    var myFirstVariable = 1 ;
    expect(myFirstVariable).toBe(1);
  });

  it("should understand if statements", function () {
    var message = 'my first if statement';
    var answer;

    if(message === 'my frist if statement'){
      answer = 'A';
    } else if (message === 'my first if statment'){
      answer = 'B';
    } else if(message === 'my first if statement'){
      answer = 'C';
    } else {
      answer = 'D';
    }

    expect(answer).toBe('C');
  });

  it("should understand equality operators", function () {
    var answer;
    var favoriteNumber = '33';
    
    if(favoriteNumber === 33){
      answer = 'A';
    } else if(favoriteNumber == 33){
      answer = 'B';
    } else if(favoriteNumber === '33'){
      answer = 'C';
    } else {
      answer = 'D';
    }

    expect(answer).toBe('B');

    //Option 'B' gives the == equal so it does not care about where the input is a number or 
    //text values it will compare them equally. it selects the first of the two options
  });

  it("should understand equality operators, again", function () {
    var answer;
    var favoriteNumber = 50;
    
    if(favoriteNumber === '50'){
      answer = 'A';
    } else if(favoriteNumber === 40){
      answer = 'B';
    } else if(favoriteNumber = 12){
      answer = 'C';
    } else {
      answer = 'D';
    }

    expect(answer).toBe('C');

    // the single = reassigns the variable to 12
  });

  it('should understand adding strings', function(){
    var num = '3';
    expect(num + 8).toBe('38');

    //since this is a string 8 is added onto the end of it. 
  });

  it('should understand adding strings, again', function(){
    var num = '1';
    expect(num + 17).toBe('117');

    //this string also adds 17 onto the end of it making 117.
  });
});



