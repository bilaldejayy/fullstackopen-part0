const CountryList = ({ countries, handleShowCountry }) => {
    if (countries.length > 10) {
        return <div>Too many matches, specify another filter</div>
    }

    return (
        <div>
            {countries.map(country => (
                <div key={country.cca3}>
                    {country.name.common}
                    <button onClick={() => handleShowCountry(country)}>show</button>
                </div>
            ))}
        </div>
    )
}

export default CountryList
