import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './modules/acesso/login/login.component';
import { CadastroUsuarioComponent } from './modules/acesso/cadastro-usuario/cadastro-usuario.component';
import { AppContainerComponent } from './modules/app-container/app-container/app-container.component';
import { AuthGuard } from './core/security/auth.guard';
import { ConfiguracoesComponent } from './modules/usuario/configuracoes/configuracoes.component';
import { ListaAtividadesComponent } from './modules/atividade/lista-atividades/lista-atividades.component';
import { AtividadeComponent } from './modules/atividade/atividade/atividade.component';
import { ListaCertificadosComponent } from './modules/atividade/lista-certificados/lista-certificados.component';
import { MinhasAtividadesComponent } from './modules/atividade/minhas-atividades/minhas-atividades.component';
import { ListaSolicitacoesComponent } from './modules/atividade/lista-solicitacoes/lista-solicitacoes.component';
import { AuthGuardAdmin } from './core/security/auth-admin.guard';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
    {
        path: 'app',
        canActivate: [AuthGuard],
        component: AppContainerComponent,

        children: [
            {path: 'configuracoes', component: ConfiguracoesComponent, data: {titulo: 'Configurações'}},
            {path: 'lista-atividades', component: ListaAtividadesComponent, data: {titulo: 'Ativiades'}},
            {path: 'minhas-atividades', component: MinhasAtividadesComponent, data: {titulo: 'Minhas Ativiades'}},
            {path: 'atividade', component: AtividadeComponent, data: {titulo: 'Ativiade'}},
            {path: 'lista-certificados', component: ListaCertificadosComponent, data: {titulo: 'Certificados'}},
            {path: 'lista-solicitacoes',  canActivate: [AuthGuardAdmin], component: ListaSolicitacoesComponent, data: {titulo: 'Solicitacoes'}},
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
