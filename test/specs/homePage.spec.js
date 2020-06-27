import HomePage, {headerHomePage} from "../page/HomePage";
import {menuElements} from "../page/dataWhyAsanaPage";

describe('HOME PAGE', () => {

    before('open Home Page verify title', () => {
        HomePage.openVerifyTitle();
    });

it('should have correct header', () => {
  expect(HomePage.header).toHaveText(headerHomePage);
});

    it('should have all 3 Menu links present on a page', () => {
        HomePage.menuLinksList.forEach((el, i) =>
            expect(el).toHaveText(menuElements[i], {message: 'Wrong menu links items'}));
    });



});