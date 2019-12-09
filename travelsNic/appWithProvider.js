import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/state/store';
import App from './src/menu/components/loginNavigator';

const AppWithProvider = (props) => (
    <Provider store={store}>
        <App/>
    </Provider>
);

export default AppWithProvider;