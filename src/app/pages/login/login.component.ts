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
        console.log(this.loginForm.value);
        await this.apiService.login(this.loginForm.value).subscribe((val) => {
            if (val == []) {
                location.replace('/login');
            } else {
                console.log(val[0]);
                localStorage.setItem('idAdmin', val[0]._id);
                localStorage.setItem('firstname', val[0].firstname);
                localStorage.setItem('lastname', val[0].lastname);
                localStorage.setItem('email', val[0].email);
                localStorage.setItem('status', val[0].status);
                location.replace('/');
            }
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
