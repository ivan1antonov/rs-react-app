import React from 'react';
import Button from './Button';

interface ErrorProps {
  children: React.ReactNode;
}

interface ErrorState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log('Error caught: ', error, ' error info: ', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="catch_box">
          <div className="catch_error">
            There was an error on the page, please restart the application
          </div>
          <Button className="reload" onClick={() => window.location.reload()} text="reload page" />
        </div>
      );
    }
    return this.props.children;
  }
}
