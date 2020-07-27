import React from 'react';
import { useQuery } from 'react-query';

const fetchPlanets = async () => {
    const response = await fetch("https://swapi.dev/api/planets/");
    return response.json()

}

export const P = () => {
    const { data, status } = useQuery('planets', fetchPlanets);
    console.log(data, status);

    return (
        <div>
            <h2>Planets</h2>
            { status === 'loading' && ( <div> Loading... </div> )}
            { status === 'error' && (<div> Error fetching </div> )}
            { status === 'success' && (
                <div>
                    { data.results.map( p => <div key={data.results.diameter}>{ p.name } </div>)}
                </div>
            )}
        </div>
    )
}