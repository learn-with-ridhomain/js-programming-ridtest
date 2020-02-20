const expect = require('chai').expect;
let solution = require('../9').solution;

describe('are the type are correct', () => {
  it('should return true if the first argument type is string and the 2nd is number', () => {
    const result = solution('blabla', 2);
    expect(result).to.equal(true);
  });
  it('should return true if the first argument type is string and the 2nd is number', () => {
    const result = solution(() => 3, -3);
    expect(result).to.equal(false);
  });
  it('should return true if the first argument type is string and the 2nd is number', () => {
    const result = solution('string', '0');
    expect(result).to.equal(false);
  });
  it('should return true if the first argument type is string and the 2nd is number', () => {
    const result = solution(2, '4');
    expect(result).to.equal(false);
  });
});