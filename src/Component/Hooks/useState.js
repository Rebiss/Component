import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { useForm } from '../Hooks/useForm';
import { useFetch } from '../Hooks/useFetch';
import { useMeasure } from '../Hooks/useMeasure';
import '../Hooks/hooks.css'
 
export default function State() {
    const [values,handleChange] = useForm({email: '', password: '', firstname: ''});
    const [caunt, setCaunt] = useState(() => JSON.parse(localStorage.getItem('caunt')));

    const {data, loading} = useFetch(`http://numbersapi.com/${caunt}/trivia`);
    const inputRef = useRef();

    useEffect(() => {
        localStorage.setItem('caunt', JSON.stringify(caunt))
    }, [caunt]);
 
    // Start -> custom useLayoutEffect hooks //
    const [rect, customRef] = useMeasure([data])
    //End // 

    return (
         <div className='component-box-lst'>
             <hr/>
             <div>
                 <div ref={ customRef }>{ loading ? 'Loading' : data }</div>
                 <pre>{ JSON.stringify(rect, null, 2) }</pre>
                 <hr />
                 <div>
                    <button onClick={() => setCaunt(c => Number(c) + 1) }> Incriment </button>
                    <hr />
                    <button onClick={() => setCaunt(c => Number(c) - 1) }> Dicrement </button>
                </div>
             </div>
             <hr/>
   
             <hr/>
             <input type='text' placeholder='E-mail' name='email' ref={inputRef} value={values.email} onChange={handleChange}/>
             <hr/>
             <input type='text' placeholder='Firstname' name='firstname' value={values.firstname} onChange={handleChange}/>
             <hr/>
             <input type='password' placeholder='Password' name='password' value={values.password} onChange={handleChange}/>
             <div>
                 <button onClick={() => inputRef.current.focus() }> Ref </button>
             </div>
         </div>
    )
}
