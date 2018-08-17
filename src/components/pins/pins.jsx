import React, { Component } from 'react';
import autoBind from 'auto-bind';
import List from '../list';

class Pins extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.new
        };
        autoBind(this);
    }

    componentWillMount() {
        this.props.requestPins()
            .then(() => this.setState({
                pins: this.props.pins
            }));
    }

    render() {
        const {pins} = this.state;
        return ( <
            div className = 'pins container' >
            <h1 > Fave Pins </h1>
            <List items = {pins}/> 
            </div>
        );
    }
}

export default Pins;