import React from 'react';
import { render } from 'react-dom';

import Header from './Header.js';

class App extends React.Component {
    render() {
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    { /* scaffold for the app */ }
                    <Header />
                </div>
            </div>
        )
    }
}

export default App;
