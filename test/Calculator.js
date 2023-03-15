const chai = require("chai");
const expect = chai.expect;
const asserttype = require('chai-asserttype');
chai.use(asserttype);



//load calculator code
var Calculator = require("../Calculator");
var calc = new Calculator();

describe("Calculator Tests",function(){
 
  it("add: Adds 1 and 2",function(){
    expect(calc.add(1,2)).to.be.equal(3);
  });

  it("add: Allows one parameter",function(){
   expect(calc.add(1)).to.be.equal(1);
 });

  it("add: Turns strings to zeros",function(){
   expect(calc.add("frog","toad")).to.be.number();
 });

  it("add: Allows one parameter",function(){
   expect(calc.add()).to.be.equal(0);
 });

    it("subtract: Six minus Three",function(){
      expect(calc.subtract(6,3)).to.be.equal(3);
  });
  
    it("multiply: Three times seven",function(){
      expect(calc.multiply(3,7)).to.be.equal(21);
  });

    it("divide: Four divided by two",function(){
      expect(calc.divide(4,2)).to.be.equal(2);
  });
  
});
