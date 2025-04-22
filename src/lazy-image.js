class LazyImage extends HTMLElement {
    constructor() {
        super();
        this.observer = null;
    }

    connectedCallback() {
        this.initObserver();
    }

    initObserver() {
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.loadContent();
                        observer.unobserve(this);
                    }
                });
            });

            this.observer.observe(this);
        } else {
            this.loadContent();
        }
    }

    loadContent() {
        const template = this.querySelector('template');
        const content = template.content.cloneNode(true);
        const preloader = this.querySelector('.preloader');

        this.appendChild(content);

        const img = this.querySelector('img');
        if (img) {
            img.onload = () => {
                preloader.classList.add('opacity-0');
                setTimeout(() => preloader.remove(), 300);
            };
        }

        template.remove();
    }
}

customElements.define('lazy-image', LazyImage);