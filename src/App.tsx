import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { ToastContainer } from 'react-toastify';

import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import RecoverPassword from 'pages/RecoverPassword';

import { AuthProvider } from 'context/AuthContext';

import { auth } from 'services/firebase';

import i18n from './i18n';

import GlobalStyle from './styles/global';
import theme from './styles/theme/main';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      {auth && (
        <AuthProvider>
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
                  <Route path="/login" exact component={Login} />
                  <Route path="/register" exact component={Register} />
                  <Route path="/recover-password" exact component={RecoverPassword} />
                  <Redirect to="/" />
                </Switch>
              </Router>
            </ThemeProvider>
          </I18nextProvider>
        </AuthProvider>
      )}
    </>
  );
}

export default App;
