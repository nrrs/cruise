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
        const pinnedClass = (this.props.item.pinned) ? 'fas fa-heart' : 'far fa-heart';
        const addPinButton = <i className={pinnedClass} onClick={this.pin}></i>;
        const removePinButton = <i className={pinnedClass} onClick={this.unpin}></i>;

        return (this.props.item.pinned) ? removePinButton : addPinButton;
    }

    render() {
        const { item } = this.props;
        return (
            <li id={item.id}>
                {this.pinButton()}
                Title: <a href={`https://www.reddit.com/${item.permalink}`} target="_blank">{item.title}</a><br/>
                Author: {item.author}<br/>
                Score: {item.score}
            </li>
        );
    }
}

export default ListItem;