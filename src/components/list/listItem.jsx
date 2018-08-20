import React, { Component} from 'react';
import autoBind from 'auto-bind';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: this.props.item
        };
        autoBind(this);
    }

    pin(e) {
        e.preventDefault();
        const pin = this.state.pin;
        pin['pinned'] = true;
        this.props.addPin(pin)
            .then(() => this.props.removePost(pin));
        console.log('pin', pin.id);
    }

    unpin(e) {
        e.preventDefault();
        const pin = this.state.pin;
        pin['pinned'] = false;
        this.props.removePin(pin)
        .then(() => this.props.addPost(pin));
        console.log('unpin', pin.id);
    }

    pinButton() {
        const pinnedClass = (this.props.item.pinned) ? 'pin fas fa-heart' : 'pin far fa-heart';
        const addPinButton = <i className={pinnedClass} onClick={this.pin}></i>;
        const removePinButton = <i className={pinnedClass} onClick={this.unpin}></i>;

        return (this.props.item.pinned) ? removePinButton : addPinButton;
    }

    render() {
        const { item } = this.props;
        const itemClass = (item.pinned === true) ? 'pin' : '';
        return (
            <li id={item.id} className={itemClass}>
                <div className="fave">
                    <span>{this.pinButton()}</span>
                </div>
                <div className="item-details">
                    <span className="title"><a href={`https://www.reddit.com/${item.permalink}`} target="_blank" title={item.title}>{item.title}</a></span>
                    <span className="author">{item.author}</span>
                    <span className="score">{item.score}</span>
                </div>
            </li>
        );
    }
}

export default ListItem;