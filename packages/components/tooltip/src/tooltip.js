const template = document.createElement('template');

template.innerHTML = `
<!--    <link rel="stylesheet" type="text/css" href="tooltip.css">-->
  
    <style>
        .container {
            display: inline-block;
            position: relative;
            z-index: 2;
        }

        .container-tooltip {
            position: absolute;
            bottom: 125%;
            z-index: 6;
            width: 300px;
            background: white;
            box-shadow: 5px 5px 10px rgba(0,0,0,.1);
            border-radius: .5em;
            padding: 1em;
            transform: scale(0);
            transform-origin: bottom left;
            transition: transform .5s cubic-bezier(0.12, 0, 0.39, 0); /** https://easings.net/ */
        }
        
        .icon-close {
            display: none;
        }
        
        svg {
            width: 1rem;
            cursor: pointer;
        }
    </style>

    <div class="container">
        <svg id="icon-info" viewBox="0 0 174 174" class="icon-info">
          <defs>
            <clipPath id="clip-path">
              <rect id="Rechteck_148" data-name="Rechteck 148" width="174" height="174" fill="none"/>
            </clipPath>
          </defs>
          <g id="Gruppe_187" data-name="Gruppe 187" clip-path="url(#clip-path)">
            <path id="Pfad_4008" data-name="Pfad 4008" d="M78.5,43.609H95.939V61.052H78.5Zm0,34.887H95.939v52.33H78.5ZM87.217,0a87.217,87.217,0,1,0,87.217,87.217A87.249,87.249,0,0,0,87.217,0m0,156.992a69.774,69.774,0,1,1,69.774-69.774,69.867,69.867,0,0,1-69.774,69.774"/>
          </g>
        </svg>
        
        <svg id="icon-cancel" viewBox="0 0 150 150" class="icon-close">
          <defs>
            <clipPath id="clip-path">
              <rect id="Rechteck_147" data-name="Rechteck 147" width="150" height="150" fill="none"/>
            </clipPath>
          </defs>
          <g id="Gruppe_185" data-name="Gruppe 185" clip-path="url(#clip-path)">
            <path id="Pfad_4007" data-name="Pfad 4007" d="M94.27,44.926,74.877,64.319,55.484,44.926,44.926,55.484,64.319,74.877,44.926,94.27l10.558,10.558L74.877,85.435,94.27,104.828,104.828,94.27,85.435,74.877l19.393-19.393ZM74.877,0a74.877,74.877,0,1,0,74.877,74.877A74.808,74.808,0,0,0,74.877,0m0,134.779a59.9,59.9,0,1,1,59.9-59.9,59.981,59.981,0,0,1-59.9,59.9" transform="translate(0.246)"/>
          </g>
        </svg>
        
        <div class="container-tooltip">
            <slot name="message"/>
        </div>
    </div>
`;

class Tooltip extends HTMLElement {
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
        this.shadowRoot.querySelector('.icon-info').addEventListener('click', () => {
            this.tooltip(true);
        })
        this.shadowRoot.querySelector('.icon-close').addEventListener('click', () => {
            this.tooltip(false);
        })

        if (this.getAttribute('background-color')) {
            this.shadowRoot.querySelector('.container-tooltip').style.background = this.getAttribute('background-color');
        }
        if (this.getAttribute('font-color')) {
            this.shadowRoot.querySelector('.container-tooltip').style.color = this.getAttribute('font-color');
        }
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
        console.log('Lifecycle methode: Custom button element attributes to observe.');
    }

    tooltip(visible) {
        const tooltip = this.shadowRoot.querySelector('.container-tooltip');
        const iconInfo = this.shadowRoot.querySelector('.icon-info');
        const iconClose = this.shadowRoot.querySelector('.icon-close');

        if (visible == true) {
            tooltip.style.transform = 'scale(1)';
            iconInfo.style.display = 'none';
            iconClose.style.display = 'block';
        } else {
            tooltip.style.transform = 'scale(0)';
            iconInfo.style.display = 'block';
            iconClose.style.display = 'none';
        }
    }
}

window.customElements.define("suus-tooltip", Tooltip);
