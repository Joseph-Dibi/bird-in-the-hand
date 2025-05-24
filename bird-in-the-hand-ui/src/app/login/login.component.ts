import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { BirdManagementService } from '../bird-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private birdManagementService: BirdManagementService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  onSubmit(): void {
      const credentials = {
        username: this.username.value,
        password: this.password.value
      };
      this.birdManagementService.login(credentials).subscribe({
        next: (response) => {
          if(response !== null) {
            console.log(response);
            sessionStorage.setItem('username', response.username);
            this.router.navigate(['/aviary']);
          } else {
            console.log('Login failed');
            this.loginForm.setErrors({ loginFailed: true });
          }
        },
        error: (err) => {
          // handle login error
          console.log('Error');
          this.loginForm.setErrors({ loginFailed: true });
        }
      });
  }
  get username(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }
  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  /*
    Currently a reused component from the register component. GetErrorMessageFor in this component
    will eventually display messages based on attempted user logins. Both functions may eventually be 
    consolidated into a shared one when a common utility component is created as the application grows. 
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
    return '';
  }

}
