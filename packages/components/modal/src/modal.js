const modalTemplate = document.createElement('template');
modalTemplate.innerHTML = `
  <link rel="stylesheet" href="modal.css">
  
  <div class="modal">
  <div class='modal-content'>
  <button id='close' class='close'>Close</button>
  <img></img>
  <h3></h3>
  <p></p>
  </div>
  </div>
`;

class Modal extends HTMLElement {

    static get observedAttributes() {
        return ['key'];
    }

    constructor() {
        super();
        this.showInfo = false;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(modalTemplate.content.cloneNode(true));
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#close').addEventListener('click', () => {this.remove()});
    }

    /**
     * Lifecycle methode: This method is called when the custom element gets mounted on the DOM
     */
    connectedCallback() {
        console.log('Lifecycle methode: Custom square element added to page.');
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
    }

    /**
     * Lifecycle methode: ???
     */
    static get observedAttributes() {
        console.log('Lifecycle methode: Attributes to observe.');
        // return ['label'];
    }
}

window.customElements.define('suus-modal', Modal);
