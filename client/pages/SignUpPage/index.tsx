import * as React from 'react';

import { Layout } from '../../components/Layout';
import { SignUpForm } from '../../modules/sign-up-form/component';

import './style.scss';

export const SignUpPage = () => (
  <Layout>
    <div className="sign-up-page">
      <SignUpForm />
    </div>
  </Layout>
);
