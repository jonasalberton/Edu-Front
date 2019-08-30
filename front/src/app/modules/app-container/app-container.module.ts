import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { AppContainerComponent } from './app-container/app-container.component';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
    declarations: [
        AppContainerComponent,
        ToolbarComponent
    ],
    imports: [
        MatButtonModule,
        MatIconModule
    ]
})
export class AppContainerModule {}
