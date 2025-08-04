import ContentBox from './ContentBox';
import Button from './Button';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import { callAction } from '../utils/dispatch';

const Content = () => {
  const shouldThrow = useSelector((state: RootState) => state.shouldThrowReducer.shouldThrow);

  if (shouldThrow) {
    throw new Error('Error inside to Content');
  }

  const dispatch = useDispatch();

  const { toggleShouldThrow } = callAction(dispatch);

  return (
    <main className="results">
      <ContentBox />
      <Button className="create error" onClick={toggleShouldThrow} text="break the universe" />
    </main>
  );
};

export default Content;
