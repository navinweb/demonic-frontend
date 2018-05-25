import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Map } from 'immutable';
import { composeWithDevTools } from 'remote-redux-devtools';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'typeface-roboto';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import chernobogImage from './chernobog.jpg'

const initialState = new Map({
    title: 'Чернобог (Czorneboh, Czernebog)',
    content: 'В мифологии балтийских славян злой бог, приносящий несчастье.',
    image: chernobogImage,
});
const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools({ realtime: true })(),
);

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root'),
);
registerServiceWorker();
