import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { debounce } from 'lodash';
import CircularProgress from '@material-ui/core/CircularProgress';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import { Button } from 'components/Button';
import { Input } from 'components/Input';

import { auth } from 'services/firebase';

import { validateEmail } from 'utils/validators';

import { Container, LoginPanel } from './styles';

const RecoverPassword: React.FC = () => {
  const { t } = useTranslation(['recover_password', 'common']);
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleIsValidEmail = (value: string) => {
    setIsValidEmail(validateEmail(value));
  };

  const delayedHandleValidateEmail = debounce(handleIsValidEmail, 800);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      handleIsValidEmail(email);
      const sendToLogin = async () => {
        setIsLoading(true);
        try {
          await auth.sendPasswordResetEmail(email);
          toast.success(t('success_recovery_email_send'));
          history.push('/');
        } catch (error) {
          if (error.code === 'auth/user-not-found') {
            toast.error(t(error.code));
          } else {
            toast.error(t('common:generic_error'));
          }
        } finally {
          setIsLoading(false);
        }
      };
      sendToLogin();
    },
    [email],
  );

  const handleOnChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    delayedHandleValidateEmail(e.target.value);
  }, []);

  const isDisabledSubmitButton = useMemo(() => {
    return isLoading || !isValidEmail || !email.length;
  }, [isLoading, isValidEmail, email]);

  return (
    <Container>
      <LoginPanel className="fadeIn">
        <form onSubmit={handleSubmit}>
          <h2>{t('title')}</h2>
          <span>{t('recover_instructions')}</span>
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
          <Button
            type="submit"
            disabled={isDisabledSubmitButton}
            tabIndex={isDisabledSubmitButton ? -1 : undefined}
          >
            {isLoading ? <CircularProgress /> : t('submit')}
          </Button>
        </form>
      </LoginPanel>
    </Container>
  );
};

export default RecoverPassword;
