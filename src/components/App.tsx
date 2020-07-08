import * as React from 'react';

import PageInterface from './PageInterface';

class App extends React.Component<PageInterface, {}> {
    render() {
        return (
            <div>
                <h1>Welcome to React with Typescript</h1>
                <p>
                    The color of this page is:{' '}
                    <span
                        style={{
                            color: this.props.color
                                ? this.props.color
                                : '#000000',
                        }}
                    >
                        {this.props.color}
                    </span>
                </p>
            </div>
        );
    }
}

export default App;
