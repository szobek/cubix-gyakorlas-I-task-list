import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'home', canActivate: [authGuard], loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)},
    {path: 'create',canActivate: [authGuard], loadComponent: () => import('./components/create-task/create-task.component').then(m => m.CreateTaskComponent)},
    {path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)},
];
