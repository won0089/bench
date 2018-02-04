import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Snackbar from 'material-ui/Snackbar';
import * as actions from '../../actions/errorActions';


class Toaster extends React.Component {
    render() {
        return (
            <Snackbar
                open={!!this.props.message}
                message={this.props.message}
                autoHideDuration={4000}
                onRequestClose={this.props.actions.clearError}
            />
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        message: state.error.message
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Toaster);