// CustomNavbar.js
class CustomNavbar extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        // Add Tailwind CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '../css/output.css';
        shadow.appendChild(link);

        shadow.innerHTML += `
            <div class="flex justify-between items-center">
                <a href="/"><img src="../images/logo_regular.png" alt="" width="64"></a>
                <div class="flex space-x-6">
                    <a href="">left</a>
                    <a href="">right</a>
                    <a href="">more</a>
                </div>
            </div>
        `
        ;
    }
}

customElements.define("custom-navbar", CustomNavbar);