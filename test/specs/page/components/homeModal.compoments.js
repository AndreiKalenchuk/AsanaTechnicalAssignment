export default class ModalComponent {
    constructor(element) {
        this.element = element;
    }

    get title() {return this.element.$('h4');}
    get description() {return this.element.$('span');}
    get href() {return this.element.getAttribute('href');}
}