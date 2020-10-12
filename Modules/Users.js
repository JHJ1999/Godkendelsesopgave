class User{
    constructor(username,email,password,image){
        this.username = username;
        this.email = email;
        this.password = password;
        this.image = image;
    }
}

class freeUser extends User{
    constructor(username,email,password,image){
        super(username,email,password,image)
    }
}


class paymentUser extends User{
    constructor(username,email,password,image, creditcardNumber, cvc, expirationDate){
    super(username, email, password, image);
    this.creditcardNumber = creditcardNumber;
    this.cvc = cvc;
    this.expirationDate = expirationDate;
    
    }
}
