import React from 'react';

import { auth } from '../firebase';
import { Button } from './styles';
const SignOutButton = () =>
  <Button
    type="button"
    onClick={auth.doSignOut}
  >
    Sign Out
  </Button>

export default SignOutButton;
