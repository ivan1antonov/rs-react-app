import { useSelector, useDispatch } from 'react-redux';
import Button from './Button';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import type { RootState, AppDispatch } from '../store';
import { callAction } from '../utils/dispatch';
import { fetchResultsThunk } from '../store/thunks/thunk';

const Header = () => {
  const value = useSelector((state: RootState) => state.valueReducer.value);
  const dispatch = useDispatch<AppDispatch>();

  const { setValue, clearValue } = callAction(dispatch);
  const navigate = useNavigate();
  function onSearch() {
    dispatch(fetchResultsThunk({ query: value.trim() }));
    clearValue();
  }

  return (
    <header className="header">
      <Input
        className="input"
        type="text"
        value={value}
        newValue={setValue}
        onEnter={onSearch}
        placeholder="Do you want find anyone?"
      />
      <Button className="button" text="Search" onClick={onSearch} />
      <Button className="about_button" text="About author" onClick={() => navigate('/about')} />
    </header>
  );
};

export default Header;
