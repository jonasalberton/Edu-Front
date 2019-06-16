import { ListaAtividadesComponent } from './lista-atividades/lista-atividades.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnviroumentComponent } from './enviroument/enviroument.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'app', component: EnviroumentComponent,
            children: [ 
                { path: 'lista-atividades', component: ListaAtividadesComponent}
            ]
    },
    { path: '', component: LoginComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
