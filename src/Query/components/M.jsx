import React from 'react';
import { useQuery } from 'react-query';

const fetchPeople = async () => {
    const response = await fetch("https://swapi.dev/api/people/");
    return response.json()

}

export const M = () => {
    const { data, status } = useQuery('people', fetchPeople );
    console.log(data, status);

    return (
        <div>
            <h2>People</h2>
            { status === 'loading' && ( <div> Loading... </div> )}
            { status === 'error' && (<div> Error fetching </div> )}
            { status === 'success' && (
                <div>
                    { data.results.map( m => <div key={data.results.diameter}>{ m.name } </div>)}
                </div>
            )}
        </div>
    )
}