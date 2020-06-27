import HomePage from "./page/HomePage";
import {menuElements, titleHomePage, whyAsanaSubmenuLinksText} from "./page/dataHomePage";

describe('HOME PAGE "Why Asana? "MENU LINKS', () => {

    before('open page', () => {
        HomePage.open();
        expect(browser).toHaveTitle(titleHomePage, {message: 'Home page Wrong title'});
    });

    it('should have all 3 Menu links present on a page', () => {
        HomePage.menuLinksList.forEach((el, i) =>
            expect(el).toHaveText(menuElements[i], {message: 'Wrong menu items'}));
    });

    it('"Why Asana" menu link should have correct submenu links titles', () => {
        HomePage.menuLinksList[0].click(); // click on 'Why Asana?' menu link
        HomePage.pageModals.forEach((el, i) =>
            expect(el.title).toHaveText(whyAsanaSubmenuLinksText[i], {message: 'Wrong Submenu items title'}));
    });

    it('should have 2 arrow links', () => {
        expect(HomePage.whyAsanaArrowLinks).toHaveLength(2);
    });

    it('should have submenu descriptions number as a submenu titles number', () => {
        const numberOfDescriptions = HomePage.whyAsanaSubmenuLinks.length - HomePage.whyAsanaArrowLinks.length;
        expect(HomePage.whyAsanaSubmenuDescription).toHaveLength(numberOfDescriptions);
    });
});