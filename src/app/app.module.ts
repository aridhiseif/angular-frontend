import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './pages/main/main.component';
import {LoginComponent} from './pages/login/login.component';
import {HeaderComponent} from './pages/main/header/header.component';
import {FooterComponent} from './pages/main/footer/footer.component';
import {MenuSidebarComponent} from './pages/main/menu-sidebar/menu-sidebar.component';
import {BlankComponent} from './views/blank/blank.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProfileComponent} from './views/profile/profile.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterComponent} from './pages/register/register.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {ToastrModule} from 'ngx-toastr';
import {MessagesDropdownMenuComponent} from './pages/main/header/messages-dropdown-menu/messages-dropdown-menu.component';
import {NotificationsDropdownMenuComponent} from './pages/main/header/notifications-dropdown-menu/notifications-dropdown-menu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppButtonComponent} from './components/app-button/app-button.component';

import {registerLocaleData} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import {UserDropdownMenuComponent} from './pages/main/header/user-dropdown-menu/user-dropdown-menu.component';
import {ForgotPasswordComponent} from './pages/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from './pages/recover-password/recover-password.component';
import {LanguageDropdownComponent} from './pages/main/header/language-dropdown/language-dropdown.component';
import {CourseComponent} from './views/course/course.component';
import {AddcourseComponent} from './views/addcourse/addcourse.component';
import {UpdatecourseComponent} from './views/updatecourse/updatecourse.component';
import {ClientComponent} from './views/client/client.component';
import {AddclientComponent} from './views/addclient/addclient.component';
import {UpdateclientComponent} from './views/updateclient/updateclient.component';

import {AdminComponent} from './views/admin/admin.component';
import {AddadminComponent} from './views/addadmin/addadmin.component';
import {UpdateadminComponent} from './views/updateadmin/updateadmin.component';

import {FormateurComponent} from './views/formateur/formateur.component';
import {AddformateurComponent} from './views/addformateur/addformateur.component';
import {UpdateformateurComponent} from './views/updateformateur/updateformateur.component';

registerLocaleData(localeEn, 'en-EN');

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        MenuSidebarComponent,
        BlankComponent,
        ProfileComponent,
        RegisterComponent,
        DashboardComponent,
        MessagesDropdownMenuComponent,
        NotificationsDropdownMenuComponent,
        AppButtonComponent,
        UserDropdownMenuComponent,
        ForgotPasswordComponent,
        RecoverPasswordComponent,
        LanguageDropdownComponent,
        CourseComponent,
        AddcourseComponent,
        UpdatecourseComponent,
        ClientComponent,
        AddclientComponent,
        UpdateclientComponent,
        AdminComponent,
        AddadminComponent,
        UpdateadminComponent,
        FormateurComponent,
        AddformateurComponent,
        UpdateformateurComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true
        }),
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
