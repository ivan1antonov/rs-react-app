import ContentBox from './ContentBox';
import Button from './Button';
import type { ContentProps } from '../types/types';

const Content = ({ isError, data, shouldThrow }: ContentProps) => {
  if (shouldThrow) {
    throw new Error('Error inside to Content');
  }
  return (
    <main className="results">
      <ContentBox data={data} />
      <Button className="create error" onClick={isError} text="break the universe" />
    </main>
  );
};

export default Content;
