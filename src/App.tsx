import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import ErrorBundary from './components/ErrorBundary';
import React from 'react';
import type { ContentBoxProps } from './types/types';

export default class App extends React.Component<ContentBoxProps> {
  render() {
    return (
      <ErrorBundary>
        <Header />
        <Content data={this.props.data} />
      </ErrorBundary>
    );
  }
}
