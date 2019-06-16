import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
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
    ],
    exports: [
        ToolbarComponent,
        MenuPrincipalComponent
    ],
    providers: [],
    bootstrap: [ToolbarComponent]
  })
  export class AreaDeTrabalhoModule { }
  