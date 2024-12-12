// CustomFooter.js
class CustomFooter extends HTMLElement {
    constructor() {
        super();

        // Attach a shadow DOM to this element
        const shadow = this.attachShadow({ mode: "open" });

        // Add Tailwind CSS to the shadow DOM
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '../css/output.css';
        shadow.appendChild(link);

        // Create the structure for the component
        shadow.innerHTML += `
            <footer class="flex justify-between text-white text-opacity-50">
                <p class="hover:text-pink transition-all duration-250 ease-in-out">all</p>
                <p class="hover:text-pink transition-all duration-250 ease-in-out">aspects</p>
                <p class="hover:text-pink transition-all duration-250 ease-in-out">of</p>
                <p class="hover:text-pink transition-all duration-250 ease-in-out">this</p>
                <p class="hover:text-pink transition-all duration-250 ease-in-out">website</p>
                <p class="hover:text-pink transition-all duration-250 ease-in-out">were</p>
                <p class="hover:text-pink transition-all duration-250 ease-in-out">designed</p>
                <p class="hover:text-pink transition-all duration-250 ease-in-out">and</p>
                <p class="hover:text-pink transition-all duration-250 ease-in-out">implemented</p>
                <p class="hover:text-pink transition-all duration-250 ease-in-out">by</p>
                <p class="hover:text-pink transition-all duration-250 ease-in-out">aiden</p>
                <p class="hover:text-pink transition-all duration-250 ease-in-out">michael</p>
                <p class="hover:text-pink transition-all duration-250 ease-in-out">redmond</p>
                <p class="hover:text-pink transition-all duration-250 ease-in-out">(2024)</p>
                <p class="hover:text-pink transition-all duration-250 ease-in-out">.</p>
            </footer>
        `;
    }
}

// Define the custom element
customElements.define("custom-footer", CustomFooter);