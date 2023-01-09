'use strict';


// Попап на сайте
class Carousel {
    constructor(elem) {
        this._elem = elem;
        this._carousel = document.querySelector('[data-carousel]');
        this.length = this._carousel.children.length;
        this.elemWidth = this._carousel.children[0].clientWidth;
        this.position = 0;

        this._carousel.style.width = this.length * this.elemWidth + 'px';

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

        this._carousel.style.marginLeft = this.position + 'px';
    }

    next(e) {
        const finishWidthLine = -this._carousel.offsetWidth + this.elemWidth;
        this.position -= this.elemWidth;
        this._elem.querySelector('[data-action="prev"]').disabled = false;

        if (this.position <= finishWidthLine) {
            this.position = finishWidthLine;
            e.target.disabled = true;
        }
        
        this._carousel.style.marginLeft = this.position + 'px';
    }

    onClick(e) {
        const action = e.target.dataset.action;
        this[action](e);
    }
}

new Carousel(document.querySelector('.photo__buttons'));