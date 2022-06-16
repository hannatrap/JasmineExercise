
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 10, 
    rate: 4.5,
  }
  expect(calculateMonthlyPayment(values)).toEqual('103.64');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10000,
    years: 18, 
    rate: 4.8,
  }
  expect(calculateMonthlyPayment(values)).toEqual('69.23');
});

it("should return NaN if any input left blank", function() {
  const values = {
    amount: 10000,
    years: 10,
    rate: "",
  }
  expect(calculateMonthlyPayment(values)).toEqual('NaN');
})
/// etc
