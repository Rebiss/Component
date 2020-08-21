import React, { useRef } from 'react';
import { Pdf } from './Pdf';
import { useReactToPrint } from 'react-to-print';


export const ToPrint = () => {
    const compRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => compRef.current,
    });
    return (
        <div>
            <Pdf ref={compRef} />
            <button onClick={handlePrint} >Print</button>
        </div>
    )
}