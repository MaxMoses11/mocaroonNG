import {Directive, HostListener, HostBinding,
    // Input,
    OnInit} from '@angular/core';

@Directive({
    selector: '[buttonBackground]'
})
export class ButtonBackgroundDirective implements OnInit {

    // @Input() buttonBackgroundDefaultBgClr: string = 'rgb(113,8,30)';
    // @Input() buttonBackgroundHoverBgClr: string = 'rgb(37, 3, 10)';
    // @Input() buttonBackgroundDefaultBgClr: string = `linear-gradient( 0deg, rgb(113,8,30) 0%, rgb(215,72,92) 100%)`;
    // @Input() buttonBackgroundHoverBgClr: string = `linear-gradient( 0deg, rgb(37, 3, 10) 0%, rgb(124, 41, 52) 100%)`;

    constructor() {
    }

    private _bgColor: string = '';
    @HostBinding('style.background-color')
    get getBgColor() {
        return this._bgColor;
    }

    private _isHover: boolean = false;
    @HostBinding('class.hover-btn')
    get getIsHover() {
        return this._isHover;
    }

    @HostListener('mouseover')
    onMouseOver() {
        // this.changeElementBackgroundColor(this.buttonBackgroundHoverBgClr);
        this._isHover = true;
    }
    @HostListener('mouseout')
    onMouseOut() {
        // this.changeElementBackgroundColor(this.buttonBackgroundDefaultBgClr);
        this._isHover = false;
    }

    ngOnInit() {
        // this.changeElementBackgroundColor(this.buttonBackgroundDefaultBgClr);
    }

    // changeElementBackgroundColor(color: string) {
    //     this._bgColor = color;
    // }
}
