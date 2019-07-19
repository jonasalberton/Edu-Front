import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './modules/acesso/login/login.component';
import { CadastroUsuarioComponent } from './modules/acesso/cadastro-usuario/cadastro-usuario.component';
import { AppContainerComponent } from './modules/app-container/app-container/app-container.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
    {
        path: 'app',
        component: AppContainerComponent,
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
