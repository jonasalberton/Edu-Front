import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { SvgIconBuilder } from './util/svg-icon-builder';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'front';
	svgIconBuilder: SvgIconBuilder;
	constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
		this.svgIconBuilder = new SvgIconBuilder(matIconRegistry, domSanitizer);
	}
}
