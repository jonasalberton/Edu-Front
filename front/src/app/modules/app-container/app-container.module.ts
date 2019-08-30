import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { AppContainerComponent } from './app-container/app-container.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AppContainerComponent,
        ToolbarComponent,
        MenuComponent,
    ],
    imports: [
        MatButtonModule,
        MatIconModule,
        CommonModule,
        MatMenuModule,
        RouterModule
    ]
})
export class AppContainerModule {}
