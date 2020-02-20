const expect = require('chai').expect;
let solution = require('../10').solution;

describe('is the function has return value', () => {
  it('should return true if the function(argument) has return value', () => {
    const example = () => console.log('false'); 
    const result = solution(example);
    expect(result).to.equal(false);
  });
  it('should return true if the function(argument) has return value', () => {
    const result = solution(() => 3);
    expect(result).to.equal(true);
  });
});