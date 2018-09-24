import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux' 
import configureStore from './store/configureStore'

import ItemList from "./components/ItemList";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ItemList/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();


// "https://api.songkick.com/api/3.0/metro_areas/12283/calendar.json?apikey=rdVTbRJce6Sz8yUJ";