import WhyAsanaPage from "../page/WhyAsanaPage";
import HomePage from "../page/HomePage";
import {whyAsanaSubmenuLinksText} from "../page/dataWhyAsanaPage";


describe('"Why Asana?" MENU LINKS', () => {

    before('open page', () => {
        HomePage.openVerifyTitle();
    });

    it('"Why Asana" menu link should have correct submenu links titles', () => {
        HomePage.menuLinksList[0].click(); // click on 'Why Asana?' menu link
        WhyAsanaPage.subMEnuLinksComponents.forEach((el, i) =>
            expect(el.title).toHaveText(whyAsanaSubmenuLinksText[i], {message: 'Wrong Submenu items title'}));
    });

    it('should have 2 arrow links', () => {
        expect(WhyAsanaPage.whyAsanaArrowLinks).toHaveLength(2);
    });

    it('should have submenu descriptions number as a submenu titles number', () => {
        const numberOfDescriptions = WhyAsanaPage.whyAsanaSubmenuLinks.length - WhyAsanaPage.whyAsanaArrowLinks.length;
        expect(WhyAsanaPage.whyAsanaSubmenuDescription).toHaveLength(numberOfDescriptions);
    });
});