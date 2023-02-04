export class PaymentDetail {
    PMId: number;
    CardOwnerName: string;
    CardNumber : string;
    ExpirationDate :string;
    CVV : string;

    constructor(  newPMId: number,newCardOwnerName: string,newCardNumber : string,newExpirationDate :string, newCVV : string){
            this.PMId = newPMId;
            this.CardOwnerName = newCardOwnerName;
            this.CardNumber = newCardNumber;
            this.ExpirationDate = newExpirationDate;
            this.CVV = newCVV;
    }
}
