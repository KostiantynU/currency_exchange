import { useDispatch } from 'react-redux';
import { exchangeCurrencyThunk } from 'redux/thunk';

const FormConverter = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const { currency } = evt.currentTarget.elements;
    const [amount, from, , to] = currency.value.split(' ');

    dispatch(exchangeCurrencyThunk({ amount, to, from }));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder="15 USD in UAH" name="currency" required />
        </label>
        <button type="sudmit">Convert</button>
      </form>
    </>
  );
};
export default FormConverter;
