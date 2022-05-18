import * as React from 'react';
import { withStyles, Typography, Link, Avatar, Box } from '@material-ui/core';
import * as config from '../config';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Button } from 'reactstrap';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      <Link color="inherit" href="https://acrospera.com/">
        AcroSpera
      </Link>
      {' Co.,Ltd., All Rights Reserved.'}
    </Typography>
  );
}

const styles = (theme: any) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: '100%',
    height: 40,
  },
  dangerText: {
    color: theme.palette.secondary.main,
  },
});

class Login extends React.Component<any, any> {
  // state
  state = {
    id: '',
    password: '',
    language: 'ja',
    errors: Array(),
  };

  // 読み込み後
  componentDidMount = async () => {
    window.localStorage.clear();
    document.title = 'スペイラ試験管理システム';
    window.localStorage.setItem('lang', 'ja');
  };

  // stateの変更
  handleChange = (name: any) => (event: any) => {
    if (name === 'language') {
      window.localStorage.setItem('lang', event.target.value);
    }
    this.setState({
      [name]: event.target.value,
    });
    this.handleClearError(name);
  };

  keyPress = (event: any) => {
    if (event.key === 'Enter') {
      this.handleLogin();
    }
  };

  larkLogin = async () => {
    const larkEndpoint = 'https://open.larksuite.com/open-apis/authen/v1/index';
    const redirectUri = 'https://tricky-lizard-9.loca.lt/auth';
    const appId = 'cli_a1e7186e1db8100a';
    const state = Math.floor(Math.random() * 100);
    const redirect = `${larkEndpoint}?redirect_uri=${redirectUri}&app_id=${appId}&state=${state}`;
    window.open(redirect, `height=${screen.availHeight},width=${screen.availWidth}`);
  };

  // 認証処理
  handleLogin = async () => {
    const { system, history } = this.props;
    try {
      await system.actEnableLoading();
      const res = await system.actLogin(this.state.id, this.state.password);
      this.setState({ errors: res.errors });
      if (!res.error) {
        if (res.json.isChanged === 0) {
          history.push(config.ROUTE.CHANGE_PASSWORD);
        } else {
          history.push(config.ROUTE.SELECT_EXAM);
        }
      } else {
        await system.actSetMessage(res.message, 'error');
        await system.actEnableMessage();
      }
      await system.actDisableLoading();
    } catch (err) {
      // API接続障害
      // console.log(err);
      await system.actSetMessage(config.SYSTEM_MSG[404], 'error');
      await system.actEnableMessage();
      await system.actDisableLoading();
    }
  };

  // 入力エラー判定
  handleIsError = (name: string) => {
    let result = false;
    this.state.errors.map((err: any) => {
      if (name === err.field) result = true;
    });
    return result;
  };

  // 入力エラーメッセージ
  handleFieldError = (name: string) => {
    let message = '';
    this.state.errors.map((err: any) => {
      if (name === err.field) message = err.message;
    });
    return message;
  };

  // 入力エラー消去
  handleClearError = (name: string) => {
    const newError = Array();
    this.state.errors.map((err: any) => {
      if (name !== err.field) newError.push(err);
    });
    this.setState({ errors: newError });
  };

  getLanguage = () => {
    const selVal: any[] = [
      { kbn: 'ja', value: '日本語' },
      { kbn: 'en', value: 'English' },
    ];
    return selVal;
  };

  // レンダリング
  render() {
    const { classes } = this.props;
    return (
      <div className="login-center" style={{ marginTop: 100 }}>
        <CssBaseline />
        <div className="div-login-inner">
          <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', marginTop: 15 }}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <h3 style={{ textAlign: 'center', marginTop: 0 }}>LARKログイン</h3>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Button className={classes.submit} variant="contained" color="success" onClick={() => this.larkLogin()}>
              <PhonelinkSetupIcon />
            </Button>
          </div>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
