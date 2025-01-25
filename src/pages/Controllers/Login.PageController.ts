import React from 'react';
import { useAuthActions } from '../../app/actions/UseAuthActions';
import { SigninRequest } from '../../types/auth';

export function LoginPageController() {
  const [checked, setChecked] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const authEventActions = useAuthActions()
  const initialValues: SigninRequest = { email: '', password: '', submit: false}
  const handleClickShowPassword = () => { setShowPassword(!showPassword); };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => { setChecked(e.target.checked); };
  const signinHandler = async (payload: SigninRequest) => {authEventActions.signin(payload)  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => { event.preventDefault(); };

  return {
    checked,
    onChange,
    showPassword,
    initialValues,
    signinHandler,
    handleClickShowPassword,
    handleMouseDownPassword
  }
}
