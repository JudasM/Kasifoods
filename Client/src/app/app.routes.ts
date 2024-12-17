import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {path: 'home',  component: HomeLayoutComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '404', component: NotFoundComponent},
    {path: '**', redirectTo: '404', pathMatch:'full'}

];
