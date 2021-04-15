import * as React from 'react';
import { initialState } from './initialState.js';

export const ApiContext = React.createContext();

const url = 'https://restcountries.eu/rest/v2/all';

const fetchData = async (path) => {
    const response = await fetch(path);
    const countries = await response.json();
    return countries;
}

const ApiProvider = ({ children }) => {
    const [state, setState] = React.useState(initialState);

    React.useState(() => {
        fetchData(url).then(countries => setState({
            ...state,
            data: countries
        }))
    }, [])

    return (
        <ApiContext.Provider value={{ state, setState }}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider;