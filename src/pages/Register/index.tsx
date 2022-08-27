import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { debounce } from 'lodash';
import CircularProgress from '@material-ui/core/CircularProgress';
import { toast } from 'react-toastify';

import { Button } from 'components/Button';
import { Input } from 'components/Input';

import { auth } from 'services/firebase';

import { validateEmail, validatePassword } from 'utils/validators';

import { Container, LoginPanel } from './styles';

const Register: React.FC = () => {
  const { t } = useTranslation(['register', 'common']);
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);

  const handleIsValidEmail = (value: string) => {
    setIsValidEmail(validateEmail(value));
  };

  const handleIsValidPassword = (value: string) => {
    setIsValidPassword(validatePassword(value));
  };

  const handleIsValidConfirmPassword = (value: string, currentPassword: string) => {
    setIsValidConfirmPassword(value === currentPassword);
  };

  const delayedHandleValidateEmail = debounce(handleIsValidEmail, 800);
  const delayedHandleValidatePassword = debounce(handleIsValidPassword, 800);
  const delayedHandleValidateConfirmPassword = debounce(handleIsValidConfirmPassword, 800);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      handleIsValidEmail(email);
      handleIsValidPassword(password);
      handleIsValidConfirmPassword(confirmPassword, password);
      if (password !== confirmPassword) return;
      const sendToLogin = async () => {
        setIsLoading(true);
        try {
          await auth.createUserWithEmailAndPassword(email, password);
          toast.success(t('common:created_user'));
          history.push('/');
        } catch (error) {
          toast.error(t('common:generic_error'));
        } finally {
          setIsLoading(false);
        }
      };
      sendToLogin();
    },
    [email, password, confirmPassword],
  );

  const handleOnChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    delayedHandleValidateEmail(e.target.value);
  }, []);

  const handleOnChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    delayedHandleValidatePassword(e.target.value);
  }, []);

  const handleOnChangeConfirmPassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  }, []);

  useEffect(() => {
    delayedHandleValidateConfirmPassword(confirmPassword, password);
  }, [confirmPassword, password]);

  const isDisabledSubmitButton = useMemo(() => {
    return (
      isLoading ||
      !isValidEmail ||
      !isValidPassword ||
      !isValidConfirmPassword ||
      !password.length ||
      !confirmPassword.length ||
      !email.length
    );
  }, [
    isLoading,
    isValidEmail,
    isValidPassword,
    isValidConfirmPassword,
    password,
    confirmPassword,
    email,
  ]);

  return (
    <Container>
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
          <span>{t('password_instructions')}</span>
          <Input
            id="inp_password"
            type="password"
            inputMode="text"
            label={t('password')}
            onChange={handleOnChangePassword}
            isInvalid={!isValidPassword}
            errorMessage={t('invalid_password')}
          />
          <Input
            id="inp_confirm_password"
            type="password"
            inputMode="text"
            label={t('confirm_password')}
            onChange={handleOnChangeConfirmPassword}
            isInvalid={!isValidConfirmPassword}
            errorMessage={t('invalid_confirm_password')}
          />
          <Button
            type="submit"
            disabled={isDisabledSubmitButton}
            tabIndex={isDisabledSubmitButton ? -1 : undefined}
          >
            {isLoading ? <CircularProgress /> : t('submit')}
          </Button>
          {t('not_registered')} <Link to="/login">{t('sign_in')}</Link>
        </form>
      </LoginPanel>
    </Container>
  );
};

export default Register;
