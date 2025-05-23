import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get username(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }
  get password() {
    return this.loginForm.get('password') as FormControl;
  }
  get email() {
    return this.loginForm.get('email') as FormControl;
  }

  /* 
    Designed so that error messages are specific to the field throwing the information.
    Otherwise using the mat-error on each field could occasionally show the wrong error message.
    Current design shows error messages once the field are touched/dirty but later implementation may change this to onSubmit.
  */
  getErrorMessageFor(controlName: string): string {
    const control = this.loginForm.get(controlName);
    if (!control) return '';

    if (control.hasError('required')) {
      return 'You must enter a value';
    }
    if (controlName === 'username' && control.hasError('minlength')) {
      return 'Username must be at least 3 characters long';
    }
    if (controlName === 'password' && control.hasError('minlength')) {
      return 'Password must be at least 6 characters long';
    }
    if (controlName === 'password' && control.hasError('pattern')) {
      return 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }
    if (controlName === 'email' && control.hasError('email')) {
      return 'Not a valid email';
    }
    return '';
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
