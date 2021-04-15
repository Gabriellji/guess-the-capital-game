import * as React from 'react';
import { initialState } from './initialState.js';
import { getArrayOfRandomNumbers } from '../helpers/randomNumber';


export const ApiContext = React.createContext();

const url = 'https://restcountries.eu/rest/v2/all';

const fetchData = async (path) => {
    const response = await fetch(path);
    const countries = await response.json();
    return countries;
}

const filterData = (array) => array.filter(el => !!el.capital);

const ApiProvider = ({ children }) => {
    const [state, setState] = React.useState(initialState);

    React.useState(() => {
        setState({
            ...state,
            isLoaded: false
        });
        fetchData(url).then(countries => {
            const result = filterData(countries);
            setState({
                ...state,
                isLoaded: true,
                data: result
            })
        })
    }, [])



    const getRandomCountries = () => {
        setState({
            ...state,
            isCountryLoaded: false,
        });
        const randomIndexes = getArrayOfRandomNumbers(state.data.length);
        const result = randomIndexes.map((elem, idx) => {
            return state.data[elem];
        });
        setState({
            ...state,
            isCountryLoaded: true,
            countries: result
        });
    }

    return (
        <ApiContext.Provider value={{ state, setState, getRandomCountries }}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider;