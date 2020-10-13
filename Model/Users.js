class User{
    constructor(username,email,password,interest,match,image){
        this.username = username;
        this.email = email;
        this.password = password;
        this.interest = interest;
        this.match = match;
        this.image = image;
    }
}

class freeUser extends User{
    constructor(username,email,password,interest,match,image){
        super(username,email,password,interest,match,image)
    }
}


class paymentUser extends User{
    constructor(username,email,password,interest,match,image,creditcardNumber,cvc,expirationDate){
    super(username,email,password,interest,match,image);
    this.creditcardNumber = creditcardNumber;
    this.cvc = cvc;
    this.expirationDate = expirationDate;
    
    }
}


var freeUser1 = new freeUser ("Jacob", "Jacobhj123@gmail.com", "Arsenal123", "Fodbold", "Pige", []);

var paymentUser1= new paymentUser ("Peter", "Peterpedal@gmail.com", "Peterpedal123", "Pige", [], [], [], []);

var array = [paymentUser1, freeUser1];

exports.myUsers = [array];
