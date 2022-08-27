import React, { useCallback, useMemo, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AccountCircleOutlined } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { debounce } from 'lodash';
import CircularProgress from '@material-ui/core/CircularProgress';
import { toast } from 'react-toastify';

import { Button } from 'components/Button';
import { Input } from 'components/Input';

import { auth } from 'services/firebase';

import { validateEmail } from 'utils/validators';
import { Container, LoginPanel } from './styles';

const Login: React.FC = () => {
  const { t } = useTranslation(['login', 'common']);
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleIsValidEmail = (value: string) => {
    setIsValidEmail(validateEmail(value));
  };

  const handleIsValidPassword = (value: string) => {
    setIsValidPassword(value.length > 0);
  };

  const delayedHandleValidateEmail = debounce(handleIsValidEmail, 800);
  const delayedHandleValidatePassword = debounce(handleIsValidPassword, 800);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const sendToLogin = async () => {
        setIsLoading(true);
        try {
          await auth.signInWithEmailAndPassword(email, password);
          toast.info(t('common:login_success_message'));
          history.push('/');
        } catch (error) {
          toast.error(t(error.code));
        } finally {
          setIsLoading(false);
        }
      };
      sendToLogin();
    },
    [email, password],
  );

  const handleOnChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    delayedHandleValidateEmail(e.target.value);
  }, []);

  const handleOnChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    delayedHandleValidatePassword(e.target.value);
  }, []);

  const isDisabledSubmitButton = useMemo(() => {
    return isLoading || !isValidEmail || !isValidPassword;
  }, [isLoading, isValidEmail, isValidPassword]);

  return (
    <Container>
      <AccountCircleOutlined className="fadeIn header-icon" />
      <LoginPanel className="fadeIn">
        <form onSubmit={handleSubmit}>
          <h2>{t('title')}</h2>
          <Input
            id="inp_email"
            type="email"
            inputMode="email"
            placeholder="example@gmail.com"
            label={t('email')}
            onChange={handleOnChangeEmail}
            isInvalid={!isValidEmail}
            errorMessage={t('invalid_email')}
          />
          <Input
            id="inp_password"
            type="password"
            inputMode="text"
            label={t('Password')}
            onChange={handleOnChangePassword}
            isInvalid={!isValidPassword}
            errorMessage={t('invalid_password')}
          />
          <Button
            type="submit"
            disabled={isDisabledSubmitButton}
            tabIndex={isDisabledSubmitButton ? -1 : undefined}
            data-testid="test-login"
          >
            {isLoading ? <CircularProgress /> : t('submit')}
          </Button>
          {t('not_registered')} <Link to="/register">{t('sign_up')}</Link>
          <br />
          {t('forgot_your_password')} <Link to="/recover-password">{t('recover_password')}</Link>
        </form>
      </LoginPanel>
    </Container>
  );
};

export default Login;
