import AbstractPage from "./AbstractPage.js";

export default class extends AbstractPage {
    constructor(){
        super();
        this.setTitle('Team');
    }

    async getHtml() {
        return `
        
        `;
    }

    async getJs() {
        console.log('Team');
    }
}