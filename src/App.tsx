import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import ErrorBundary from './components/ErrorBundary';
import { getResults } from './services/services.tsx';
import type { resultsType, AppState, ApiResponse } from './types/types.tsx';

export default class App extends React.Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = { data: [], inputValue: '' };
  }
  getData(response: ApiResponse): void {
    const results: resultsType[] = response.results.map((item) => ({
      name: item.name,
      text: `Height: ${item.height}, Gender: ${item.gender}, Hair Color: ${item.hair_color}, Birth Year: ${item.birth_year}`,
    }));
    this.setState({ data: results });
  }
  async componentDidMount() {
    const response = await getResults('');
    this.getData(response);
  }
  async getNewData(value: string) {
    const response = await getResults(value);
    this.getData(response);
  }
  newValue(value: string) {
    this.setState({ inputValue: value });
  }
  onSearch() {
    if (localStorage.getItem('results') === this.state.inputValue.trim()) {
      return;
    }
    this.getNewData(this.state.inputValue.trim());
    this.setState({ inputValue: '' });
  }

  render() {
    return (
      <ErrorBundary>
        <Header
          value={this.state.inputValue}
          newValue={this.newValue.bind(this)}
          onSearch={this.onSearch.bind(this)}
        />
        <Content data={this.state.data} />
      </ErrorBundary>
    );
  }
}
