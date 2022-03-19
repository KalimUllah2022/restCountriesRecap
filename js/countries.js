/** @format */

const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => displayCountries(data));
};
const displayCountries = (countries) => {
  console.log(countries[0]);
  const countriesHTML = countries.map((country) => getCountryHTML(country));
  // console.log(countriesHTML[0]);
  const container = document.getElementById("countries");
  container.innerHTML = countriesHTML.join(" ");
};
const getCountryHTML = (name, flags) => {
  return `
    <div class="country">
      <h2>${name.common}</h2>
      <img src="${flags.png}">
    </div>
  `;
};

// Original
// const getCountryHTML = (country) => {
//   return `
//     <div class="country">
//       <h2>${country.name.common}</h2>
//       <img src="${country.flags.png}">
//     </div>
//   `;
// };
// // Option1
// const getCountryHTML = (country) => {
//   const { name, flags } = country;
//   return `
//     <div class="country">
//       <h2>${name.common}</h2>
//       <img src="${flags.png}">
//     </div>
//   `;
// };
loadCountries();
