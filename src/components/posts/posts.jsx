import React, { Component } from 'react';
import autoBind from 'auto-bind';
import List from '../list';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.new
        };
        autoBind(this);
    }

    componentWillMount() {
        this.props.requestAllPosts()
            .then(() => this.setState({
                posts: this.props.new
            }));
    }

    render() {
        const { posts } = this.state;
        return ( 
            <div className='posts container'>
                <h1>Cat Posts</h1>
                <List items={posts} />
            </div>
        );
    }
}

export default Posts;