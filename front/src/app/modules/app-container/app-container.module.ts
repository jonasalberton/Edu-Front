import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppContainerComponent } from './app-container/app-container.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
    declarations: [
        AppContainerComponent,
        ToolbarComponent,
        MenuComponent
    ],
    imports: [
        MatButtonModule,
        MatIconModule,
        CommonModule
    ]
})
export class AppContainerModule {}
