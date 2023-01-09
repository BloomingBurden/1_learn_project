'use strict';


// Попап на сайте
class Popup {
    constructor(elem) {
        this._elem = elem;
        this._popup = document.querySelector('[data-popup]');
        this.length = this._popup.children.length;
        this.elemWidth = this._popup.children[0].clientWidth;
        this.position = 0;

        this._popup.style.width = this.length * this.elemWidth + 'px';

        elem.addEventListener('click', (e) => {
            this.onClick(e);
        });
    }

    prev(e) {
        this.position += this.elemWidth;
        console.log(this._elem.querySelector('[data-action="next"]'))
        this._elem.querySelector('[data-action="next"]').disabled = false;

        if (this.position >= 0) {
            this.position = 0;
            e.target.disabled = true;
        } 

        this._popup.style.marginLeft = this.position + 'px';
    }

    next(e) {
        const finishWidthLine = -this._popup.offsetWidth + this.elemWidth;
        this.position -= this.elemWidth;
        this._elem.querySelector('[data-action="prev"]').disabled = false;

        if (this.position <= finishWidthLine) {
            this.position = finishWidthLine;
            e.target.disabled = true;
        }
        
        this._popup.style.marginLeft = this.position + 'px';
    }

    onClick(e) {
        const action = e.target.dataset.action;
        this[action](e);
    }
}

new Popup(document.querySelector('.photo__buttons'));