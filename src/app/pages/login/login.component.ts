import {Component, OnInit, OnDestroy, Renderer2} from '@angular/core';
import {AppService} from '../../utils/services/app.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {ApiService} from 'src/app/app.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    public loginForm: FormGroup;
    public isAuthLoading = false;
    admin: any;
    constructor(
        private renderer: Renderer2,
        private toastr: ToastrService,
        private appService: AppService,
        private apiService: ApiService
    ) {}

    ngOnInit() {
        this.renderer.addClass(
            document.querySelector('app-root'),
            'login-page'
        );
        this.loginForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }

    async login() {
        this.apiService
            .getAdmin('62894212e7ac6ceb5081033b')
            .subscribe((data) => {
                (this.admin = data), console.log(this.admin);
            });

        /*   if (this.loginForm.valid) {
            this.isAuthLoading = true;
            await this.appService.login(this.loginForm.value);
            this.isAuthLoading = false;
        } else {
            this.toastr.error('Hello world!', 'Toastr fun!');
        } */
    }

    ngOnDestroy() {
        this.renderer.removeClass(
            document.querySelector('app-root'),
            'login-page'
        );
    }
}
