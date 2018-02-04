import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Snackbar from 'material-ui/Snackbar';
import * as errorActions from '../../actions/errorActions';
import * as transactionActions from '../../actions/transactionActions';


class Toaster extends React.Component {
    render() {
        return (
            <Snackbar
                open={!!this.props.message}
                message={this.props.message}
                autoHideDuration={4000}
                onRequestClose={this.props.errorActions.clearError}
                action="retry"
                onActionClick={this.handleOnActionClick()}
            />
        );
    }

    handleOnActionClick() {
        return () => {
            this.props.errorActions.clearError();
            this.props.transactionActions.refreshTransactions();
        };
    }
}

function mapStateToProps(state, ownProps) {
    return {
        message: state.error.message
    };
}

function mapDispatchToProps(dispatch) {
    return {
        errorActions: bindActionCreators(errorActions, dispatch),
        transactionActions: bindActionCreators(transactionActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Toaster);