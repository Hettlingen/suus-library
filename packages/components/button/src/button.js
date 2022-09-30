const template = document.createElement('template');

template.innerHTML = `
  <style>
  
  </style>

  <div class="container">
    <button id="idButton">
        ${label}
        <suus-icon iconType="car"></suus-icon>
    </button>
  </div>
`;

class Button extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    /**
     * Lifecycle methode: This method is called when the custom element gets mounted on the DOM
     */
    connectedCallback() {
        console.log('Lifecycle methode: Custom square element added to page.');
        this.shadowRoot
            .querySelector("#idButton")
            .addEventListener("click", () => this.actionButtonClicked());
    }

    /**
     * Lifecycle methode: Invoked each time the custom element is disconnected from the document's DOM
     */
    disconnectedCallback() {
        console.log('Lifecycle methode: Custom button element removed from page.');
    }

    /**
     * Lifecycle methode: This method is called when any attribute to the custom element changes
     */
    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Lifecycle methode: Custom button element attributes changed.');
        if (name === "label") {
            this.shadowRoot.querySelector("button").innerText = this.getAttribute("label");
        }
    }

    /**
     * Lifecycle methode: ???
     */
    static get observedAttributes() {
        console.log('Lifecycle methode: Custom button element attributes to observe.');
        return ['label'];
    }

    actionButtonClicked() {
        console.info('Button clicked')
    }
}

window.customElements.define("suus-button", Button);
