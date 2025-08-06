import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import { callAction } from '../utils/dispatch';
import { useDispatch } from 'react-redux';

const Switcher = () => {
  const theme = useSelector((state: RootState) => state.switcherReducer.isDark);
  const dispatch = useDispatch();

  const { toggleTheme } = callAction(dispatch);

  return (
    <div className="switcher_wramper" onClick={toggleTheme}>
      <p className="switcher_title">choose your side</p>
      <div className={`${theme ? 'switcher dark' : 'switcher'} `}></div>
    </div>
  );
};

export default Switcher;
