import React, { useState,useContext,useRef } from 'react';
import { FormEvent, ChangeEvent } from 'react';
import style from './Sign-in-page.module.css';

import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import { AppRoute } from '../../constants/constants';
import Logo from '../../components/logo/logo';
import { Button, Col, Container, Form, Navbar } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { auth } from "../../firebaseSetup";
import Footer from '../../components/footer/footer';
import { PASSWORD_REGEXP, ServerResponseStatusCode } from '../../constants/constants';
import { getError } from '../../store/ui-process/selectors';
import { sign } from 'crypto';

function SignInPage(): JSX.Element {
  const user = useContext(AuthContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const error = useAppSelector(getError);
  const createAccount = async () => {
    try {
      await auth.createUserWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = async (event) => {
    event.preventDefault()
    try {
      await auth.signInWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
      dispatch(loginAction({
        email: emailRef.current!.value ,
        password:passwordRef.current!.value,
      }));
      navigate(AppRoute.Root);
    }
    
    catch (error) {
      navigate("/login");

      console.error(error);
    }
  };

  const signOut = async () => {
    await auth.signOut();
  };


  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const emailInput = evt.currentTarget.elements[0] as HTMLInputElement | null;
    const passwordInput = evt.currentTarget.elements[1] as HTMLInputElement | null;

    if (isEmailValid && isPasswordValid) {
      onSubmit({
        email: emailInput?.value,
        password: passwordInput?.value,
      });
      navigate(AppRoute.Root);
    }
  };

  const handleChangeEmail = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.currentTarget.checkValidity()) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const handleChangePassword = (evt: ChangeEvent<HTMLInputElement>) => {
    const thisValue = evt.currentTarget.value;

    if (PASSWORD_REGEXP.test(thisValue)) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
       

          <div className="sign-in__message">
            <p className={style.message}>
              {error !== null && error.code === ServerResponseStatusCode.Forbidden && ('We can’t recognize this email <br/> and password combination. Please try again.')}

              {!isEmailValid && !isPasswordValid && ('Please enter a valid email address and a valid password')}

              {!isEmailValid && isPasswordValid && ('Please enter a valid email address')}

              {isEmailValid && !isPasswordValid && ('Please enter a valid password')}
            </p>
          </div>

          <div className="sign-in__fields">
            <div className={cn('sign-in__field', {'sign-in__field--error': !isEmailValid})}>
              <input ref={emailRef} 
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                onChange={handleChangeEmail}
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={cn('sign-in__field', {'sign-in__field--error': !isPasswordValid})}>
              <input  ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                onChange={handleChangePassword}
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
           
            <button  onClick={signIn}
              className="sign-in__btn"
            
            >
              Sign in
            </button>
          </div>
       
      </div>

      <Footer/>
    </div>
  );
}

export default SignInPage;