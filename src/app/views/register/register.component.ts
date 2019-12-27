import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    public registerForm: FormGroup = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        username: new FormControl('', [
            Validators.required,
            Validators.minLength(6)
        ]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(6)
        ]),
        confirmPassword: new FormControl(''),
    });
    loading = false;
    public submitted = false;
    returnUrl: string;
    error = '';


  constructor(
      private readonly formBuilder: FormBuilder,
      private readonly route: ActivatedRoute,
      private readonly router: Router,
      private readonly authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  // convenience getter for easy access to form fields
  get formData() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.password.value !== this.confirmPassword.value) {
        this.confirmPassword.setErrors({ 'passwordMismatch': true });
    }
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
    const param = {
        username: this.formData.username.value,
        password: this.formData.password.value,
        firstName: this.formData.firstName.value,
        email: this.formData.email.value,
        lastName: this.formData.lastName.value,
    };
    this.authenticationService.register(param)
    .pipe(first())
    .subscribe( (data) => {
        this.router.navigate([this.returnUrl]);
    },
    (error) => {
        this.error = error;
        this.loading = false;
    });
  }

  public get firstName() {
      return this.registerForm.get('firstName');
  }

  public get username() {
      return this.registerForm.get('username');
  }

  public get password() {
      return this.registerForm.get('password');
  }

  public get email() {
      return this.registerForm.get('email');
  }

  public get lastName() {
      return this.registerForm.get('lastName');
  }

  public get confirmPassword() {
      return this.registerForm.get('confirmPassword');
  }

}
