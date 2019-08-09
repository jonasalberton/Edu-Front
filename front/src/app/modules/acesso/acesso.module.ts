import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Auth } from 'src/app/core/security/auth.service';

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
    ],
    providers: [
        Auth
    ]
})
export class AcessoModule { }