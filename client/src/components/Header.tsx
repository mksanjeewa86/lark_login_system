import * as React from 'react';
import { AppBar, Toolbar, withStyles, createStyles, Theme, Grid } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      minHeight: '3rem',
      lineHeight: '3rem',
      maxWidth: '100%',
      zIndex: 400,
    },
    copyright: {
      paddingLeft: '1rem',
    },
    version: {
      paddingRight: '1rem;',
      margin: 'auto',
      display: 'flex',
    },
  });

class Header extends React.Component<any, any> {
  // state
  state = {
    id: '',
    password: '',
    openMenu: false,
    dialogOpen: false,
    pathname: '',
    authority: '',
  };

  actToggleSide = (open: any) => async () => {
    this.props.menu.actToggleSide();
  };

  componentDidMount = async () => {
    const { history } = this.props;
    this.setState({
      pathname: history.location.pathname,
    });
  };

  // stateの変更
  handleChange = (name: any) => (event: any) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  openProfile = () => {
    if (this.state.openMenu) {
      this.setState({ openMenu: false });
    } else {
      this.setState({ openMenu: true });
    }
  };

  actToggleSide1 = (open: any) => async () => {
    this.props.menus.actToggleSide();
  };

  // 確認ダイアログを閉じる
  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };

  // ログアウトクリック時
  handleLogoutClick = () => {
    this.setState({ dialogOpen: true });
  };

  // ログアウト
  handleLogout = async () => {
    const { history, system } = this.props;
    try {
      await system.actEnableLoading();
      const res = await system.actLogout();
      if (!res.error) {
        history.push('/');
      } else {
        await system.actSetMessage(res.message, 'error');
        await system.actEnableMessage();
      }
      await system.actDisableLoading();
      this.setState({ dialogOpen: false });
    } catch (err) {
      // console.log(err);
      // API接続障害
      await system.actSetMessage(err.message, 'error');
      await system.actEnableMessage();
      await system.actDisableLoading();
    }
  };

  // レンダリング
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="fixed" style={{ backgroundColor: 'green', zIndex: 601, height: 75 }}>
          <Grid container spacing={0}>
            <Grid item xs={3} style={{ margin: 'auto' }}>
              <Toolbar variant="regular">
                <img src="/images/logo_white.png" />
              </Toolbar>
            </Grid>
            <Grid
              item
              xs={9}
              className={classes.version}
              style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}
            />
          </Grid>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
