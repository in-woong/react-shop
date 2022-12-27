import React from 'react';
import tw from 'tailwind-styled-components';
import SEOTag from '../components/SEOTag';
import LoginFormContainer from '../containers/Login/LoginFormContainer';
import SSOLoginContainer from '../containers/Login/SsoLoginContainer';

const LoginSection = tw.section`
  min-h-screen flex items-center justify-center bg-white dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8
  `;
const LoginTitle = tw.h2`
  mt-6 text-center text-3xl text-black dark:text-white font-extrabold
  `;

const Login = () => {
  return (
    <LoginSection>
      <SEOTag title="Login" />
      <div className="w-full max-w-md space-y-8">
        <LoginTitle>WELCOME TO REACT SHOP</LoginTitle>
        <LoginFormContainer />
        <SSOLoginContainer />
      </div>
    </LoginSection>
  );
};

export default React.memo(Login);
