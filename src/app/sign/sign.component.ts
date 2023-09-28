import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import Validation from '../utils/validation';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {

  form: FormGroup = new FormGroup({
    nameInput: new FormControl(''),
    ageInput: new FormControl(''),
    emailInput: new FormControl(''),
    passwordInput: new FormControl(''),
    passwordConfInput: new FormControl(''),
    tycCheckbox: new FormControl(false),
    policyCheckbox: new FormControl(false),
  });
  submitted = false;

  loginForm: FormGroup = new FormGroup({
    emailLoginInput: new FormControl(''),
    passwordLoginInput: new FormControl(''),
  })
  submittedLogin = false;

  constructor(private formBuilder: FormBuilder, private _router: Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        nameInput: ['', Validators.required],
        ageInput: ['', Validators.required],
        emailInput: ['', [Validators.required, Validators.email]],
        passwordInput: ['', Validators.required],
        passwordConfInput: ['', Validators.required],
        tycCheckbox: [false, Validators.requiredTrue],
        policyCheckbox: [false, Validators.requiredTrue],
      },
      {
        validators: [Validation.match('passwordInput', 'passwordConfInput')],
      }
    );

    this.loginForm = this.formBuilder.group(
      {
        emailLoginInput: ['', [Validators.required, Validators.email]],
        passwordLoginInput: ['', Validators.required],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  get g(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
    this._router.navigateByUrl('/')
  }

  onSubmitLogin(): void {
    console.log(this.loginForm)
    this.submittedLogin = true;

    if (this.loginForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.loginForm.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
