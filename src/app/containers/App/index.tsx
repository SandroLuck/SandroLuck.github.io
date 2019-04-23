import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from 'app/reducers';
import { Header, Footer, ArticleArea } from 'app/components';

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    tmp: string;
  }
}

const style = {
  container: {
    fontFamily: 'Helvetica',
    marginLeft: '15px',
    marginRight: '15px',
    marginTop: '15px',
    marginBottom: '15px',
    fontSize: '2em'
  }
};

@connect(
  (state: RootState, ownProps): Pick<App.Props, 'tmp'> => {
    return { tmp: '' };
  },
  (dispatch: Dispatch): Pick<App.Props, 'tmp'> => ({
    tmp: ''
  })
)
export class App extends React.Component<App.Props> {
  static defaultProps: Partial<App.Props> = {
    tmp: ''
  };

  render() {
    document.body.className = 'bp3-dark';
    return (
      <div style={style.container}>
        <Header />
        <ArticleArea />
        <Footer />
      </div>
    );
  }
}
