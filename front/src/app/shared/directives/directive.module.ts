import { NgModule } from '@angular/core';
import { FileUploaderDirective } from './file-uploader.directive';

@NgModule({
	declarations: [
        FileUploaderDirective
    ],
    exports: [
        FileUploaderDirective
    ]
})
export class DirectiveModule { }