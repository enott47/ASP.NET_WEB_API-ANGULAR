import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: [],
})
export class PaymentDetailComponent implements OnInit {
  constructor(
    public service: PaymentDetailService,
    public toaStr: ToastrService
  ) {}

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();

    this.service.formData.PMId = -1;
    this.service.formData.CardOwnerName = '';
    this.service.formData.CardNumber = '';
    this.service.formData.ExpirationDate = '';
    this.service.formData.CVV = '';
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.PMId == -1)
     this.insertRecord(form);
    else
     this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail(form.value).subscribe(
      (res) => {
        this.resetForm(form);
        this.toaStr.success(
          'Submitted Successfully.',
          'Payment Detail Register'
        );
        this.service.refreshList();
      },
      (err) => {
        console.log('error');
      }
    );
  }

  updateRecord(form: NgForm) {
    console.log(form.value);
    this.service.putPaymentDetail().subscribe(
      (res) => {
        this.resetForm(form);
        this.toaStr.info('Updated Successfully.', 'Payment Detail Update');
        this.service.refreshList();
      },
      (err) => {
        console.log('error');
      }
    );
  }
}
