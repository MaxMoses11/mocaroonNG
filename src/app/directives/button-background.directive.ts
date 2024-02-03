import {Directive, HostListener, HostBinding,
    Input,
    OnInit} from '@angular/core';

@Directive({
    selector: '[buttonBackground]'
})
export class ButtonBackgroundDirective implements OnInit {

    @Input() buttonBackgroundDefaultBgClr: string = `linear-gradient( 0deg, rgb(113,8,30) 0%, rgb(215,72,92) 100%)`;
    @Input() buttonBackgroundHoverBgClr: string = `linear-gradient( 0deg, rgb(37, 3, 10) 0%, rgb(124, 41, 52) 100%)`;

    constructor() {
    }

    private _bgColor: string = '';
    @HostBinding('style.background')
    get getBgColor() {
        return this._bgColor;
    }

    @HostListener('mouseover')
    onMouseOver() {
        this.changeElementBackgroundColor(this.buttonBackgroundHoverBgClr);
    }
    @HostListener('mouseout')
    onMouseOut() {
        this.changeElementBackgroundColor(this.buttonBackgroundDefaultBgClr);
    }

    ngOnInit() {
        this.changeElementBackgroundColor(this.buttonBackgroundDefaultBgClr);
    }

    changeElementBackgroundColor(color: string) {
        this._bgColor = color;
    }
}
