import { combineLatest as observableCombineLatest, Observable } from 'rxjs';
import { Directive, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { FileUploaded } from '../models/file-uploaded.model';


@Directive({
    selector: '[FileUploader]'
})
export class PdFileUploaderDirective implements OnInit {
    @Input() accept: string;
    @Output() whenUploaded: EventEmitter<any> = new EventEmitter<any>();
    input = (document.createElement('input'));

    constructor(public elementRef: ElementRef,
        public renderer: Renderer2) {
        renderer.listen(elementRef.nativeElement, 'click', (event) => {
            this.input.click();
            event.stopPropagation();
        });
    }

    ngOnInit() {
        this.defineInputProperties();
    }

    defineInputProperties() {
        this.input.type = 'file';
        this.input.accept = this.accept;
        this.input.multiple = false;
        this.input.onchange = (event) => {
            this.getFilesRead(event).subscribe((arrayOfFile) => {
                this.whenUploaded.emit(arrayOfFile);
                this.input.value = '';
            });
        };
    }

    readFile(file: File): Observable<Uint8Array> {
        return new Observable<any>((observer) => {
            let fileReader = new FileReader();
            fileReader.onload = function () {
                const typedArray = new Uint8Array(<ArrayBuffer>this.result);
                observer.next(typedArray);
            };
            fileReader.readAsArrayBuffer(file);
        });
    }


    getFilesRead(event): Observable<any> {
        let filesRead: FileUploaded[] = [];
        return new Observable<any>((observer) => {
            let filesObservable = [];

            Array.from(event.target.files).forEach((file: File) => {
                filesObservable.push(new Observable<any>((fileObserver) => {

                    this.readFile(file).subscribe((typedArray: Uint8Array) => {
                        let fileUploaded: FileUploaded = {
                            name: file['name'],
                            type: file['type'],
                            bytesSize: file['size'],
                            content: typedArray,
                        };
                        fileObserver.next(fileUploaded);
                    });
                })
                );
            });

            observableCombineLatest(filesObservable).subscribe(files => {
                files.forEach((file: FileUploaded) => {
                    filesRead.push(file);
                });
                observer.next(this.returnArrayOfFilesOrSingleFile(filesRead));
            });
        });
    }

    returnArrayOfFilesOrSingleFile(filesRead) {
        return filesRead;
    }
}
