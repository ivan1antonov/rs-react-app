import { useSelector, useDispatch } from 'react-redux';
import Button from './Button';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import type { RootState, AppDispatch } from '../store';
import { callAction } from '../store/services/dispatch';
// import { fetchResultsThunk } from '../store/thunks/thunk';
// import { useGetPersonStarWarsQuery } from '../store/services/starwars';
import Switcher from './Switcher';
import { useLazyGetPersonStarWarsQuery } from '../store/services/starwars';

const Header = () => {
  const value = useSelector((state: RootState) => state.valueReducer);
  const dispatch = useDispatch<AppDispatch>();
  const [triggerSearch] = useLazyGetPersonStarWarsQuery();

  const { setValue, clearValue } = callAction(dispatch);
  const navigate = useNavigate();

  function onSearch() {
    navigate('/');
    triggerSearch(value);
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
      <Button className="about_button" text="About author" onClick={() => navigate('about')} />
      <Switcher />
    </header>
  );
};

export default Header;
