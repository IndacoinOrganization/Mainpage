import React, {Component} from 'react';
import  './styles.sass';
import arrowDown from '@/images/arrowDown.svg';
export default class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showButton: false,
            isOpen: false,
        };

        this.contentContainerRef = React.createRef();
        this.contentRef = React.createRef();
    }

    /**
     * Update show/unshow btn on resize
     */
    updateDimensions() {

        if (this.state.isOpen) {
            return false;
        }

        if (this.contentRef.current === null) {
            return false;
        }

        this.setState({
            showButton: this.contentContainerRef.current.clientHeight < this.contentRef.current.clientHeight
        });
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions.bind(this));
    }

    render () {
        return (
            <div className={`wrapper ${this.state.isOpen ? "open" : ''}`}>
                <span className="title">{this.props.title}</span>

                <div className="content" ref={this.contentContainerRef}>
                    <div ref={this.contentRef}>
                        {this.props.children}
                    </div>
                </div>

                {
                    this.state.showButton ?
                        <div className="absolute">
                            <div className="arrowContainer">
                                <button onClick={() => this.setState({isOpen: !this.state.isOpen})}>
                                    <img src={arrowDown} alt="arrowDown"/>
                                </button>
                            </div>
                        </div>
                        :
                        false
                }


                <div className="btnContainer">
                    <button onClick={this.props.onClick || null}>{this.props.button}</button>
                </div>
            </div>
        );
    }
}
