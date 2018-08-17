import { connect } from 'react-redux';
import Posts from './posts';
import { requestAllPosts } from '../../actions/postActions';

const mapStateToProps = ({posts}) => {
    return ({
        new: posts.new
    });
};

const mapDispatchToProps = dispatch => ({
    requestAllPosts: () => dispatch(requestAllPosts()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);