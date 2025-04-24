import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)},
    {path: 'create', loadComponent: () => import('./components/create-task/create-task.component').then(m => m.CreateTaskComponent)},
];
