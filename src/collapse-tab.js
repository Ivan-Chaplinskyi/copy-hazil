if (customElements.get('collapse-tab') === undefined) {
  class CollapseTab extends HTMLElement {
    constructor() {
      super();

      this.addEventListener('click', this.toggleCollapse);
    }

    toggleCollapse() {
        this.toggleIcon();
        this.toggleContent();
    }

    toggleIcon () {
        const icon = this.querySelector('.collapse-icon');
        icon.classList.toggle('origin-center');
        icon.classList.toggle('rotate-45');
    }

    toggleContent() {
        const content = this.querySelector('.collapse-content');

        content.classList.toggle('overflow-hidden');
        content.classList.toggle('max-h-0');
        content.classList.toggle('opacity-0');
    }
  }

  customElements.define('collapse-tab', CollapseTab);
}