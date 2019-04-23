import * as React from 'react';

export namespace Header {
  export interface Props {}
}

const style = {
  header: {
    fontSize: '50px',
    fontFamily: 'Arial'
  }
};
export class Header extends React.Component<Header.Props> {
  constructor(props: Header.Props, context?: any) {
    super(props, context);
  }
  render() {
    return (
      <header>
        <h1 style={style.header}>Article Writter</h1>
      </header>
    );
  }
}
