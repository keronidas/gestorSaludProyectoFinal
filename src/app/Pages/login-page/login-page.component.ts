import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthDTO } from '../../Models/auth.dto';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../Services/local-storage.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  loginUser!: AuthDTO;
  loginForm: FormGroup;
  email!: FormControl;
  password!: FormControl;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,


  ) {
    this.loginUser = new AuthDTO('', '', '', '');
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  async login(): Promise<void> {


    this.router.navigateByUrl('');

  }



}