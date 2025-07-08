import React from 'react';
import Button from './Button';

interface ErrorProps {
  children: React.ReactNode;
}

interface ErrorState {
  hasError: boolean;
}

export default class ErrorBundary extends React.Component<ErrorProps, ErrorState> {
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
        <>
          <div>Произошла ошибка на странице, перезагрузите приложение</div>;
          <Button onClick={() => window.location.reload()} text="Перезагрузить" />
        </>
      );
    }
    return this.props.children;
  }
}
