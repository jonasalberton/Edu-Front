import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';

@NgModule({
    declarations: [
        ToolbarComponent,
        MenuPrincipalComponent,
    ],
    imports: [
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        FormsModule,
    ],
    exports: [
        ToolbarComponent,
        MenuPrincipalComponent,
    ],
    providers: [
    ],
    bootstrap: [ToolbarComponent]
})
export class AreaDeTrabalhoModule { }
