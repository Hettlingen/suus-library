const template = document.createElement('template');

template.innerHTML = `
  <link rel="stylesheet" href="snackbar.css">

  <div class="container">

  </div>
`;

class Snackbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    /**
     * Lifecycle methode: This method is called when the custom element gets mounted on the DOM
     */
    connectedCallback() {
        console.log('Custom square element added to page.');
    }

    /**
     * Lifecycle methode: Invoked each time the custom element is disconnected from the document's DOM
     */
    disconnectedCallback() {
        console.log('Custom button element removed from page.');
    }

    /**
     * Lifecycle methode: This method is called when any attribute to the custom element changes
     */
    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Custom button element attributes changed.');
    }

    /**
     * Lifecycle methode: ???
     */
    static get observedAttributes() {
        console.log('Lifecycle methode: Attributes to observe.');
        // return ['label'];
    }
}

window.customElements.define("suus-snackbar", Snackbar);
