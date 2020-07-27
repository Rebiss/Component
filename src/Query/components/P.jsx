import React from 'react';
import { useQuery } from 'react-query';

const fetchPlanets = async () => {
    const response = await fetch("https://swapi.dev/api/planets/");
    return response.json();

}

export const P = () => {
    const { data, status } = useQuery('planets', fetchPlanets);
    console.log(data, status);

    return (
        <div>
            Planets
        </div>
    )
}