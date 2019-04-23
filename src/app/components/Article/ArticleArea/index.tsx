import * as React from 'react';
import { ArticleInput, ConfigurationArea } from 'app/components';
import { Divider } from '@blueprintjs/core';
import { ArticleOutput } from 'app/components/Article/ArticleOutput';
interface State {
  articleStyle: ArticleStyle;
}

export interface ArticleStyle {
  StartImage: string;
  EndImage: string;
  LineSeperator: string;
  ColorTitle: string;
  ColorText: string;
}

const DefaultState: State = {
  articleStyle: {
    StartImage: '',
    EndImage: '',
    LineSeperator: '',
    ColorTitle: '',
    ColorText: ''
  }
};
const style = {
  container: {
    width: '100%'
  }
};

export class ArticleArea extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = DefaultState;
  }
  render() {
    return (
      <div style={style.container}>
        <p>{JSON.stringify(this.state, null, 2)}</p>
        <Divider />
        <ConfigurationArea
          articleStyle={this.state.articleStyle}
          changeAStyleValue={this.handleConfigChange}
        />
        <Divider />
        <ArticleInput />
        <Divider />
        <ArticleOutput />
        <Divider />
      </div>
    );
  }
  handleConfigChange = (keyName: string, value: string) => {
    const newArticleConfig = {
      ...this.state.articleStyle,
      [keyName]: value
    };
    this.setState({ ...this.state, articleStyle: newArticleConfig });
  };
}
