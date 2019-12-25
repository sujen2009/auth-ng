import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
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
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          username: ['', Validators.required],
          password: ['', Validators.required],
          confirmPassword: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  // convenience getter for easy access to form fields
  get formData() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
    const param = {
        username: this.formData.username.value,
        password: this.formData.password.value,
        firstName: this.formData.firstName.value,
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

}
