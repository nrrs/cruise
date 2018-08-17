import { connect } from 'react-redux';
import Pins from './pins';
import { requestPins} from '../../actions/pinActions';

const mapStateToProps = ({ pins }) => {
    return ({
        pins
    });
};

const mapDispatchToProps = dispatch => ({
    requestPins: () => dispatch(requestPins()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pins);