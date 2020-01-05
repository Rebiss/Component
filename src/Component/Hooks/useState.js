import React, { useState } from 'react';
import { useForm } from '../Hooks/useForm';

export default function State() {
    const [values,handleChange] = useForm({email: '', password: ''});

    return (
         <div>
             <input type='text' name='email' value={values.email} onChange={handleChange}/>
             <input type='password' name='password' value={values.password} onChange={handleChange}/>
         </div>
    )
}
