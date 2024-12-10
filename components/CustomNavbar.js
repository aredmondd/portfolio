// CustomNavbar.js
class CustomNavbar extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        // Add Tailwind CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'css/output.css';
        shadow.appendChild(link);

        shadow.innerHTML += `
            <div class="flex justify-between items-center">
                <a href="/"><img src="images/logo_regular.png" alt="" width="64"></a>
                <a href="#" class="hover:text-pink">ART</a>
                <a href="#" class="hover:text-pink">CODE</a>
                <a href="photography-index.html" class="hover:text-pink">PHOTOGRAPHY</a>
                <a href="#" class="hover:text-pink">RUNNING</a>
                <a href="#" class="hover:text-pink">'TECH'</a>
                <a href="#" class="hover:text-pink">CONTENT</a>
                <a href="#" class="hover:text-pink">CURRENT WORK</a>
                <a href="#" class="hover:text-pink">UPDATES</a>
            </div>
        `;
    }
}

customElements.define("custom-navbar", CustomNavbar);