import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBaseName, selectRates } from 'redux/selectors';
import { latestCoursesThunk } from 'redux/thunk';

const Rates = () => {
  const dispatch = useDispatch();
  const rates = useSelector(selectRates);
  const baseCurrency = useSelector(selectBaseName);

  useEffect(() => {
    if (!baseCurrency) {
      return;
    }
    dispatch(latestCoursesThunk(baseCurrency));
  }, [dispatch, baseCurrency]);

  return (
    <>
      <h2>Rates</h2>
      <h3>1 {baseCurrency} is equal to: </h3>
      <ul>
        {Object.entries(rates).map(([key, value]) => {
          if (key === baseCurrency) return null;
          return (
            <li key={key}>
              <span>{key}</span>
              <span>: {(1 / value).toFixed(2)}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Rates;
