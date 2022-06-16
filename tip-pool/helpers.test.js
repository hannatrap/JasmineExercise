describe("Helpers test", function() {
  beforeEach(function() {
   billAmtInput = 100;
   tipAmntInput = 20;
   submitPaymentInfo();
  })
});

  it('should sum tip amount', function() {
    expect(sumPaymentTotal('tipAmnt')).value(20);
    
    billAmtInput = 500;
    tipAmtInput = 100;

    submitPaymentInfo();
    
    expect(sumPaymentTotal('tipAmt')).toEqual(120);
  })

  it('should sum bill amount', function() {
    expect(sumPaymentTotal('billAmnt')).value(100);
    
    billAmtInput = 500;
    tipAmtInput = 100;

    submitPaymentInfo();
    
    expect(sumPaymentTotal('billAmt')).toEqual(600);
  })


  it('should convert the bill and tip into a tip percent', function() {
    expect(sumPaymentTotal('tipAmnt')).value(20);
    
    billAmtInput.value = 100;
    tipAmtInput.value = 20;

    submitPaymentInfo();

    expect(paymentTotal('tipPercent')).value(40);
  });

it('should sum tip percent of a single transaction', function() {
  expect(calculateTipPercent(100, 20)).toEqual(20);
  expect(calculateTipPercent(100, 50)).toEqual(50);
});




