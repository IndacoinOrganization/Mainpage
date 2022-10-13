import React, { Component } from 'react';

// styles
import styles from "./styles.sass";

class MenuDropdown extends Component {
    constructor() {
        super();

        this.state = {
            scrollHeight: 0,
        };

        this.container = React.createRef();
        this.menu = React.createRef();

        this.menuHidden = this.menuHidden.bind(this);

        this.show = false;
        this.indexShowArrow = false;
    }

    componentDidUpdate() {
        const show = this.closeShow();
        if(show !== this.show) {
            this.show = show;
            this.eventListener(show);
            this.classAR();
        }

        this.scrollEvent();
    }

    componentWillUnmount() {
        this.eventListener();
    }

    eventListener(show) {
        if(show) {
            document.addEventListener('mousedown', this.menuHidden);
        } else {
            document.removeEventListener('mousedown', this.menuHidden);
        }
    }

    menuHidden(event) {
        const refIgnore = this.props.refIgnore;
        const isArrayRef = Array.isArray(refIgnore);
        do {
            if(i === undefined) var i = 0;
            const refItem = isArrayRef && refIgnore[i] || refIgnore;
            if(
                refItem
                && (
                    refItem.contains?.(event.target)
                    || refItem.current?.contains?.(event.target)
                )
                || this.container?.contains(event.target)
            ) {
                return undefined;
            }
        } while(isArrayRef && refIgnore.length -1 > i++);

        this.closeShow(false);
    }

    classAR() {
        this.container.classList.add(styles.scrollHidden);
        setTimeout(() => {
            this.container?.classList?.remove(styles.scrollHidden);
        },150);
    }

    selected(item, index) {
        const { selected } = this.props;
        if(typeof selected === 'function') {
            return selected(item, index);
        }
    }

    closeShow(boolean) {
        const show = this.props.visible;
        if(typeof show === 'function') {
            return show(boolean);
        }
    }

    scrollEvent() {
        const index = this.props.indexShowArrow;
        if(typeof index === 'function' && index() !== this.indexShowArrow) {
            const { scrollHeight } = this.menu;
            const { data } = this.props;
            if(scrollHeight && data) {
                this.indexShowArrow = index();
                this.container.scrollTop = this.menu.scrollHeight / this.props.data.length * index() +1;
            }
        }

        if(this.state.scrollHeight !== this.menu.scrollHeight) {
            this.setState({scrollHeight: this.menu.scrollHeight});
        }
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div
                    ref={ref => this.container = ref}
                    className={`${styles.dropdown} ${this.props.className || ''}`}
                    style={{height: this.closeShow() ? `${this.state.scrollHeight}px` : 0}}
                >
                    <menu ref={ref => this.menu = ref}>
                        {
                            this.props.items && this.props.items.map((value, index) => {
                                let localClassLi = null;
                                let renderItem = value;

                                const render = this.props.jsx;
                                if(typeof render === 'function') {
                                    const array = this.props.items;
                                    renderItem = render(value, index, array, (className) => {
                                        localClassLi = className;
                                    });
                                }

                                return (
                                    <li
                                        key={index}
                                        className={localClassLi}
                                        onClick={() => {
                                            this.selected(value, index);
                                            this.closeShow(false);
                                        }}
                                    >
                                        {renderItem}
                                    </li>
                                );
                            })
                        }
                    </menu>
                </div>
            </div>
        );
    }
}

export default MenuDropdown;