import Page from "./Page";

const titleHomePage = 'Manage your team’s work, projects, & tasks online · Asana';
const headerHomePage = 'Keep your team coordinated, wherever you are';

class HomePage extends Page {

    openVerifyTitle(path) {
        super.open('home');
        expect(browser).toHaveTitle(titleHomePage, {message: 'Home page Wrong title'});
    }

    get header() {
        return $('.heading');
    }

    get menuLinksList() {
        return $$('button[role="menuitem"]');
    }
}
export default new HomePage();
export {titleHomePage, headerHomePage};