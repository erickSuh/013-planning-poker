import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { ToastContainer } from 'react-toastify';

import { Home, Room } from 'pages';

import i18n from './i18n';

import GlobalStyle from './styles/global';
import theme from './styles/theme/main';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <GlobalStyle />
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/room/:id" exact component={Room} />
              <Redirect to="/" />
            </Switch>
          </Router>
        </ThemeProvider>
      </I18nextProvider>
    </>
  );
}

export default App;
