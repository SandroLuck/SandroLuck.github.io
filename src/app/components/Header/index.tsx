import * as React from 'react';
import { COLORS } from '../../../main';

export namespace Header {
  export interface Props {}
}

const style = {
  header: {
    lineHeight: 1,
    fontSize: '50px',
    fontColor: COLORS.veryDark
  }
};
export class Header extends React.Component<Header.Props> {
  constructor(props: Header.Props, context?: any) {
    super(props, context);
  }
  render() {
    return (
      <header>
        <h1 style={style.header}>BBC Forum Article Writter</h1>
      </header>
    );
  }
}
