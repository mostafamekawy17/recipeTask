import { AuthResponseData, AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component } from "@angular/core";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    isError: string = null;

    constructor(private _authService: AuthService, private router: Router) { }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }

        const email = form.value.email;
        const password = form.value.password;

        let authObs: Observable<AuthResponseData>;

        this.isLoading = true;
        if (this.isLoginMode) {
            authObs = this._authService.login(email, password);
        } else {
            authObs = this._authService.signup(email, password)
        }

        //It is better than repeating it in more than one place => authObs
        authObs.subscribe(
            resData => {
                console.log(resData);
                this.isLoading = false;
                this.router.navigate(['/recipes']);
            },
            errorMessage => {
                console.log(errorMessage);
                this.isError = errorMessage;
                this.isLoading = false;
            }
        );


        form.reset();
    }

    onHandleError() {
        this.isError = null;
    }
}