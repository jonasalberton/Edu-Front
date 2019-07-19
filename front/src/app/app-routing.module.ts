import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/area-de=trabalho/login/login.component';
import { EnviroumentComponent } from './modules/enviroument/enviroument.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'app', component: EnviroumentComponent,
        
    },
    { path: '', component: LoginComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
