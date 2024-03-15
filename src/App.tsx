import React from 'react';
import {Provider} from 'react-redux'
import store from './stores/store';
import Page from './components/Page';

function App() {
    return (
        <Provider store={store}>
            <Page/>
        </Provider>
    );
}

export default App;
