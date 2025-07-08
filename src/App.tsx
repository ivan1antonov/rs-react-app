import React from 'react';
// import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import ErrorBundary from './components/ErrorBundary';
import { getResults } from './services/services.tsx';
import type { resultsType, AppState, InputData } from './types/types.tsx';

export default class App extends React.Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = { data: [] };
  }
  getData(response: InputData): void {
    const results: resultsType[] = response.results.map((item) => ({
      name: item.name,
      text: `Height: ${item.height}, Weight: ${item.mass}`,
    }));
    this.setState({ data: results });
  }
  async componentDidMount() {
    const response = await getResults('page=1');
    this.getData(response);
  }
  async getNewData(value: string) {
    const response = await getResults(value);
    this.getData(response);
  }
  render() {
    return (
      <ErrorBundary>
        <Header />
        <Content data={this.state.data} />
      </ErrorBundary>
    );
  }
}
