import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
    {path: 'home',  component: HomeComponent, children: [
        
            {path: '', component: NavbarComponent},
            {path: '', component: FooterComponent}
        
    ]},
    {path: 'login', component: LoginComponent},

];
