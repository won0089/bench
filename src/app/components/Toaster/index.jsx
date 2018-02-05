import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Snackbar from 'material-ui/Snackbar';
import * as errorActions from '../../actions/errorActions';
import * as transactionActions from '../../actions/transactionActions';


class Toaster extends React.PureComponent {
    render() {
        // when response is 404, retry won't help so hide
        const toasterElement = this.props.errorCode === 404 ?
            <Snackbar
                open={!!this.props.message}
                message={this.props.message}
                autoHideDuration={4000}
                onRequestClose={this.props.errorActions.clearError} /> :
            <Snackbar
                open={!!this.props.message}
                message={this.props.message}
                autoHideDuration={4000}
                onRequestClose={this.props.errorActions.clearError}
                action="retry"
                onActionClick={this.handleOnActionClick()}
            />;
        return (
            <div>{toasterElement}</div>);
    }

    // retry mechanism. Clears error messages and attempts to fetch transactions
    handleOnActionClick() {
        return () => {
            this.props.errorActions.clearError();
            this.props.transactionActions.refreshTransactions();
        };
    }
}

Toaster.propTypes = {
    message: PropTypes.string,
    errorCode: PropTypes.number
}

function mapStateToProps(state, ownProps) {
    return {
        message: state.error.message,
        errorCode: state.error.code
    };
}

function mapDispatchToProps(dispatch) {
    return {
        errorActions: bindActionCreators(errorActions, dispatch),
        transactionActions: bindActionCreators(transactionActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Toaster);