fetch = ("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
   
    const asiaCountries = data.filter((country) => country.region === "Asia");

    console.log("Countries in Asia:", asiaCountries);

    
    const countriesWithLowPopulation = data.filter(
      (country) => country.population < 200000
    );

    console.log(
      "Countries with population less than 2 lakhs:",
      countriesWithLowPopulation
    );

    
    data.forEach((country) => {
      console.log(
        `Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.svg}`
      );
    });

    
    const totalPopulation = data.reduce(
      (acc, country) => acc + country.population,
      0
    );

    console.log("Total population of countries:", totalPopulation);

    
    const countryWithUSD = data.find((country) => {
      return (
        country.currencies && Object.values(country.currencies).includes("USD")
      );
    });

    console.log("Country that uses US dollars:", countryWithUSD);
  })
  .catch((error) => console.log("Error fetching data:", error));
