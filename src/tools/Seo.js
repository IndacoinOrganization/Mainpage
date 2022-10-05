
let Instance = null;

export default class {

    /**
     * For single ton
     *
     * @return this
     */
    static getInstance() {

        if (Instance == null) {
            Instance = new this;
        }

        return Instance;
    }

    /**
     * Chnage title
     *
     * @param title
     */
    changeTitle(title) {
        document.title = title;
    }

    /**
     * Chnage description
     *
     * @param description
     */
    changeDescription(description) {
        let meta = document.querySelector('meta[name="description"]');

        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute('name', 'description');
            meta.append();
            document.querySelector('head').appendChild(meta);
        }

        meta.setAttribute('content', description);
    }

    /**
     * Change canonical
     *
     * @param href
     */
    changeCanonical (href) {
        let canonical = document.querySelector('link[rel="canonical"]');

        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            canonical.append();
            document.querySelector('head').appendChild(canonical);
        }

        canonical.setAttribute('href', href);
    }
}
