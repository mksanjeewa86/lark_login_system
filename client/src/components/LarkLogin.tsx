import * as React from 'react';
import { api } from '../commons';

export default class LarkLogin extends React.Component<any, any> {
  componentDidMount = async () => {
    const param: any = new URLSearchParams(location.search);
    const code = param.get('code');
    const res: any = await api(`/lark_login`, `POST`, { code: code });
    console.log(res);
    window.close();
  };

  render() {
    return <div />;
  }
}
