import * as React from 'react';
import { ApiContext } from '../../../context/ApiProvider';
import Card from '../../atoms/card/Card';

const addScore = (score, number) => score + number;

const CardList = () => {
    const { state, getRandomCountries } = React.useContext(ApiContext);
    const [score, setScore] = React.useState(0);

    const clickHandler = (e) => {
        const id = e.target.id;
        if (id === state.countries[0].name.split(',')[0]) {
            const newScore = addScore(score, 20);
            setScore(newScore);
            getRandomCountries();
        } else {
            getRandomCountries();
        }
    }

    React.useEffect(() => {
        if (state.isLoaded) {
            getRandomCountries()
        }
    }, [state.isLoaded]);

    return state.isCountryLoaded && (
        <div>
            <h1>{state.countries[0].name.split(',')[0]}</h1>
            {
                state.countries.map(country =>
                    <Card key={country.capital}
                        id={country.name.split(',')[0]}
                        onClick={clickHandler}
                        capital={country.capital}
                    />)
            }
            {/* TODO: Move score to component */}
            <h2>{score}</h2>
        </div>
    )
}

export default CardList;