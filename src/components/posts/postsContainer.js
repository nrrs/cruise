import { connect } from 'react-redux';
import Posts from './posts';
import {requestAllPins} from '../../actions/pinActions';
import {requestAllPosts} from '../../actions/postActions';

const mapStateToProps = (state) => {
    let pinsValues = Object.values(state.posts.pins),
        resultsValues = Object.values(state.posts.results);

    return ({
        pins: pinsValues,
        results: resultsValues
    });    
};

const mapDispatchToProps = dispatch => ({
    requestAllPins: () => dispatch(requestAllPins()),
    requestAllPosts: () => dispatch(requestAllPosts()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);