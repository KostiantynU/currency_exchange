import FormConverter from 'components/FormConverter/FormConverter';
import { useSelector } from 'react-redux';
import { selectExchangeCurrency } from 'redux/selectors';

const HomePage = () => {
  const exchangeCurrency = useSelector(selectExchangeCurrency);

  return (
    <>
      <h1>HomePage</h1>
      <FormConverter />
      {exchangeCurrency && <p>The result of your request: {exchangeCurrency}</p>}
    </>
  );
};
export default HomePage;
