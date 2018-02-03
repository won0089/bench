import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div> Bench test </div>
        );
    }
}

export default connect()(App);