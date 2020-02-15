import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import IntlMessages from 'util/IntlMessages';
import CircularProgress from '@material-ui/core/CircularProgress';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Input, Tooltip, Icon } from 'antd';
import styled from 'styled-components';
import {
  hideMessage,
  showAuthLoader,
  userSignIn,
} from 'actions/Auth';

const InputLoginEmail = styled(Input)`
      margin-top:10px !important;
      height:50px !important;
      font-size: 15pt;
      border:none !important;
      background:#f5f5f5 !important;
      text-indent: 10px !important; 
      ::placeholder;
      ::-webkit-input-placeholder {
        font-size: 20px !important;
        line-height: 3;
        line-height: 1.5em;
      }
     
  `
  const InputLoginPassword = styled(Input)`
     
      input{
        margin-top:10px !important;
        height:50px !important;
        font-size: 15pt;
        border:none !important;
        background:#f5f5f5 !important;
        text-indent: 10px !important; 
        ::placeholder;
        ::-webkit-input-placeholder {
          font-size: 20px !important;
          line-height: 3;
          line-height: 1.5em;
        }
      }
  `

const SignIn = (props) => {

  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('demo#123');
  const [open,setOpen]=useState(false);
  const dispatch = useDispatch();
  const { loader, alertMessage, showMessage, authUser } = useSelector(({ auth }) => auth);



  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        dispatch(hideMessage());
      }, 100);
    }
    if (authUser !== null) {
      props.history.push('/');
    }
  }, [showMessage, authUser, props.history, dispatch]);

  const ButtonLogin = styled(Button)`
            padding:15px !important;
            border-radius: 10px !important;
            font-size: 14pt !important;
            font-weight: bold !important;
            font-family: Prompt, sans-0serif !important;
          `
  
  return (
    <div class="col-sm-12 login-background">
      <div class="logo">
        <img src={require("assets/images/choco-logo.svg")} alt="jambo" title="jambo" class="image-logo" />
      </div>
      <div className="col-12 col-sm-12 d-flex justify-content-center animated ">

        <div className="app-login-main-content col-sm-12 col-md-10 col-lg-9 col-xl-9 col-xxl-8 p-0">

          <div className="app-logo-content  image-login">

            <div style={{ 'text-align': 'right', color: 'white' }}>
              <h5 style={{ 'text-align': 'right', color: 'white',fontSize:'16pt' }}>Welcome to <b style={{ color: 'yellow' }}>DAAS</b> Platform</h5>
              <h2 style={{ 'text-align': 'right', color: 'white',fontSize:'24pt' }}>This Time, Let Your Data Work for You</h2>

            </div>
            <div style={{ textAlign: 'center' }}>
              <img src={require("assets/images/back-2.svg")} alt="jambo" title="jambo" style={{ width: '90%' }} />

            </div>
            <p  style={{  color: 'white' ,fontSize:'13pt', color:'rgba(255,255,255,0.7)'}}>
                Our most innovative marketing platform helps you aggregate customer's data, understand their behaviors, and ultimately communicate with personaliztion so your business could run on automation and never lose touches with your customers.
            </p>
          </div>

          <div className="app-login-content">
            <div className="app-login-header mb-4">
              <h1 className="align-center" style={{ textAlign: 'center', fontWeight: 'bold' }}>LOG IN</h1>
            </div>

            <div className="app-login-form">
              <form>
                <div className="row">
                  <label>Email</label>
                  <InputLoginEmail
                    placeholder="Your Email"
                    defaultValue={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="row mt-3">
                  <label>Password</label>
                  <InputLoginPassword
                    placeholder="********"
                    type={open?'text':'password'}
                    defaultValue={password} 
                    onChange={(event) => setPassword(event.target.value)}
                    suffix={
                      <Tooltip title="Extra information">
                         <Icon type={open?'eye':'eye-invisible'} onClick={()=>{setOpen(!open)}} style={{ fontSize: '25px', color: '#08c',marginTop:"15px",color: 'rgba(0,0,0,.45)' }}/>
                      </Tooltip>
                    }
                  />
                </div>
                <div className="row mt-3">
                  <div className="col-sm-6">
                    <FormControlLabel
                      control={
                        <Checkbox color="primary"
                          value="checkedB"
                          style={{marginLeft:'-16px'}}
                        />
                      }
                      label="Remember Me"
                    />
                  </div>
                  <div className="col-sm-6">
                    <p style={{ float: 'right', paddingTop: '10px', fontSize: "12pt", color: '#15A5DF' ,fontWeight:500}}>Forgot Your Password?</p>
                  </div>
                </div>
                <div className="row mt-5">
                  <ButtonLogin onClick={() => {
                    dispatch(showAuthLoader());
                    dispatch(userSignIn({ email, password }));
                  }} fullWidth variant="contained" className="jr-btn text-white login-btn">
                    <IntlMessages id="appModule.logIn" />
                  </ButtonLogin>
                </div>
                <div className="row mt-2">
                  <div class="vs-component vs-divider">
                    <span class="vs-divider-border after vs-divider-border-default" style={{ width: '100%', 'border-top': '2px solid rgba(0, 0, 0, 0.5)' }}></span>
                    <span class="vs-divider--text vs-divider-text-default vs-divider-background-default" style={{ background: 'transparent', 'padding-left': '10px', 'padding-right': '10px',fontWeight:'bold' }}>OR</span>
                    <span class="vs-divider-border before vs-divider-border-default" style={{ width: '100%', 'border-top': '2px solid rgba(0, 0, 0, 0.5)' }}></span>
                  </div>
                </div>
                <div className="row mt-3">
                  <ButtonLogin onClick={() => {
                    dispatch(showAuthLoader());
                    dispatch(userSignIn({ email, password }));
                  }} fullWidth variant="contained" className="jr-btn bg-white text-black">
                    <IntlMessages id="appModule.CreateAccount" />
                  </ButtonLogin>
                </div>
              </form>
            </div>
          </div>

        </div>
        {
          loader &&
          <div className="loader-view">
            <CircularProgress />
          </div>
        }
        {showMessage && NotificationManager.error(alertMessage)}
        <NotificationContainer />
      </div>
      <div className="col-12 col-sm-12 d-flex justify-content-center animated " style={{padding:'40px'}}>
          <p style={{fontSize:'13pt',color:'rgba(255,255,255,0.5)'}}>
            &copy; 2019 Choco CRM. All right reserved.
          </p>
      </div>
    </div>
  );
};


export default SignIn;
