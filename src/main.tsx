import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

interface resultsType {
  name: string;
  text: string;
}

interface ContentBoxProps {
  data: resultsType[];
}
const results: ContentBoxProps = {
  data: [
    {
      name: 'Obi Van',
      text: 'djedai',
    },
  ],
};

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');
createRoot(rootElement).render(<App data={results.data} />);
