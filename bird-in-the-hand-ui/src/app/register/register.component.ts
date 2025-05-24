import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BirdManagementService } from '../bird-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private birdManagementService: BirdManagementService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
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
      return 'Password must be at least 4 characters long';
    }
    if (controlName === 'password' && control.hasError('pattern')) {
      return 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }
    if (controlName === 'email' && control.hasError('email')) {
      return 'Not a valid email';
    }
    return '';
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    // if (!this.loginForm.valid) {
    const registration = {
      username: this.username.value,
      password: this.password.value,
      email: this.email.value,
    };
    console.log('submit');
    this.birdManagementService.register(registration).subscribe({
      next: (response) => {
        console.log(response);
        if (response !== null) {
          console.log('Worked');
          sessionStorage.setItem('username', registration.username);
          this.router.navigate(['/nest']);
        } else {
          this.loginForm.setErrors({ registrationFailed: true });
        }
      },
      error: (err) => {
        // handle login error
        console.log('Failed');
        this.loginForm.setErrors({ registrationFailed: true });
      },
    });
  }
  // }
}
