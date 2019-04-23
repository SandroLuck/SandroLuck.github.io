import * as React from 'react';
import { Card, TextArea, Intent, Label, Button, ButtonGroup } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
export namespace ArticleOutput {
  export interface State {
    article: string;
  }
}
const style = {
  container: {},
  copyArticle: {}
};

export class ArticleOutput extends React.Component<{}, ArticleOutput.State> {
  constructor(props: ArticleOutput.State, context?: any) {
    super(props, context);
    this.state = { article: '' };
  }
  render() {
    return (
      <Card elevation={2} style={style.container} interactive={false}>
        <Label>
          <ButtonGroup>
            <Button
              onClick={() => console.log('Delete')}
              intent={Intent.NONE}
              style={style.copyArticle}
              text={'Make Article'}
              icon={IconNames.CLIPBOARD}
            />
          </ButtonGroup>
          <TextArea
            growVertically={true}
            large={true}
            intent={Intent.PRIMARY}
            fill={true}
            value={this.state.article}
          />
        </Label>
      </Card>
    );
  }
}
