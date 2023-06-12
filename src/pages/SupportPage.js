import AbstractPage from "./AbstractPage.js";

export default class extends AbstractPage {
    constructor(){
        super();
        this.setTitle('Support');
    }

    async getHtml() {
        return `
        <div class="flex flex-col items-center justify-center h-screen">
            <h1 class="text-lg text-yellow-300">Support</h1>
            <p>
                This is the support page
            </p>
        </div>
        `;
    }

    async getJs() {
        console.log('Support');
    }
}