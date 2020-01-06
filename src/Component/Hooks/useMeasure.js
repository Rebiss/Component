import { useLayoutEffect, useRef, useState } from 'react';

export const useMeasure = deps => {
    const [rect, setReact] = useState({});
    const customRef = useRef();

    useLayoutEffect(() => {
        setReact(customRef.current.getBoundingClientRect())
    }, deps)

    return [rect, customRef];
}