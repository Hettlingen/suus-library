const template = document.createElement('template');

template.innerHTML = `
<!--    <style>-->
<!--        @import "/css/components/card.css";-->
<!--    </style>-->
  
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
            color: darkorange;
        }
    </style>

    <div class="container">
        <svg id="icon-info" viewBox="0 0 50 50" class="icon-info">
          <g id="Ellipse_52" data-name="Ellipse 52" stroke="currentColor" stroke-width="1">
            <circle cx="25" cy="25" r="25" stroke="none"/>
            <circle cx="25" cy="25" r="24.5" fill="currentColor"/>
          </g>
          <g id="Rechteck_161" data-name="Rechteck 161" transform="translate(21 20.742)" fill="#fff" stroke="#fff" stroke-width="1">
            <rect width="8" height="20" stroke="none"/>
            <rect x="0.5" y="0.5" width="7" height="19" fill="none"/>
          </g>
          <g id="Rechteck_162" data-name="Rechteck 162" transform="translate(21 9.258)" fill="#fff" stroke="#fff" stroke-width="1">
            <rect width="8" height="8" stroke="none"/>
            <rect x="0.5" y="0.5" width="7" height="7" fill="none"/>
          </g>
        </svg>
        
        <svg id="icon-close" viewBox="0 0 50 50" class="icon-close">
          <g id="Ellipse_52" data-name="Ellipse 52" stroke="currentColor" stroke-width="1">
            <circle cx="25" cy="25" r="25" stroke="none"/>
            <circle cx="25" cy="25" r="24.5" fill="currentColor"/>
          </g>
          <g id="Pfad_4014" data-name="Pfad 4014" transform="translate(33.963 11.359) rotate(45)" fill="#fff">
            <path d="M -0.05643713474273682 30.92506980895996 L 0.4912384748458862 0.491237998008728 L 7.349330425262451 0.3678223788738251 L 6.801654815673828 30.80165481567383 L -0.05643713474273682 30.92506980895996 Z" stroke="none"/>
            <path d="M 6.840084552764893 0.8770675659179688 L 0.9824800491333008 0.9824790954589844 L 0.4528088569641113 30.41582489013672 L 6.310413360595703 30.3104133605957 L 6.840084552764893 0.8770675659179688 M 7.858576774597168 -0.1414241790771484 L 7.292896747589111 31.29289627075195 L -0.5656833648681641 31.43431663513184 L -3.337860107421875e-06 -3.814697265625e-06 L 7.858576774597168 -0.1414241790771484 Z" stroke="none" fill="#fff"/>
          </g>
          <g id="Pfad_4015" data-name="Pfad 4015" transform="translate(11.336 16.816) rotate(-45)" fill="#fff">
            <path d="M 7.915015697479248 31.06649208068848 L 1.056923747062683 30.94307708740234 L 0.5092481374740601 0.5092446804046631 L 7.367340087890625 0.6326602697372437 L 7.915015697479248 31.06649208068848 Z" stroke="none"/>
            <path d="M 1.018494129180908 1.018489837646484 L 1.548165321350098 30.45183563232422 L 7.405769824981689 30.55724716186523 L 6.8760986328125 1.1239013671875 L 1.018494129180908 1.018489837646484 M 1.9073486328125e-06 -1.9073486328125e-06 L 7.858582019805908 0.14141845703125 L 8.424262046813965 31.57573890686035 L 0.5656819343566895 31.43431854248047 L 1.9073486328125e-06 -1.9073486328125e-06 Z" stroke="none" fill="#fff"/>
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
