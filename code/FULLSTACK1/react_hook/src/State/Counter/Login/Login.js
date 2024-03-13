import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import clsx from 'clsx'

export default function Login() {

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({})

    const isStrengthPassword = (password) => {
        const pattern = /"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"/ ;
        return pattern.test(password);
    }

    const isEmail = (email) => {
        const pattern = /^[A-Za-z0-9._%+-]+@([A-Za-z0-9-]+\.)+([A-Za-z0-9]{2,4}|museum)$/ ;
        return pattern.test(email);
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const {email, password} = form;
        
        const errors = {
            email: {},
            password: {}
        }

        if (typeof email==='string' && email.trim()===''){
            errors.email.required = 'Email không được để trống';
        }else if (!isEmail(email)){
            errors.email.email = 'Email không đúng định dạng'
        }

        if (typeof password==='string' && password.trim()===''){
            errors.password.required = 'Password không được để trống';
        }else if (!isStrengthPassword(password)){
            errors.password.password = 'Password không đúng định dạng'
        }
        
        setErrors(errors);
        
    }

    const handleChangeValue = (e) => {
        const data = {...form}
        data[e.target.name] = e.target.value;
        setForm(data);
    }

    const getError = (fieldName) => {
            if (Object.keys(errors).length){
                return errors[fieldName][Object.keys(errors[fieldName])[0]]
            }
    }
    
    

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <form onSubmit={handleSubmitForm}>
                    <div className='mb-3'>
                        <label>Email</label>
                        <input type="text" className={clsx('form-control', getError('email') && 'is-invalid')} placeholder="Email..." 
                        name="email"
                        onChange={handleChangeValue}
                        />
                        {
                            getError("email") &&<div  className="invalid-feedback">
                            {getError('email')}
                        </div>
                        }
                        
                    </div>
                    <div className='mb-3'>
                        <label>Password</label>
                        <input type="password" className={clsx('form-control', getError('password') && 'is-invalid')} placeholder="Password..."
                        name="password"
                        onChange={handleChangeValue} />
                        {
                            getError("password") &&<div  className="invalid-feedback">
                            {getError('password')}
                        </div>
                        }
                    </div>
                    <button type='submit' className='btn btn-primary'>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}
