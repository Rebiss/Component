import React, { useEffect, useState } from 'react';
import { useForm } from '../Hooks/useForm';
import { useFetch } from '../Hooks/useFetch';
import '../Hooks/hooks.css'
 
export default function State() {
    const [values,handleChange] = useForm({email: '', password: '', firstname: ''});
    const [caunt, setCaunt] = useState(() => JSON.parse(localStorage.getItem('caunt')));

    const {data, loading} = useFetch(`http://numbersapi.com/${caunt}/trivia`);

    useEffect(() => {
        localStorage.setItem('caunt', JSON.stringify(caunt))
    }, [caunt]); 

    return (
         <div className='component-box-lst'>
             <hr/>
             <div>
                 {loading ? 'Loading' : data}
                 <hr />
                 <div>
                    <button onClick={() => setCaunt(c => Number(c) + 1)}> Incriment </button>
                    <hr />
                    <button onClick={() => setCaunt(c => Number(c) - 1)}> Dicrement </button>
                </div>
             </div>
             <hr/>
   
             <hr/>
             <input type='text' placeholder='E-mail' name='email' value={values.email} onChange={handleChange}/>
             <hr/>
             <input type='text' placeholder='Firstname' name='firstname' value={values.firstname} onChange={handleChange}/>
             <hr/>
             <input type='password' placeholder='Password' name='password' value={values.password} onChange={handleChange}/>
         </div>
    )
}
