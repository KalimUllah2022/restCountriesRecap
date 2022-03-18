
const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => displayCountries(data));
};
const displayCountries = countries => {
  console.log(countries)
  const countriesHTML = countries.map(country => getCountryHTML(country));
  console.log(countriesHTML[0]);
}
const getCountryHTML = country => {
  return `
    <div>
      <h2>${country.name.common}</h2>
      <h2>${country.name.official}</h2>
    </div>
  `;
}
loadCountries();
