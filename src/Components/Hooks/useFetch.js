import { useEffect, useState } from 'react';

export const useFetch = url => {
    const [state, setState] = useState({data: null, loading: true})
    useEffect(() => {
        setState(state => ({data: state.data, loading: true}));
        fetch(url)
            .then(data => data.text())
            .then(i => {
                setState({data: i, loading: false })
            })
    }, [url])

    return state;
}