import React, {Component} from 'react';
import './styles.sass';

export default class extends Component {
    render () {
        return (
            <div className={`ImageTitleCard ${this.props.className || ''}`}>
                <div className={'title'}>
                    <div className={'imageContainer'}>
                        <img src={this.props.image}/>
                    </div>

                    <span>
                        {this.props.title}
                    </span>
                </div>
                <div className={'content'}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
