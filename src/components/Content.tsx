import ContentBox from './ContentBox';
import Button from './Button';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import { callAction } from '../store/services/dispatch';

const Content = () => {
  const shouldThrow = useSelector((state: RootState) => state.shouldThrowReducer.shouldThrow);

  if (shouldThrow) {
    throw new Error('Error inside to Content');
  }

  const dispatch = useDispatch();

  const { toggleShouldThrow } = callAction(dispatch);

  return (
    <div>
      <main className="results">
        <ContentBox />
      </main>
      <Button className="create error" onClick={toggleShouldThrow} text="break the universe" />
    </div>
  );
};

export default Content;
