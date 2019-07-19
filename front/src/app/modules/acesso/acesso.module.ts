import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        LoginComponent,
        CadastroUsuarioComponent
    ],
    imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        FormsModule,
    ]
})
export class AcessoModule { }