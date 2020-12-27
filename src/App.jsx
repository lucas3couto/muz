import { hot } from 'react-hot-loader/root';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import config from 'config';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import GlobalStyle from 'styles/global';
import { store, persistor } from './store';
import Routes from './routes';

const history = createBrowserHistory();

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Helmet
            defer={false}
            htmlAttributes={{ lang: 'pt-br' }}
            encodeSpecialCharacters={true}
            defaultTitle={config.name}
            titleTemplate={`%s | ${config.name}`}
            titleAttributes={{ itemprop: 'name', lang: 'pt-br' }}
          />
          <BrowserRouter>
            <Routes />
            <GlobalStyle />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default hot(App);
