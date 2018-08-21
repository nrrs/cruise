import React, { Component } from 'react';
import autoBind from 'auto-bind';
import List from '../list/list';
import Loading from '../loading';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pins: this.props.pins,
            results: this.props.results,
            loading: true
        };
        autoBind(this);
    }

    componentWillMount() {
        const {requestAllPins, requestAllPosts} = this.props;

        Promise.all([requestAllPins(), requestAllPosts()])
            .then(() => this.setState({ loading: false}));
    }

    componentWillUnmount() {
        
    }

    render() {
        const { results, pins } = this.props;

        if (this.state.loading) return <Loading />;
        
        return ( 
            <div className='posts container'>
                <ul className="list">
                    <li>
                        <div className="fave">
                            <i class="pin fas fa-heart"></i>
                        </div>
                        <div className="item-details">
                            <span className="title"><strong>Title</strong></span>
                            <span className="author"><strong>Author</strong></span>
                            <span className="score"><strong>Score</strong></span>
                        </div>
                    </li>
                </ul>
                <List name="favorites" items={pins} />
                <List name="results" items={results} />
            </div>
        );
    }
}

export default Posts;