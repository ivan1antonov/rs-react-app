import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import Loader from './components/Loader.tsx';
import { getResults } from './services/services.tsx';
import type { resultsType, AppState, ApiResponse } from './types/types.tsx';

export default class App extends React.Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = { data: [], inputValue: '', shouldThrow: false, isLoading: true };
  }

  getData(response: ApiResponse): void {
    const results: resultsType[] = response.results.map(
      ({ name, height, gender, hair_color, birth_year }) => ({
        name: name,
        text: `Height: ${height}, Gender: ${gender}, Hair Color: ${hair_color}, Birth Year: ${birth_year}`,
      })
    );
    this.setState({ data: results });
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const prevSearch = localStorage.getItem('results');
    if (prevSearch) {
      this.getNewData(prevSearch);
      this.setState({ inputValue: prevSearch });
    } else {
      try {
        const response = await getResults('');
        this.getData(response);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  async getNewData(value: string) {
    this.setState({ isLoading: true });
    try {
      const response = await getResults(value);
      this.getData(response);
    } finally {
      this.setState({ isLoading: false });
    }
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

  createError = () => {
    this.setState({ shouldThrow: true });
  };

  render() {
    return (
      <ErrorBoundary>
        <Header
          value={this.state.inputValue}
          newValue={this.newValue.bind(this)}
          onSearch={this.onSearch.bind(this)}
        />
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Content
            data={this.state.data}
            shouldThrow={this.state.shouldThrow}
            isError={this.createError}
          />
        )}
      </ErrorBoundary>
    );
  }
}
