import React, { Component } from "react";

class CountriesOfTheWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            filteredCountries: [],
            searchQuery: "",
        };
    }

    componentDidMount() {
        // Fetch the list of countries from an API
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    countries: data,
                    filteredCountries: data,
                });
            })
            .catch((error) => {
                console.log("Error fetching data: ", error);
            });
    }

    handleSearch = (event) => {
        const searchQuery = event.target.value.toLowerCase();
        const { countries } = this.state;

        const filteredCountries = countries.filter((country) =>
            country.name.common.toLowerCase().includes(searchQuery)
        );

        this.setState({
            searchQuery: event.target.value,
            filteredCountries: filteredCountries,
        });
    };

    render() {
        const { filteredCountries, searchQuery } = this.state;

        return (
            <div>
                <input
                    type="text"
                    placeholder="Search for a country"
                    value={searchQuery}
                    onChange={this.handleSearch}
                />
                <ul>
                    {filteredCountries.map((country, index) => (
                        <li key={index}>{country.name.common}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default CountriesOfTheWorld;
