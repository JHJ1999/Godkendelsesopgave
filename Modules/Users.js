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
    super(username, email, password,interest,match, image);
    this.creditcardNumber = creditcardNumber;
    this.cvc = cvc;
    this.expirationDate = expirationDate;
    
    }
}
