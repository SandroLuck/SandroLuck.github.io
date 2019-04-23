import * as React from 'react';
import { Label, InputGroup } from '@blueprintjs/core';
export namespace LabelAndInput {
  export interface Props {
    label: string;
    labelKey: string;
    value?: string;
    OnValueChange: (key: string, value: string) => void;
  }
}
const style = {
  input: {
    height: '3em',
    fontSize: '1em'
  }
};

export class LabelAndInput extends React.Component<LabelAndInput.Props> {
  constructor(props: LabelAndInput.Props, context?: any) {
    super(props, context);
  }
  render() {
    const { label, value } = this.props;
    return (
      <Label>
        {label}
        <InputGroup style={style.input} placeholder={value} onChange={this.handleValueChange} />
      </Label>
    );
  }
  handleValueChange: React.FormEventHandler<HTMLInputElement> = (event) => {
    this.props.OnValueChange(this.props.labelKey, event.currentTarget.value);
  };
}
