describe('factorial', function() {

  it('should multiply a number by all posative integers less than it.', function() {
    factorial(5).should.equal(120);
  });

  it('should return 1 if 0 is entered', function() {
    factorial(0).should.equal(1);
  })
});
