class creditCard{
    constructor(cardNumber, cvc, expirationDate) {
    this.cardNumber = cardNumber
    this.cvc = cvc
    this.expirationDate = expirationDate
    } 
}
var creditCard1 = new creditCard ("1234123412341234", "123", "11/23");

var array = [creditCard1];

exports.creditCard1 = [array];
