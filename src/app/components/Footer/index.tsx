import * as React from 'react';

export namespace Footer {
  export interface Props {}
}

export class Footer extends React.Component<Footer.Props> {
  static defaultProps: Partial<Footer.Props> = {
    activeCount: 0,
    completedCount: 0
  };

  render() {
    return <footer />;
  }
}
