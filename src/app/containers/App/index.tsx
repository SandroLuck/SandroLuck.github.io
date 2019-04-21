import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from 'app/reducers';
import { Header, Footer } from 'app/components';

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    tmp: string;
  }
}

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

  constructor(props: App.Props, context?: any) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
