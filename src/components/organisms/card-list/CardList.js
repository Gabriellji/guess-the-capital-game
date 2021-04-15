import * as React from 'react';
import { ApiContext } from '../../../context/ApiProvider';
import Card from '../../atoms/card/Card';

const CardList = () => {
    const { state, setState, getRandomCountries } = React.useContext(ApiContext);

    React.useEffect(() => {
        if (state.isLoaded) {
            getRandomCountries();
        }
    }, [state.isLoaded]);

    return state.isCountryLoaded && (
        <div>
            <h1>{state.countries[0].name.split(',')[0]}</h1>
            {
                state.countries.map(country => <Card key={country.capital} id={country.name} capital={country.capital} />)
            }
        </div>
    )
}

export default CardList;