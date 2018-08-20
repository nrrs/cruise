import { connect } from 'react-redux';
import ListItem from './listItem';
import {addPin, removePin} from '../../actions/pinActions';
import {removePost, addPost} from '../../actions/postActions';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
    addPin: pin => dispatch(addPin(pin)),
    removePin: pin => dispatch(removePin(pin)),
    addPost: post => dispatch(addPost(post)),
    removePost: post => dispatch(removePost(post))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListItem);