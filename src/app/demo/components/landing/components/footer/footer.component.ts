import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CustomerService } from 'src/app/demo/service/customer.service';

@Component({
  selector: 'app-footer',
  standalone: false,
  providers: [MessageService],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  visible = false;
  contribute = false;
  write = false;
  name!: FormControl;
  feedback!: FormControl;
  stars!: FormControl;
  enquireForm!: FormGroup;
  disableForm = false;
  feedbackData: any;
  constructor(private customerService: CustomerService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.reactiveForm();
    this.getFeedbackList(); 
  }

  getFeedbackList() {
    this.customerService.getCustomerFeedback()
    .then((resp) => {
      this.feedbackData = resp.data;
    })
  }

  reactiveForm() {
    this.stars = new FormControl(0, []);
    this.name = new FormControl('', [Validators.required]);
    this.feedback = new FormControl('', []);
    this.enquireForm = new FormGroup({
      stars: this.stars,
      name: this.name,
      feedback: this.feedback,
    });
  }

  viewTestimonials() {
    this.visible = true;
  }

  toggleContribution() {
    this.contribute = true;
  }

  submitForm() {
    this.disableForm = true;
    const data = {
      name:this.enquireForm.controls['name'].value,
      feedback:this.enquireForm.controls['feedback'].value,
      stars: this.enquireForm.controls['stars'].value,
    }
    this.customerService.postCustomerFeedback(data)
    .then(() => {
      this.clearForm();
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Details Recorded Successfully', life: 3000 });
    }).catch(() => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Unable to record details at the moment. Please try later.', life: 3000 });
    }).finally(() => {
      this.disableForm = false;
      this.write = false;
      this.getFeedbackList(); 
    })
  }

  clearForm() {
    this.enquireForm.reset();
  }
}
