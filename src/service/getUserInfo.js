export const userInfo = ({ latitude: lat, longitude: long }) => {
  const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';
  const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${apiKey}&language=en`;

  return fetch(urlPosition).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Something go wrong, try again later!');
  });
};

var myHeaders = new Headers();
myHeaders.append('apikey', 'RN6soYAA8bBKGcFvB5VM4RoQlvO5pAtN');

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};
export const exchangeCurrency = ({ amount, to, from }) => {
  return fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Something go wrong, try again later!');
  });
};
export const getLatestCourses = baseCurrency => {
  return fetch(
    `https://api.apilayer.com/exchangerates_data/latest?symbols=usd,eur,pln,gbp&base=${baseCurrency}`,
    requestOptions
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Something go wrong, try again later!');
  });
};
