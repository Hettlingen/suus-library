const modalTemplate = document.createElement('template');
modalTemplate.innerHTML = `
    <style>
        dialog {
            display: grid;
            position: fixed;
            overflow: hidden;
            margin: auto;
            padding: 2rem;
            z-index: 6;
            box-shadow: 5px 5px 10px rgba(0,0,0,.1);
            border-radius: .5em;
        }
        
        dialog:not([open]) {
            display: none;
        }

        dialog[open] { 
            width: 20em; 
            background: white; 
            border: thin solid lightgray;
            margin: 5em auto;
        }
              
        /* blurs the background of the window background */
        dialog::backdrop {
            backdrop-filter: blur(25px);
        }
        
        .button-close {
            font-size: 30px;
            color: black;
            cursor: pointer;
        }
    </style>
  
    <dialog id="idDialog">
        <header>
            <span id="idButtonClose" class="button-close">&times;</span>
            <h1>Titel</h1>                    
        </header>        

        <p>Inhalt des Dialogs</p>
        
        <footer>
            <button id="idButtonCancel" value="cancel" autofocus>Cancel</button>
            <button id="idButtonConfirm" value="confirm">Confirm</button>
        </footer>
    </dialog>
`;

class Modal extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(modalTemplate.content.cloneNode(true));

        this.dialog = this.shadowRoot.getElementById("idDialog");
        this.buttonConfirm = this.shadowRoot.getElementById("idButtonConfirm");
        this.buttonCancel = this.shadowRoot.getElementById("idButtonCancel");
        this.buttonClose = this.shadowRoot.getElementById("idButtonClose");
    }

    /**
     * Lifecycle methode: This method is called when the custom element gets mounted on the DOM
     */
    connectedCallback() {
        console.log('Lifecycle methode: Custom square element added to page.');
        this.buttonConfirm.addEventListener("click", () => {
            // TODO do something
        });
        this.buttonCancel.addEventListener("click", () => {
            this.dialog.close();
        });
        this.buttonClose.addEventListener("click", () => {
            this.dialog.close();
        });
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
    attributeChangedCallback(nameAttribute, oldValue, newValue) {
        console.log('Lifecycle methode: Custom button element attributes changed.');
        switch (nameAttribute) {
            case "show": {
                newValue == 'true'
                    ? this.dialog.showModal()
                    : this.dialog.close();
                break;
            }
            default: {
                console.log("unhandled attribute change", nameAttribute, oldValue, newValue);
                break;
            }
        }
    }

    /**
     * Lifecycle methode: ???
     */
    static get observedAttributes() {
        console.log('Lifecycle methode: Attributes to observe.');
        return ['show'];
    }
}

window.customElements.define('suus-modal', Modal);
