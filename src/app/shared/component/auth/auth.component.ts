import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from "primeng/button";
import { ValidationMessageComponent } from '../validation-message/validation-message.component';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, ValidationMessageComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  @Output() cancelEmitter = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
    private ref: DynamicDialogRef
  ) { }

  fg: FormGroup = this.formBuilder.group({
    email: this.formBuilder.control(
      '',
      [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]
    )
  })

  get emailForm() {
    return this.fg.controls['email'] as FormControl
  }

  submitEmail() {
    if (!this.fg.valid) {
    } else {
      let auth = 'abc'
      localStorage.setItem('auth', auth)
      this.ref.close(auth)
    }
  }
  cancel() {
    this.ref.close()
  }

}
