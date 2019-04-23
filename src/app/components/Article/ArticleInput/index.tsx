import * as React from 'react';
import { Card, TextArea, Intent, Label, Button } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
export namespace ArticleInput {
  export interface State {
    article: string;
  }
}
const style = {
  container: { height: '500px' },
  deleteButton: { marginTop: '10px', width: '20%', heigth: '5em' },
  buttonGroup: { marginTop: '10px', heigth: '5em' },
  makeButton: { width: '80%', marginTop: '10px', heigth: '5em' }
};

export class ArticleInput extends React.Component<{}, ArticleInput.State> {
  constructor(props: ArticleInput.State, context?: any) {
    super(props, context);
    this.state = { article: '' };
  }
  render() {
    return (
      <Card elevation={2} interactive={false}>
        <Label>
          Article
          <TextArea
            growVertically={true}
            large={true}
            intent={Intent.PRIMARY}
            fill={true}
            value={this.state.article}
            style={style.container}
          />
          <div style={style.buttonGroup}>
            <Button
              onClick={() => console.log('Make')}
              intent={Intent.NONE}
              text={'Make Article'}
              style={style.makeButton}
              icon={IconNames.REFRESH}
            />
            <Button
              onClick={() => console.log('Delete')}
              intent={Intent.NONE}
              style={style.deleteButton}
              text={'delete'}
              icon={IconNames.DELETE}
            />
          </div>
        </Label>
      </Card>
    );
  }
}
