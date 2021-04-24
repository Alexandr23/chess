import * as React from 'react';

import { AppRoutesEnum } from '../../components/App/routes.enum';
import { Layout } from '../../components/Layout';
import { SignInForm } from '../../modules/sign-in-form/component';
import { Link } from '../../modules/link/component';

import './style.scss';

export const SignInPage = () => (
  <Layout>
    <div className="sign-in-page">
      <SignInForm />

      <Link className="sign-in-page__link" to={AppRoutesEnum.SIGN_UP}>
        Sign up
      </Link>
    </div>
  </Layout>
);
