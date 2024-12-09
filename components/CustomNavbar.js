// CustomNavbar.js
class CustomNavbar extends HTMLElement {
    constructor() {
        super();

        // Attach a shadow DOM to this element
        const shadow = this.attachShadow({ mode: "open" });

        // Add Tailwind CSS to the shadow DOM
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'css/output.css';  // Make sure the path is correct
        shadow.appendChild(link);

        // Create the structure for the component
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

// Define the custom element
customElements.define("custom-navbar", CustomNavbar);