import React from 'react';
import { useForm } from 'react-hook-form';
import '../Form/form.css'
 

export default function Form() {
    const { register, handleSubmit, watch, errors  } = useForm();
    const onSubmit = event => console.log(event);

    return (
        <div className='form-sign-up'>
           <form className='form-box' onSubmit ={handleSubmit(onSubmit)}>
               <h1 className='h1-text'> Sigin Up</h1>
               
                <input className='sigin-input' type="text" name='name' placeholder='Name'  ref={register}/>
                <input className='sigin-input' name="lastname" placeholder='LastName' ref={register} />

                <input className='sigin-input' type="submit" />
           </form>
        </div>
    )
}


