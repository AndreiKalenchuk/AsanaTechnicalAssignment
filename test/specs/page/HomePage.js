import Page from "./Page";
import ModalComponent from "./components/homeModal.compoments";

class HomePage extends Page {
    open(path) {
        super.open('home');
    }

    get menuLinksList() {
        return $$('button[role="menuitem"]');
    }

     get whyAsanaSubmenuLinks() {
        return $$('#navigation__dropdown-why-asana .navigation__dropdown__card-description');
    }

     get whyAsanaArrowLinks() {
        return $$('#navigation__dropdown-why-asana .navigation__dropdown__card__arrow');
    }

    get pageModals() {
        return this.whyAsanaSubmenuLinks.map((modal) => new ModalComponent(modal));
    }

    get whyAsanaSubmenuDescription() {
        return $$('#navigation__dropdown-why-asana .navigation__dropdown__card-summary');
    }
}
export default new HomePage();