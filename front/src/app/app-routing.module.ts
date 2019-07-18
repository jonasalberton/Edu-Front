import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/area-de=trabalho/login/login.component';
import { EnviroumentComponent } from './modules/enviroument/enviroument.component';
import { ListaAtividadesComponent } from './modules/lista-atividades/lista-atividades.component';
import { AtividadeComponent } from './modules/atividade/atividade.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'app', component: EnviroumentComponent,
            children: [ 
                { path: 'lista-atividades', component: ListaAtividadesComponent},
                { path: 'atividade', component:AtividadeComponent}
            ]
    },
    { path: '', component: LoginComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
