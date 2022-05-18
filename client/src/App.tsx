import * as React from 'react';
// Route
import * as createBrowserHistory from 'history';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Route, Router, Switch } from 'react-router-dom';

const browserHistory = createBrowserHistory.createBrowserHistory();
const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);

import Header from './components/Header';
// マスタ管理
import Login from './components/Login';
import LarkLogin from './components/LarkLogin';
// SASS
import './styles/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <Router history={history}>
          <Header history={history} />
          <Switch>
            <Route exact={true} path="/" component={Login} />
            <Route exact={true} path="/auth" component={LarkLogin} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
