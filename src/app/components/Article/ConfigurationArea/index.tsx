import * as React from 'react';
import { Card, Button } from '@blueprintjs/core';
import { LabelAndInput } from 'app/components/LabelAndInput';
import { ArticleStyle } from 'app/components/Article/ArticleArea';
import { IconNames } from '@blueprintjs/icons';

export namespace ConfigurationArea {
  export interface Props {
    articleStyle: ArticleStyle;
    changeAStyleValue: (key: string, value: string) => void;
  }
}

const style = {
  container: {},
  saveConfigButton: { width: '100%', heigth: '100%' }
};

export class ConfigurationArea extends React.Component<ConfigurationArea.Props> {
  constructor(props: ConfigurationArea.Props, context?: any) {
    super(props, context);
  }
  render() {
    return (
      <Card elevation={2} style={style.container} interactive={false}>
        <LabelAndInput
          label={'Start Image'}
          labelKey={'StartImage'}
          value={this.props.articleStyle.StartImage}
          OnValueChange={this.props.changeAStyleValue}
        />
        <LabelAndInput
          label={'Line Seperator'}
          labelKey={'LineSeperator'}
          value={this.props.articleStyle.LineSeperator}
          OnValueChange={this.props.changeAStyleValue}
        />
        <LabelAndInput
          label={'End Image'}
          labelKey={'EndImage'}
          value={this.props.articleStyle.StartImage}
          OnValueChange={this.props.changeAStyleValue}
        />
        <LabelAndInput
          label={'Color Title'}
          labelKey={'ColorTitle'}
          value={this.props.articleStyle.StartImage}
          OnValueChange={this.props.changeAStyleValue}
        />
        <LabelAndInput
          label={'Color Text'}
          labelKey={'ColorText'}
          value={this.props.articleStyle.StartImage}
          OnValueChange={this.props.changeAStyleValue}
        />
        <div style={style.saveConfigButton}>
          <Button icon={IconNames.CLIPBOARD} text={'Save Configuation'} fill={true} />
        </div>
      </Card>
    );
  }
}
