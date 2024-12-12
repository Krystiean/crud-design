import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  campaignForm: FormGroup;
  submitted = false;
  campaignData: any;

  constructor(private fb: FormBuilder) {
    this.campaignForm = this.fb.group({
      name: ['', Validators.required],
      keywords: ['', Validators.required],
      bidAmount: [null, [Validators.required, Validators.min(0)]],
      budget: [null, [Validators.required, Validators.min(0)]],
      status: ['on', Validators.required],
      location: ['', Validators.required],
      reach: [null, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.campaignForm.valid) {
      this.submitted = true;
      this.campaignData = this.campaignForm.value;
    }
  }

  deleteCampaign() {
    this.campaignForm.reset(); 
    this.campaignData = null; 
    this.submitted = false;    
  }
}
