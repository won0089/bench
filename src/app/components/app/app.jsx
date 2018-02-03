import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div> React + Redux Boilerplate </div>
        );
    }
}

export default connect()(App);