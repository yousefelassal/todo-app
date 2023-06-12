import AbstractPage from "./AbstractPage.js";

export default class extends AbstractPage {
    constructor(){
        super();
        this.setTitle('About');
    }

    async getHtml() {
        return `
        <div class="flex flex-col items-center justify-center h-screen">
            <h1 class="text-lg text-yellow-300">404</h1>
            <p>
                This is the 404 page
            </p>
        </div>
        `;
    }

    async getJs() {
        console.log('404');
    }
}