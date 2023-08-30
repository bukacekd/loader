interface LoaderOptions {
	className?: string;
	content?: string;
    id?: string;
}

export class Loader {

    #element;
    #root;
    #timeoutId: ReturnType<typeof setTimeout> | undefined;
    
    static #autoOpen = true;

    static create(el: HTMLElement | string, options: LoaderOptions) {
        this.#autoOpen = false;
        const instance = new Loader(el, options);
        this.#autoOpen = true;
        return instance;
    }

	constructor(el: HTMLElement | string, options: LoaderOptions = {}) {
		this.#root = (el instanceof HTMLElement ? el : document.querySelector(el)) as HTMLElement;
        
        if (!(this.#root instanceof HTMLElement)) {
            throw TypeError('First argument must be HTMLElement');
        }

        this.#element = this.#createElement(options);

        this.#element.attachShadow({mode: 'open'}).innerHTML = `
            <style>
                :host {
                    --js4y-loader-duration: 2s;
                    --js4y-loader-size: 40px;
                    --js4y-loader-width: 10%;

                    align-items: center;
                    display: inline-flex !important;
                    flex-direction: column;
                    gap: 1em;
                    inset: 0;
                    justify-content: center;
                    opacity: 0;
                    position: ${this.#root === document.body ? 'fixed' : 'absolute'};
                    stroke: currentColor;
                    transition: opacity .2s;
                    z-index: 1;
                }

                :host([data-loader="open"]) {
                    opacity: 1;
                }               
                
                svg {
                    animation: rotate calc(var(--js4y-loader-duration) * .75) linear infinite;
                    height: var(--js4y-loader-size);
                    width: var(--js4y-loader-size);
                }

                circle {
                    animation: stroke var(--js4y-loader-duration) ease-in-out infinite;
                    cx: 50%;
                    cy: 50%;
                    fill: none;
                    r: calc((var(--js4y-loader-size) - var(--js4y-loader-width)) / 2 - 1px);
                    stroke: inherit;
                    stroke-linecap: round;
                    stroke-width: var(--js4y-loader-width);
                    transform-origin: center;
                }
                
                @keyframes rotate {
                    to {
                      transform: rotate(360deg);
                    }
                }

                @keyframes stroke {
                    0% {
                        stroke-dasharray: 0 var(--offset);
                        stroke-dashoffset: 0;
                    }
                    
                    50% {
                        stroke-dasharray: calc(var(--offset) * .7) var(--offset);
                        stroke-dashoffset: calc(var(--offset) * -.25);
                    }
                    
                    100% {
                        stroke-dasharray: calc(var(--offset) * .7) var(--offset);
                        stroke-dashoffset: calc(var(--offset) * -1);
                    }
                }
            </style>

            <svg>
                <circle></circle>
            </svg>
            
            <div>
                <slot></slot>
            </div>
        `;

        if (Loader.#autoOpen) {
            this.open();
        }
        this.#observe();
    }

    #createElement({className, content, id}: LoaderOptions) {
        const element = document.createElement('div');

        if (className) {
            element.className = className;
        }

        if (content) {
            element.innerHTML = content;
        }

        if (id) {
            element.id = id;
        }

        return element;
    }

    #resolveAnimations() {
        return Promise.all(this.#element.getAnimations().map(animation => animation.finished));
    }

    #clearTimeout() {
        clearTimeout(this.#timeoutId);
    }

    #observe() {
        const target = <SVGCircleElement>this.#element.shadowRoot!.querySelector('circle');
        
        new ResizeObserver(() => {
            if (this.#element.parentElement) {
                target.style.setProperty('--offset', Math.floor(target.getTotalLength()) + 'px')
            }
        }).observe(target);
    }

    async #wait() {
        await new Promise(requestAnimationFrame);
        await new Promise(requestAnimationFrame);
    }

    async close(delay?: number) {
        this.#clearTimeout();

        if (typeof delay === 'number' && delay > 0) {
            await new Promise(resolve => this.#timeoutId = setTimeout(resolve, delay));
        }

        await this.#wait();
        this.#element.dataset.loader = 'close';
        await this.#resolveAnimations();
        this.#element.remove();
    }

    async open(delay?: number) {
        this.#clearTimeout();

        if (typeof delay === 'number' && delay > 0) {
            await new Promise(resolve => {this.#timeoutId = setTimeout(resolve, delay)});
        }

        if (!this.#root.contains(this.#element)) {
            this.#root.prepend(this.#element);
        }

        await this.#wait();
        this.#element.dataset.loader = 'open';
        await this.#resolveAnimations();
    }
}