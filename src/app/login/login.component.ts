import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get username(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }
  get password() {
    return this.loginForm.get('password') as FormControl;
  }

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

}
