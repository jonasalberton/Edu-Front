import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnviroumentComponent } from './modules/enviroument/enviroument.component';
import { LoginComponent } from './modules/acesso/login/login.component';
import { CadastroUsuarioComponent } from './modules/acesso/cadastro-usuario/cadastro-usuario.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'cadastro-usuario', component: CadastroUsuarioComponent},
    { path: 'app', component: EnviroumentComponent},
    { path: '', redirectTo: 'login', pathMatch: 'full'},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
